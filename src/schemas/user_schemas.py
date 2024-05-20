from pydantic import BaseModel


class UserLogin(BaseModel):
    username: str
    password: str


class CreateUser(BaseModel):
    username: str
    email: str = None
    full_name: str = None
    password: str = None


class User(BaseModel):
    id: int
    username: str
    email: str = None
    full_name: str = None

    class Config:
        orm_mode = True
