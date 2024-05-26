from datetime import timedelta

from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext


class DataBase:
    USER = 'db_user'
    PASSWORD = 'db_user'
    PORT = '5432'
    HOST = '192.168.88.130'
    NAME = 'maindb'
    SCHEMA = 'main'
    URL = f'postgresql://{USER}:{PASSWORD}@{HOST}:{PORT}/{NAME}'


SECRET_KEY = 'my_secret_key'
ALGORITHM = 'HS256'
EXPIRATION_TIME = timedelta(minutes=30)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/token')
pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
