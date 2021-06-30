from flask import Blueprint, request, jsonify
from app.models import db, Movie

movie_routes = Blueprint('movies', __name__)


@movie_routes.route('')
def get_all_movies():
    movies = Movie.query.order_by(Movie.created_at.dec()).all()
    return {"movies": [movie.to_dict() for movie in movies]}


@movie_routes.route('/<int:id>')
def get_one_movie(id):
    movie = Movie.query.get(id)
    return movie.to_dict()