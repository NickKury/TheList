from .db import db
from sqlalchemy import func

class Movie(db.Model):
    __tablename__ = 'movies'


    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    platform = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())


    def to_dict(self):
        return{
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'platform': self.platform,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }