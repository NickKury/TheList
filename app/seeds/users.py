from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    Nick = User(
        username='Nick', email='nick@gmail.com', password='password')
    Ryan = User(
        username='Ryan', email='ryan@yahoo.com', password='password')
    Chris = User(
        username='Chris', email='chris@hotmail.com', password='password')
    Shawn = User(
        username='Shawn', email='Shawn@gmail.com', password='password')
    Oscar = User(
        username='Oscar', email='oscar@yahoo.com', password='password')

    db.session.add(demo)
    db.session.add(Nick)
    db.session.add(Ryan)
    db.session.add(Chris)
    db.session.add(Shawn)
    db.session.add(Oscar)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
