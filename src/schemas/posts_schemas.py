from pydantic import BaseModel


class CreatePost(BaseModel):
    title: str
    content: str


class ViewPost(CreatePost):
    id: int


class AllPost(ViewPost):
    id_deleted: bool
