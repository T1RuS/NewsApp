from pydantic import BaseModel


class CreatePost(BaseModel):
    title: str
    content: str


class ViewPost(CreatePost):
    id: int

    class Config:
        orm_mode = True


class AllPost(ViewPost):
    is_deleted: bool
