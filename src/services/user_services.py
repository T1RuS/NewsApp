from sqlalchemy import select, and_
from sqlalchemy.orm import Session

from sql_app.models import user


def create_user(
        username: str,
        email: str,
        full_name: str,
        hashed_password: str,
        db: Session
):
    user_instance = user.User(
        username=username,
        email=email,
        full_name=full_name,
        disabled=False,
        hashed_password=hashed_password
    )
    db.add(user_instance)
    db.commit()
    db.refresh(user_instance)
    return user_instance


def check_login(
      username: str,
      db: Session
):
    q = select(user.User).where(
        user.User.username == username
    )
    result = db.scalar(q)
    return result


def get_user(
        username: str,
        hashed_password: str,
        db: Session
):
    q = select(user.User).where(
        and_(
            user.User.username == username,
            user.User.hashed_password == hashed_password,
            user.User.disabled == False
        )
    )

    result = db.scalar(q)
    return result
