from datetime import datetime

from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from dependencis import get_db
from schemas import user_schemas
from schemas.user_schemas import User, UserLogin
from services import user_services
from settings import pwd_context, EXPIRATION_TIME, SECRET_KEY, oauth2_scheme, ALGORITHM

import jwt


router = APIRouter(prefix='/user', tags=['user'])


def create_jwt_token(data: dict):
    expiration = datetime.utcnow() + EXPIRATION_TIME
    data.update({"exp": expiration})
    token = jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
    return token


def verify_jwt_token(token: str):
    try:
        decoded_data = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return decoded_data
    except jwt.PyJWTError:
        return None


@router.post("/register", response_model=user_schemas.User)
def register_user(user_data: user_schemas.CreateUser, db: Session = Depends(get_db)):
    hashed_password = pwd_context.hash(user_data.password, salt="a"*21 + "e")

    login_exist = user_services.check_login(
        username=user_data.username,
        db=db
    )

    if login_exist:
        raise HTTPException(status_code=400, detail="Such a username exist.")

    user_instance = user_services.create_user(
        username=user_data.username,
        hashed_password=hashed_password,
        full_name=user_data.full_name,
        email=user_data.email,
        db=db
    )
    return user_instance


@router.post("/token")
def authenticate_user(user_data: UserLogin,  db: Session = Depends(get_db)):
    hashed_password = pwd_context.hash(user_data.password, salt="a"*21 + "e")
    user = user_services.get_user(
        username=user_data.username,
        hashed_password=hashed_password,
        db=db
    )
    if not user:
        raise HTTPException(status_code=404, detail="User does not exist.")

    jwt_token = create_jwt_token({"sub": user.username})

    return jwt_token


def get_current_user(token: str = Depends(oauth2_scheme)):
    decoded_data = verify_jwt_token(token)

    if not decoded_data:
        raise HTTPException(status_code=400, detail="User not found")
    return decoded_data


@router.get("/users/me")
def get_user_me(current_user: User = Depends(get_current_user)):
    return current_user
