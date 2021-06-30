from app.models import db, Review


def seed_reviews():
    review1 = Review(
        content='demo content',
        movie_id=1,
        user_id=1
    )

    db.session.add(review1)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()