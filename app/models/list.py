from .db import db
from .list_movie_join import lists_movies
from sqlalchemy import func

class List(db.Model):
    __tablename__ = 'lists'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    listName = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    users = db.relationship("User", back_populates="lists"),
    movies = db.relationship("Movie", secondary=lists_movies, back_populates="lists")

    def to_dict(self):
        return{
            'id': self.id,
            'listName': self.listName,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'movie_id':[movie.id for movie in self.movies]
        }
