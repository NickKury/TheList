from app.models import db, Review


def seed_reviews():
    review1 = Review(
        content='Fight Club is a great movie.  I missed the part about the rules but I cant recommend Fight Club enough.',
        movie_id=1,
        user_id=2
    )
    review2 = Review(
        content='5/7 would watch again',
        movie_id=1,
        user_id=3
    )
    review3 = Review(
        content='Couldnt understand a thing. I think this movie is in a different language',
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