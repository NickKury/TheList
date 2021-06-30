from app.models import db, List


def seed_lists():
    list1 = List(
        listName ='demoList',
        user_id=1
    )

    db.session.add(list1)

    db.session.commit()


def undo_lists():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()