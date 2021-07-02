from app.models import db, Movie


def seed_movies():
    movie1 = Movie(
        title='demoMovie',
        description='Demo movie description',
        platform='Netflix'
    )
    movie2 = Movie(
        title='demoMovie',
        description='Demo movie2 description',
        platform='Netflix'
    )

    db.session.add(movie1)
    db.session.add(movie2)

    db.session.commit()


def undo_movies():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()