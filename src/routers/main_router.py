from fastapi import APIRouter
from starlette.templating import Jinja2Templates
from fastapi.requests import Request


router = APIRouter(prefix='', tags=['main'])

templates = Jinja2Templates(directory="../frontend/build")


@router.get("/{rest_of_path:path}")
async def react_app(req: Request, rest_of_path: str):
    return templates.TemplateResponse('index.html', {'request': req})


