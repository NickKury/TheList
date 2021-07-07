from flask import Blueprint
from app.models import db, User, follow
from flask_login import current_user, login_required





follow_routes = Blueprint('follows', __name__)

@follow_routes.route('/<int:userId>', methods=['POST'])
@login_required
def follow_user(userId):
    # print('===============User from follow routes', userId)
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


# @follow_routes.route('/followers/<int:userId>')
# def get_user_followers(userId):
#     user = User.query.get(userId)
#     # user_follows = user.followed
#     # print('look here at followed!!!!!', user_follows)
#     return user.to_dict()

#     # followed = User.query.join(followers).filter(followers.follower_id == userId)
#     #  print('look here at followed!!!!!', followed)
#     # return user_follows.to_dict()
#     # user = User.query.filter(User.follows.includes(userId))

   