from sqlalchemy import Integer, Sequence, String, Boolean
from sqlalchemy.orm import mapped_column, Mapped

from settings import DataBase
from sql_app.base import Base


class User(Base):
    __tablename__ = 'user'
    __table_args__ = {'schema': DataBase.SCHEMA}

    id: Mapped[int] = mapped_column(
        Integer,
        Sequence('user_id_seq', metadata=Base.metadata),
        primary_key=True,
        nullable=False
    )
    username: Mapped[str] = mapped_column(String, primary_key=True, nullable=False)
    email: Mapped[str] = mapped_column(String, primary_key=True, nullable=False)
    full_name: Mapped[str] = mapped_column(String, primary_key=True, nullable=False)
    disabled: Mapped[bool] = mapped_column(Boolean, primary_key=True, nullable=False)
    hashed_password: Mapped[str] = mapped_column(String, primary_key=True, nullable=False)
