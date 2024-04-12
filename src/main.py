from fastapi import FastAPI

from routers import posts_router

app = FastAPI()


app.include_router(posts_router.router)


# get - list posts
# get - view post
# post - create post
# patch - update post добавить
# delete - delete post добавить
