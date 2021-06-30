from .db import db

lists_movies = db.Table(
    "lists_movies", db.Column(
        "list_id", 
        db.Integer, 
        db.ForeignKey("lists.id"), 
        primary_key=True
    ),
    db.Column(
        "movie_id", 
        db.Integer, 
        db.ForeignKey("movies.id"), 
        primary_key=True
    )
    
)