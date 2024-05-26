from pydantic import BaseModel


class UserLogin(BaseModel):
    username: str
    password: str


class CreateUser(BaseModel):
    username: str
    password: str
    full_name: str
    email: str


class User(BaseModel):
    id: int
    username: str
    email: str
    full_name: str

    class Config:
        orm_mode = True
