from flask import Blueprint, request, jsonify
from app.models import db, List
from flask_login import current_user, login_required

list_routes = Blueprint('lists', __name__)


@list_routes.route('')
def get_all_lists():
    lists = List.query.all()
    return {"lists": [list.to_dict() for list in lists]}


@list_routes.route('/<int:id>')
def get_one_list(id):
    list = List.query.get(id)
    return list.to_dict()


@list_routes.route('/new', methods=["POST"])
@login_required
def post_list():
    new_list = List(
        listName=request.form["listName"],
        user_id=current_user.id
    )
    db.session.add(new_list)
    db.session.commit()
    return new_list.to_dict()

@list_routes.route('/delete/<int:id>', methods=["DELETE"])
@login_required
def delete_list(id):
    list = List.query.get(id)
    if not list:
        return jsonify("list not found")
    db.session.delete(list)
    db.session.commit()
    return {'id': id}
