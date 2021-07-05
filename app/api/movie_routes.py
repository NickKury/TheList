from flask import Blueprint, request, jsonify
from app.models import db, Movie

movie_routes = Blueprint('movies', __name__)


@movie_routes.route('')
def get_all_movies():
    movies = Movie.query.all()
    print("movies from movie_routes", movies)
    return {"movies": [movie.to_dict() for movie in movies]}


@movie_routes.route('/<int:id>')
def get_one_movie(id):
    movie = Movie.query.get(id)
    return movie.to_dict()

# @movie_routes.route('')
# def get_list_movies(id):
#     movies = Movie.query.filter()
