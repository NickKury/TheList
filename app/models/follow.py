from .db import db

# class Follow(db.Model):
    # __tablename__ = 'followers'
followers = db.Table('followers',
    db.Column('follower_id', db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column('followed_id', db.Integer, db.ForeignKey("users.id"), primary_key=True)
)


    # def to_dict(self):
    #     return{
    #         'follower_id': self.follower_id,
    #         'followed_id': self.followed_id
    #     }