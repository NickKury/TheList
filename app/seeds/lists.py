from app.models import db, List


def seed_lists():
    list1 = List(
        listName ='My Fav Movies',
        user_id=1
    )
    list2 = List(
        listName ='Need to watch',
        user_id=1
    )
    list3 = List(
        listName ='Syfy',
        user_id=2
    )
    list4 = List(
        listName ='Action',
        user_id=2
    )
    list5 = List(
        listName ='Animated',
        user_id=2
    )

    db.session.add(list1)
    db.session.add(list2)
    db.session.add(list3)
    db.session.add(list4)
    db.session.add(list5)

    db.session.commit()


def undo_lists():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()