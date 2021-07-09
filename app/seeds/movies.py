from app.models import db, Movie


def seed_movies():

    movie1 = Movie(
        title="Fight Club",
        description="A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
        poster_path= "https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        platform="Netflix"
    )
    movie2 = Movie(
        title="Spirited Away",
        description="A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        poster_path= "https://image.tmdb.org/t/p/w300/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        platform="HBO Max"
    )
    movie3 = Movie(
        title="Pulp Fiction",
        description="A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        poster_path="https://image.tmdb.org/t/p/w300/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        platform="HBO Max"
    )
    movie4 = Movie(
        title="The Dark Knight",
        description="Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        poster_path= "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        platform="Hulu"
    )
    movie5 = Movie(
        title="Spider-Man: Into the Spider-Verse",
        description="Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
        poster_path= "https://image.tmdb.org/t/p/w300/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        platform="Netflix"
    )
    movie6 = Movie(
        title="Interstellar",
        description="The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        poster_path= "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        platform="Hulu"
    )
    movie7 = Movie(
        title="Back to the Future",
        description="Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
        poster_path= "https://image.tmdb.org/t/p/w300/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg",
        platform="Netflix"
    )
    movie8 = Movie(
        title="Avengers: Infinity War",
        description="As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        poster_path= "https://image.tmdb.org/t/p/w300/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        platform="Disney+"
    )
    movie9 = Movie(
        title="Avengers: Endgame",
        description="After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        poster_path= "https://image.tmdb.org/t/p/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        platform="Disney+"
    )
    movie10 = Movie(
        title="The Matrix",
        description="Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        poster_path= "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        platform="HBO Max"
    )
    movie11 = Movie(
        title="Alien",
        description="During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
        poster_path= "https://image.tmdb.org/t/p/w300/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
        platform="Amazon Prime"
    )
    movie12 = Movie(
        title="Aliens",
        description="When Ripley's lifepod is found by a salvage crew over 50 years later, she finds that terra-formers are on the very planet they found the alien species. When the company sends a family of colonists out to investigate her story—all contact is lost with the planet and colonists. They enlist Ripley and the colonial marines to return and search for answers.",
        poster_path= "https://image.tmdb.org/t/p/w300/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg",
        platform="Amazon Prime"
    )
    movie13 = Movie(
        title="2001: A Space Odyssey",
        description="Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
        poster_path= "https://image.tmdb.org/t/p/w300/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
        platform="HBO Max"
    )
    movie14 = Movie(
        title="Princess Mononoke",
        description="Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
        poster_path= "https://image.tmdb.org/t/p/w300/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
        platform="HBO Max"
    )
    movie15 = Movie(
        title="The Truman Show",
        description="Truman Burbank is the star of The Truman Show, a 24-hour-a-day reality TV show that broadcasts every aspect of his life without his knowledge. His entire life has been an unending soap opera for consumption by the rest of the world. And everyone he knows, including his wife and his best friend is really an actor, paid to be part of his life.",
        poster_path= "https://image.tmdb.org/t/p/w300/fjudWJ5TvlFTcMXkwvBuD9v0jhA.jpg",
        platform="Netflix"
    )
    movie16 = Movie(
        title="The Thing",
        description="Members of an American scientific research outpost in Antarctica find themselves battling a parasitic alien organism capable of perfectly imitating its victims. They soon discover that this task will be harder than they thought, as they don't know which members of the team have already been assimilated and their paranoia threatens to tear them apart.",
        poster_path= "https://image.tmdb.org/t/p/w300/tzGY49kseSE9QAKk47uuDGwnSCu.jpg",
        platform="Hulu"
    )
    movie17 = Movie(
        title="The Lord of the Rings: The Fellowship of the Ring",
        description="Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
        poster_path= "https://image.tmdb.org/t/p/w300/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        platform="HBO Max"
    )
    movie18 = Movie(
        title="The Lord of the Rings: The Two Towers",
        description="Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
        poster_path= "https://image.tmdb.org/t/p/w300/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
        platform="HBO Max"
    )
    movie19 = Movie(
        title="The Lord of the Rings: The Return of the King",
        description="Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
        poster_path= "https://image.tmdb.org/t/p/w300/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        platform="HBO Max"
    )
    movie20 = Movie(
        title="Justice League Dark: Apokolips War",
        description="Earth is decimated after intergalactic tyrant Darkseid has devastated the Justice League in a poorly executed war by the DC Super Heroes. Now the remaining bastions of good – the Justice League, Teen Titans, Suicide Squad and assorted others – must regroup, strategize and take the war to Darkseid in order to save the planet and its surviving inhabitants.",
        poster_path= "https://image.tmdb.org/t/p/w300/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg",
        platform="HBO Max"
    )


    db.session.add(movie1)
    db.session.add(movie2)
    db.session.add(movie3)
    db.session.add(movie4)
    db.session.add(movie5)
    db.session.add(movie6)
    db.session.add(movie7)
    db.session.add(movie8)
    db.session.add(movie9)
    db.session.add(movie10)
    db.session.add(movie11)
    db.session.add(movie12)
    db.session.add(movie13)
    db.session.add(movie14)
    db.session.add(movie15)
    db.session.add(movie16)
    db.session.add(movie17)
    db.session.add(movie18)
    db.session.add(movie19)
    db.session.add(movie20)

    db.session.commit()


def undo_movies():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()