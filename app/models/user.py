from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import func
from .follow import followers

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    reviews = db.relationship("Review", back_populates="users")
    follows = db.relationship("User", secondary=followers, primaryjoin=(followers.c.follower_id == id), secondaryjoin=(followers.c.followed_id == id), backref=db.backref('followers', lazy='dynamic'), lazy='dynamic')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'follows': [follow.username for follow in self.follows] 
            # 'follows': [follow.id for follow in self.follows] add to_dict()
        }

    # def is_following(self, user):
    #     return self.followers.filter(follow.c.followed_id == userId).count() > 0


    def follow(self, userId):
        # if not self.is_following(userId):
            userId.followers.append(self)


    def unfollow(self, userId):
        # if self.is_following(user):
            userId.followers.remove(self)