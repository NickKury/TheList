from .db import db
from sqlalchemy import func


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    content = db.Column(db.Text)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    movies = db.relationship("Movie", back_populates="reviews")
    users = db.relationship("User", back_populates="reviews")

    def to_dict(self):
        return{
            'id': self.id,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'movie_id': self.movie_id,
            'user_id': self.user_id,
            'user': self.users.to_dict(),
            'username': self.users.username,
            'movie': self.movies.to_dict()
        }