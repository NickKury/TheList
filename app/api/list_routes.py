from flask import Blueprint, request, jsonify
from app.models import db, List

list_routes = Blueprint('lists', __name__)


@list_routes.route('')
def get_all_lists():
    lists = List.query.order_by(List.created_at.dec()).all()
    return {"lists": [list.to_dict() for list in lists]}


@list_routes.route('/<int:id>')
def get_one_list(id):
    list = List.query.get(id)
    return list.to_dict()