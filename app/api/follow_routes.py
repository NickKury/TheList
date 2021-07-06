from flask import Blueprint
from app.models import db, User
from flask_login import current_user, login_required

follow_routes = Blueprint('follows', __name__)

@follow_routes.route('/<int:userId>', methods=['POST'])
@login_required
def follow_user(userId):
    print('===============User from follow routes', userId)
    user = User.query.filter_by(id=userId).first()
    current_user.follow(user)
    db.session.commit()
    print(f'successful follow of user {userId}')
    return user.to_dict()

@follow_routes.route('/unfollow/<int:userId>', methods=['POST'])
@login_required
def unfollow(userId):
    user = User.query.filter_by(id=userId).first()
    current_user.unfollow(user)
    db.session.commit()
    print(f'successful unfollow of {userId}')
    return user.to_dict()