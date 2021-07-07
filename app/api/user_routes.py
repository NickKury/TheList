from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, List

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/lists/<int:id>')
# @login_required
def get_user_lists(id):
    lists = List.query.filter(List.user_id == id).all()
    return {'lists': [list.to_dict() for list in lists]}