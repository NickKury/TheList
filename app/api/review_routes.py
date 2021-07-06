from flask import Blueprint, request, jsonify
from app.models import db, Review
from flask_login import current_user, login_required

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:id>')
def get_movie_reviews(id):
    reviews = Review.query.filter(Review.user_id == id).all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/new', methods=["POST"])
# @login_required
def post_review():
    new_review = Review(
        content=request.form['content'],
        user_id=current_user.id,
        movie_id=request.form['movie_id']
    )
    db.session.add(new_review)
    db.session.commit()
    return new_review.to_dict()