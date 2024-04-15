from datetime import datetime
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from starlette import status

from dependencis import get_db
from schemas import posts_schemas
from services import posts_services

router = APIRouter(prefix='/posts', tags=['posts'])


@router.get('/', response_model=List[posts_schemas.ViewPost])
async def api_list_posts(
        limit: int = 20,
        offset: int = 0,
        db: Session = Depends(get_db)
):
    list_posts = posts_services.list_posts(
        limit=limit,
        offset=offset,
        db=db
    )
    return list_posts


@router.get('/{post_id}', response_model=Optional[posts_schemas.ViewPost])
async def api_view_post(
        post_id: int,
        db: Session = Depends(get_db)
):
    post_obj = posts_services.get_post(post_id=post_id, db=db)
    return post_obj


@router.post('/', response_model=posts_schemas.ViewPost)
async def api_create_post(
        post_obj: posts_schemas.CreatePost,
        db: Session = Depends(get_db)
):
    post_instance = posts_services.create_post(
        title=post_obj.title,
        content=post_obj.content,
        db=db
    )
    return post_instance


@router.patch('/{post_id}', response_model=posts_schemas.ViewPost)
async def api_update_post(
        post_id: int,
        post_data: posts_schemas.ViewPost,
        db: Session = Depends(get_db)
):
    post_obj = posts_services.get_post(post_id=post_id, db=db)

    if not post_obj:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f'Post with id = {post_id} does not exist'
        )

    post_updated = posts_services.update_post(
        post_obj=post_obj,
        post_data=post_data,
        db=db
    )
    return post_updated


@router.delete('/{post_id}', response_model=posts_schemas.AllPost)
async def api_delete_post(
        post_id: int,
        db: Session = Depends(get_db)
):
    post_obj = posts_services.get_post(post_id=post_id, db=db)

    if not post_obj:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f'Post with id = {post_id} does not exist'
        )

    deleted_post = posts_services.delete_post(
        post_obj=post_obj,
        db=db
    )
    return deleted_post
