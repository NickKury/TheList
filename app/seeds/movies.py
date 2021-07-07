from app.models import db, Movie


def seed_movies():
    # movie1 = Movie(
    #     title='demoMovie',
    #     description='Demo movie description',
    #     platform='Netflix'
    # )
    movie2 = Movie(
        title='demoMovie2',
        description='Demo movie2 description',
        platform='Netflix'
    )
    movie1 = Movie(
        title='Fight Club',
        description="A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
        poster_path= "https://image.tmdb.org/t/p/w400/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        platform='Netflix'
    )

    db.session.add(movie1)
    db.session.add(movie2)

    db.session.commit()


def undo_movies():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()