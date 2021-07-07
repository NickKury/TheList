from .db import db
from .list_movie_join import lists_movies
from sqlalchemy import func

class Movie(db.Model):
    __tablename__ = 'movies'


    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    poster_path = db.Column(db.String)
    platform = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    lists = db.relationship("List", secondary=lists_movies, back_populates='movies')
    reviews = db.relationship("Review", back_populates="movies")

    def to_dict(self):
        return{
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'poster_path': self.poster_path,
            'platform': self.platform,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'reviews': [review.id for review in self.reviews]
        }