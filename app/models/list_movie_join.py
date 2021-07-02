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

# class List_Movies(db.Model):
#     __tablename__ = 'lists_movies'

#     list_id = db.Column(db.Integer, db.ForeignKey("lists.id"))
#     movie_id = db.Column(db.Integer, db.ForeignKey("movies.id"))

#     def to_dict(self):
#         return{
#             "list_id": self.list_id,
#             "movie_id": self.movie_id
#         }


