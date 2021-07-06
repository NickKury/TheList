from app.models import db, Review


def seed_reviews():
    review1 = Review(
        content='demo content',
        movie_id=1,
        user_id=1
    )
    review2 = Review(
        content='demo content2',
        movie_id=1,
        user_id=1
    )
    review3 = Review(
        content='demo content3',
        movie_id=2,
        user_id=2
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()