from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from settings import DataBase

SQLALCHEMY_DATABASE_URL = DataBase.URL

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_pre_ping=True
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)
