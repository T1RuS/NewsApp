from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles

from routers import posts_router, main_router, user_router

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount('/static', StaticFiles(directory='../frontend/build/static'), 'static')

app.include_router(user_router.router)
app.include_router(posts_router.router)
app.include_router(main_router.router)

# get - list posts
# get - view post
# post - create post
# patch - update post добавить
# delete - delete post добавить
