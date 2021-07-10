from flask import Blueprint, request, jsonify
from app.models import db, Review
from flask_login import current_user, login_required

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:id>')
def get_movie_reviews(id):
    reviews = Review.query.filter(Review.movie_id == id).all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/new', methods=["POST"])
@login_required
def post_review():
    new_review = Review(
        content=request.form['content'],
        user_id=current_user.id,
        movie_id=request.form['movie_id']
    )
    db.session.add(new_review)
    db.session.commit()
    return new_review.to_dict()


@review_routes.route('/delete/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return {'id':id}


@review_routes.route('/update/<int:id>', methods=["PUT"])
@login_required
def update_review(id):
    edit_review = Review.query.get(id)
    edit_review.content = request.form["content"]
    db.session.add(edit_review)
    db.session.commit()
    return edit_review.to_dict()