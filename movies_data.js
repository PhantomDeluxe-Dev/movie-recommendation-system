const MOVIES_DB = [
  {
    "id": 1,
    "title": "Baahubali: The Beginning",
    "language": "Telugu",
    "genre": ["Action", "Adventure", "Drama"],
    "rating": 8.0,
    "year": 2015,
    "description": "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
    "poster": "https://picsum.photos/seed/1/300/450"
  },
  {
    "id": 2,
    "title": "RRR",
    "language": "Telugu",
    "genre": ["Action", "Drama", "History"],
    "rating": 7.8,
    "year": 2022,
    "description": "A fictitious story about two legendary revolutionaries and their journey far away from home before they began fighting for their country.",
    "poster": "https://picsum.photos/seed/2/300/450"
  },
  {
    "id": 3,
    "title": "Pushpa: The Rise",
    "language": "Telugu",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 6.9,
    "year": 2021,
    "description": "A laborer rises through the ranks of a smuggling syndicate, but his dangerous ambitions lead to conflicts with powerful rivals.",
    "poster": "https://picsum.photos/seed/3/300/450"
  },
  {
    "id": 4,
    "title": "Arjun Reddy",
    "language": "Telugu",
    "genre": ["Drama", "Romance"],
    "rating": 7.9,
    "year": 2017,
    "description": "A brilliant but short-tempered surgeon goes on a destructive path after his girlfriend marries someone else.",
    "poster": "https://picsum.photos/seed/4/300/450"
  },
  {
    "id": 5,
    "title": "Eega",
    "language": "Telugu",
    "genre": ["Action", "Comedy", "Fantasy"],
    "rating": 7.8,
    "year": 2012,
    "description": "A murdered man is reincarnated as a housefly and seeks to avenge his death.",
    "poster": "https://picsum.photos/seed/5/300/450"
  },
  {
    "id": 6,
    "title": "Magadheera",
    "language": "Telugu",
    "genre": ["Action", "Drama", "Fantasy"],
    "rating": 7.7,
    "year": 2009,
    "description": "A man discovers he has a connection to a warrior from 400 years ago and must fulfill his destiny.",
    "poster": "https://picsum.photos/seed/6/300/450"
  },
  {
    "id": 7,
    "title": "Athadu",
    "language": "Telugu",
    "genre": ["Action", "Comedy", "Drama"],
    "rating": 8.2,
    "year": 2005,
    "description": "A professional killer who never fails is hired to assassinate a man but ends up protecting his family instead.",
    "poster": "https://picsum.photos/seed/7/300/450"
  },
  {
    "id": 8,
    "title": "Jersey",
    "language": "Telugu",
    "genre": ["Drama", "Sport"],
    "rating": 8.3,
    "year": 2019,
    "description": "A failed cricketer decides to make a comeback in his late thirties to fulfill his son's wish.",
    "poster": "https://picsum.photos/seed/8/300/450"
  },
  {
    "id": 9,
    "title": "Rangasthalam",
    "language": "Telugu",
    "genre": ["Action", "Drama", "Thriller"],
    "rating": 8.5,
    "year": 2018,
    "description": "A deaf man becomes embroiled in a battle against a powerful village leader who is exploiting the poor.",
    "poster": "https://picsum.photos/seed/9/300/450"
  },
  {
    "id": 10,
    "title": "Sye Raa Narasimha Reddy",
    "language": "Telugu",
    "genre": ["Action", "Biography", "History"],
    "rating": 6.5,
    "year": 2019,
    "description": "The story of India's first freedom fighter, Uyyalawada Narasimha Reddy, who revolted against the British rule.",
    "poster": "https://picsum.photos/seed/10/300/450"
  },
  {
    "id": 11,
    "title": "Kantara",
    "language": "Kannada",
    "genre": ["Action", "Drama", "Fantasy"],
    "rating": 8.3,
    "year": 2022,
    "description": "A mythical tale about a man's battle to protect his village's ancient traditions and land.",
    "poster": "https://picsum.photos/seed/11/300/450"
  },
  {
    "id": 12,
    "title": "Ala Vaikunthapurramuloo",
    "language": "Telugu",
    "genre": ["Action", "Comedy", "Drama"],
    "rating": 7.2,
    "year": 2020,
    "description": "A man who grew up in a middle-class family discovers he was switched at birth with a wealthy man's son.",
    "poster": "https://picsum.photos/seed/12/300/450"
  },
  {
    "id": 13,
    "title": "Sarileru Neekevvaru",
    "language": "Telugu",
    "genre": ["Action", "Comedy", "Drama"],
    "rating": 6.0,
    "year": 2020,
    "description": "An army major arrives in a village to help a family in distress and ends up fighting a corrupt politician.",
    "poster": "https://picsum.photos/seed/13/300/450"
  },
  {
    "id": 14,
    "title": "Bheeshma",
    "language": "Telugu",
    "genre": ["Comedy", "Romance"],
    "rating": 6.5,
    "year": 2020,
    "description": "A man who is unlucky in love gets a chance to win his dream girl's heart when he's mistaken for a successful executive.",
    "poster": "https://picsum.photos/seed/14/300/450"
  },
  {
    "id": 15,
    "title": "Geetha Govindam",
    "language": "Telugu",
    "genre": ["Comedy", "Romance"],
    "rating": 7.5,
    "year": 2018,
    "description": "A young professor falls in love with a woman but accidentally offends her, leading to a series of misunderstandings.",
    "poster": "https://picsum.photos/seed/15/300/450"
  },
  {
    "id": 16,
    "title": "Mahanati",
    "language": "Telugu",
    "genre": ["Biography", "Drama", "Musical"],
    "rating": 8.5,
    "year": 2018,
    "description": "The biographical story of Savitri, one of the greatest actresses in South Indian cinema.",
    "poster": "https://picsum.photos/seed/16/300/450"
  },
  {
    "id": 17,
    "title": "Maharshi",
    "language": "Telugu",
    "genre": ["Action", "Drama"],
    "rating": 6.2,
    "year": 2019,
    "description": "A successful businessman returns to his roots to help his friend and his village, confronting his own past.",
    "poster": "https://picsum.photos/seed/17/300/450"
  },
  {
    "id": 18,
    "title": "Uppena",
    "language": "Telugu",
    "genre": ["Drama", "Romance"],
    "rating": 6.7,
    "year": 2021,
    "description": "A young fisherman falls in love with a village headman's daughter, leading to tragic consequences.",
    "poster": "https://picsum.photos/seed/18/300/450"
  },
  {
    "id": 19,
    "title": "Aravinda Sametha",
    "language": "Telugu",
    "genre": ["Action", "Drama"],
    "rating": 6.8,
    "year": 2018,
    "description": "A man returns to his village to end a long-standing feud between two families.",
    "poster": "https://picsum.photos/seed/19/300/450"
  },
  {
    "id": 20,
    "title": "Krack",
    "language": "Telugu",
    "genre": ["Action", "Crime", "Thriller"],
    "rating": 6.3,
    "year": 2021,
    "description": "A fierce police officer battles a notorious criminal who has been terrorizing the region.",
    "poster": "https://picsum.photos/seed/20/300/450"
  },
  {
    "id": 21,
    "title": "Dangal",
    "language": "Hindi",
    "genre": ["Action", "Biography", "Drama", "Sport"],
    "rating": 8.3,
    "year": 2016,
    "description": "Former wrestler Mahavir Singh Phogat trains his daughters to become world-class wrestlers.",
    "poster": "https://picsum.photos/seed/21/300/450"
  },
  {
    "id": 22,
    "title": "3 Idiots",
    "language": "Hindi",
    "genre": ["Comedy", "Drama"],
    "rating": 8.4,
    "year": 2009,
    "description": "Two friends search for their long-lost college buddy who challenged the educational system's conventions.",
    "poster": "https://picsum.photos/seed/22/300/450"
  },
  {
    "id": 23,
    "title": "Lagaan",
    "language": "Hindi",
    "genre": ["Drama", "Musical", "Sport"],
    "rating": 8.1,
    "year": 2001,
    "description": "In colonial India, villagers accept a challenge to play a cricket match against British officers to avoid paying taxes.",
    "poster": "https://picsum.photos/seed/23/300/450"
  },
  {
    "id": 24,
    "title": "Zindagi Na Milegi Dobara",
    "language": "Hindi",
    "genre": ["Adventure", "Comedy", "Drama"],
    "rating": 8.2,
    "year": 2011,
    "description": "Three friends go on a road trip in Spain that changes their perspective on life.",
    "poster": "https://picsum.photos/seed/24/300/450"
  },
  {
    "id": 25,
    "title": "Gully Boy",
    "language": "Hindi",
    "genre": ["Drama", "Musical"],
    "rating": 7.9,
    "year": 2019,
    "description": "A coming-of-age story about a street rapper from the slums of Mumbai who follows his dream of becoming a hip-hop artist.",
    "poster": "https://picsum.photos/seed/25/300/450"
  },
  {
    "id": 26,
    "title": "Andhadhun",
    "language": "Hindi",
    "genre": ["Crime", "Thriller"],
    "rating": 8.3,
    "year": 2018,
    "description": "A series of mysterious events change the life of a blind piano player, who now must report a murder he should not have seen.",
    "poster": "https://picsum.photos/seed/26/300/450"
  },
  {
    "id": 27,
    "title": "Tumbbad",
    "language": "Hindi",
    "genre": ["Drama", "Fantasy", "Horror"],
    "rating": 8.2,
    "year": 2018,
    "description": "A mythological story about a goddess who created the entire universe. The story is about greed and a god-like entity.",
    "poster": "https://picsum.photos/seed/27/300/450"
  },
  {
    "id": 28,
    "title": "Drishyam",
    "language": "Hindi",
    "genre": ["Crime", "Drama", "Thriller"],
    "rating": 8.2,
    "year": 2015,
    "description": "A man covers up a crime committed by his family to protect them from the law.",
    "poster": "https://picsum.photos/seed/28/300/450"
  },
  {
    "id": 29,
    "title": "Pink",
    "language": "Hindi",
    "genre": ["Crime", "Drama", "Thriller"],
    "rating": 7.9,
    "year": 2016,
    "description": "When three young women are implicated in a crime, a retired lawyer steps forward to help them clear their names.",
    "poster": "https://picsum.photos/seed/29/300/450"
  },
  {
    "id": 30,
    "title": "Article 15",
    "language": "Hindi",
    "genre": ["Crime", "Drama", "Mystery"],
    "rating": 8.1,
    "year": 2019,
    "description": "A young police officer investigates a case involving three missing girls that leads him to uncover caste-based discrimination.",
    "poster": "https://picsum.photos/seed/30/300/450"
  },
  {
    "id": 31,
    "title": "Sultan",
    "language": "Hindi",
    "genre": ["Action", "Drama", "Sport"],
    "rating": 7.0,
    "year": 2016,
    "description": "A former wrestling champion tries to win back the love of his life by training to become an Olympic wrestler.",
    "poster": "https://picsum.photos/seed/31/300/450"
  },
  {
    "id": 32,
    "title": "Bajrangi Bhaijaan",
    "language": "Hindi",
    "genre": ["Adventure", "Comedy", "Drama"],
    "rating": 8.0,
    "year": 2015,
    "description": "An Indian man with a heart of gold undertakes a perilous journey to reunite a mute Pakistani girl with her family.",
    "poster": "https://picsum.photos/seed/32/300/450"
  },
  {
    "id": 33,
    "title": "Queen",
    "language": "Hindi",
    "genre": ["Adventure", "Comedy", "Drama"],
    "rating": 8.1,
    "year": 2014,
    "description": "A Delhi girl goes on her honeymoon alone after her fiancé calls off their wedding, discovering herself in the process.",
    "poster": "https://picsum.photos/seed/33/300/450"
  },
  {
    "id": 34,
    "title": "Barfi!",
    "language": "Hindi",
    "genre": ["Comedy", "Drama", "Romance"],
    "rating": 8.1,
    "year": 2012,
    "description": "A mute and deaf man falls in love with a woman who is already engaged to another man.",
    "poster": "https://picsum.photos/seed/34/300/450"
  },
  {
    "id": 35,
    "title": "PK",
    "language": "Hindi",
    "genre": ["Comedy", "Drama", "Sci-Fi"],
    "rating": 8.1,
    "year": 2014,
    "description": "An alien on Earth loses the only device he can use to communicate with his spaceship, and must rely on help from humans.",
    "poster": "https://picsum.photos/seed/35/300/450"
  },
  {
    "id": 36,
    "title": "Kabir Singh",
    "language": "Hindi",
    "genre": ["Drama", "Romance"],
    "rating": 7.1,
    "year": 2019,
    "description": "A brilliant but destructive surgeon goes on a self-destructive path after his girlfriend is forced to marry someone else.",
    "poster": "https://picsum.photos/seed/36/300/450"
  },
  {
    "id": 37,
    "title": "Uri: The Surgical Strike",
    "language": "Hindi",
    "genre": ["Action", "Drama", "War"],
    "rating": 7.8,
    "year": 2019,
    "description": "Indian Army Special Forces execute a covert operation to avenge the terrorist attack on a base camp.",
    "poster": "https://picsum.photos/seed/37/300/450"
  },
  {
    "id": 38,
    "title": "War",
    "language": "Hindi",
    "genre": ["Action", "Thriller"],
    "rating": 6.2,
    "year": 2019,
    "description": "An Indian soldier is assigned to eliminate his former mentor who has gone rogue.",
    "poster": "https://picsum.photos/seed/38/300/450"
  },
  {
    "id": 39,
    "title": "Shershaah",
    "language": "Hindi",
    "genre": ["Action", "Biography", "Drama", "War"],
    "rating": 7.8,
    "year": 2021,
    "description": "The story of Indian Army Captain Vikram Batra, who was awarded the Param Vir Chakra for his bravery during the Kargil War.",
    "poster": "https://picsum.photos/seed/39/300/450"
  },
  {
    "id": 40,
    "title": "Pathaan",
    "language": "Hindi",
    "genre": ["Action", "Thriller"],
    "rating": 6.5,
    "year": 2023,
    "description": "An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland.",
    "poster": "https://picsum.photos/seed/40/300/450"
  },
  {
    "id": 41,
    "title": "Vikram",
    "language": "Tamil",
    "genre": ["Action", "Crime", "Thriller"],
    "rating": 8.3,
    "year": 2022,
    "description": "A retired cop investigates a series of killings connected to a drug syndicate.",
    "poster": "https://picsum.photos/seed/41/300/450"
  },
  {
    "id": 42,
    "title": "Master",
    "language": "Tamil",
    "genre": ["Action", "Drama", "Thriller"],
    "rating": 7.3,
    "year": 2021,
    "description": "An alcoholic professor clashes with a young, ruthless student who runs a criminal enterprise.",
    "poster": "https://picsum.photos/seed/42/300/450"
  },
  {
    "id": 43,
    "title": "Kaithi",
    "language": "Tamil",
    "genre": ["Action", "Thriller"],
    "rating": 8.4,
    "year": 2019,
    "description": "A prisoner on parole finds himself in a precarious situation when he helps police transport seized alcohol.",
    "poster": "https://picsum.photos/seed/43/300/450"
  },
  {
    "id": 44,
    "title": "Asuran",
    "language": "Tamil",
    "genre": ["Action", "Drama"],
    "rating": 8.6,
    "year": 2019,
    "description": "A lower-caste man and his family face oppression from a powerful upper-caste landlord.",
    "poster": "https://picsum.photos/seed/44/300/450"
  },
  {
    "id": 45,
    "title": "Soorarai Pottru",
    "language": "Tamil",
    "genre": ["Action", "Drama"],
    "rating": 8.7,
    "year": 2020,
    "description": "The story of a man who dreams of starting a low-cost airline to make air travel accessible to everyone.",
    "poster": "https://picsum.photos/seed/45/300/450"
  },
  {
    "id": 46,
    "title": "96",
    "language": "Tamil",
    "genre": ["Drama", "Romance"],
    "rating": 8.2,
    "year": 2018,
    "description": "Two former classmates meet at a school reunion and rekindle their past romance.",
    "poster": "https://picsum.photos/seed/46/300/450"
  },
  {
    "id": 47,
    "title": "Super Deluxe",
    "language": "Tamil",
    "genre": ["Comedy", "Drama", "Thriller"],
    "rating": 8.3,
    "year": 2019,
    "description": "Four stories intersect in this dark comedy about morality, sexuality, and societal norms.",
    "poster": "https://picsum.photos/seed/47/300/450"
  },
  {
    "id": 48,
    "title": "Jai Bhim",
    "language": "Tamil",
    "genre": ["Crime", "Drama"],
    "rating": 8.8,
    "year": 2021,
    "description": "A lawyer fights for justice for a tribal man who was falsely implicated in a case.",
    "poster": "https://picsum.photos/seed/48/300/450"
  },
  {
    "id": 49,
    "title": "Vada Chennai",
    "language": "Tamil",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 8.5,
    "year": 2018,
    "description": "A aspiring carrom player gets entangled in the criminal underworld of North Chennai.",
    "poster": "https://picsum.photos/seed/49/300/450"
  },
  {
    "id": 50,
    "title": "Pariyerum Perumal",
    "language": "Tamil",
    "genre": ["Drama"],
    "rating": 8.4,
    "year": 2018,
    "description": "A young man from a marginalized community aspires to become a lawyer but faces caste-based discrimination.",
    "poster": "https://picsum.photos/seed/50/300/450"
  },
  {
    "id": 51,
    "title": "Karnan",
    "language": "Tamil",
    "genre": ["Action", "Drama"],
    "rating": 8.2,
    "year": 2021,
    "description": "A young man from a oppressed village stands up against the powerful authorities who have been exploiting his people.",
    "poster": "https://picsum.photos/seed/51/300/450"
  },
  {
    "id": 52,
    "title": "Visaranai",
    "language": "Tamil",
    "genre": ["Crime", "Drama", "Thriller"],
    "rating": 8.5,
    "year": 2015,
    "description": "Four migrant workers are falsely accused of a crime and subjected to brutal police torture.",
    "poster": "https://picsum.photos/seed/52/300/450"
  },
  {
    "id": 53,
    "title": "Aramm",
    "language": "Tamil",
    "genre": ["Drama", "Thriller"],
    "rating": 7.4,
    "year": 2017,
    "description": "A district collector investigates a case of a well that has trapped three people.",
    "poster": "https://picsum.photos/seed/53/300/450"
  },
  {
    "id": 54,
    "title": "Theri",
    "language": "Tamil",
    "genre": ["Action", "Drama", "Thriller"],
    "rating": 7.1,
    "year": 2016,
    "description": "A former criminal tries to lead a peaceful life as a single father but is forced to confront his past.",
    "poster": "https://picsum.photos/seed/54/300/450"
  },
  {
    "id": 55,
    "title": "Kabali",
    "language": "Tamil",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 6.6,
    "year": 2016,
    "description": "A gangster is released from prison and seeks revenge against those who betrayed him.",
    "poster": "https://picsum.photos/seed/55/300/450"
  },
  {
    "id": 56,
    "title": "Bigil",
    "language": "Tamil",
    "genre": ["Action", "Drama", "Sport"],
    "rating": 6.9,
    "year": 2019,
    "description": "A football coach trains a women's team while dealing with a rival gangster.",
    "poster": "https://picsum.photos/seed/56/300/450"
  },
  {
    "id": 57,
    "title": "Petta",
    "language": "Tamil",
    "genre": ["Action", "Drama"],
    "rating": 7.3,
    "year": 2019,
    "description": "A hostel warden with a mysterious past confronts his old enemy.",
    "poster": "https://picsum.photos/seed/57/300/450"
  },
  {
    "id": 58,
    "title": "Mersal",
    "language": "Tamil",
    "genre": ["Action", "Drama", "Thriller"],
    "rating": 7.6,
    "year": 2017,
    "description": "A doctor, a magician, and a dancer set out to expose corruption in the medical field.",
    "poster": "https://picsum.photos/seed/58/300/450"
  },
  {
    "id": 59,
    "title": "Sarpatta Parambarai",
    "language": "Tamil",
    "genre": ["Action", "Drama", "Sport"],
    "rating": 8.7,
    "year": 2021,
    "description": "A boxer from a marginalized community fights against social injustice through the sport of boxing.",
    "poster": "https://picsum.photos/seed/59/300/450"
  },
  {
    "id": 60,
    "title": "Ponniyin Selvan",
    "language": "Tamil",
    "genre": ["Action", "Drama", "History"],
    "rating": 7.6,
    "year": 2022,
    "description": "A historical drama about the Chola dynasty and the conspiracy to overthrow the king.",
    "poster": "https://picsum.photos/seed/60/300/450"
  },
  {
    "id": 61,
    "title": "Drishyam",
    "language": "Malayalam",
    "genre": ["Crime", "Drama", "Thriller"],
    "rating": 8.6,
    "year": 2013,
    "description": "A man covers up a crime committed by his family to protect them from the law.",
    "poster": "https://picsum.photos/seed/61/300/450"
  },
  {
    "id": 62,
    "title": "Premam",
    "language": "Malayalam",
    "genre": ["Comedy", "Drama", "Romance"],
    "rating": 8.2,
    "year": 2015,
    "description": "The story of a young man's romantic journey through three stages of his life.",
    "poster": "https://picsum.photos/seed/62/300/450"
  },
  {
    "id": 63,
    "title": "Kumbalangi Nights",
    "language": "Malayalam",
    "genre": ["Drama"],
    "rating": 8.6,
    "year": 2019,
    "description": "Four brothers living in a small fishing village deal with their strained relationships and personal struggles.",
    "poster": "https://picsum.photos/seed/63/300/450"
  },
  {
    "id": 64,
    "title": "Bangalore Days",
    "language": "Malayalam",
    "genre": ["Comedy", "Drama", "Romance"],
    "rating": 8.1,
    "year": 2014,
    "description": "Three cousins move to Bangalore for different reasons and their lives become intertwined.",
    "poster": "https://picsum.photos/seed/64/300/450"
  },
  {
    "id": 65,
    "title": "Lucifer",
    "language": "Malayalam",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 7.5,
    "year": 2019,
    "description": "A mysterious man becomes the leader of a political party following the death of its former leader.",
    "poster": "https://picsum.photos/seed/65/300/450"
  },
  {
    "id": 66,
    "title": "Maheshinte Prathikaaram",
    "language": "Malayalam",
    "genre": ["Comedy", "Drama", "Romance"],
    "rating": 8.3,
    "year": 2016,
    "description": "A photographer vows to take revenge on a man who humiliated him in public.",
    "poster": "https://picsum.photos/seed/66/300/450"
  },
  {
    "id": 67,
    "title": "Charlie",
    "language": "Malayalam",
    "genre": ["Comedy", "Drama", "Romance"],
    "rating": 8.1,
    "year": 2015,
    "description": "A young woman searches for a mysterious man she met briefly and learns about his impact on others' lives.",
    "poster": "https://picsum.photos/seed/67/300/450"
  },
  {
    "id": 68,
    "title": "Angamaly Diaries",
    "language": "Malayalam",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 7.9,
    "year": 2017,
    "description": "A young man gets involved in the criminal underworld of Angamaly.",
    "poster": "https://picsum.photos/seed/68/300/450"
  },
  {
    "id": 69,
    "title": "Ustad Hotel",
    "language": "Malayalam",
    "genre": ["Comedy", "Drama"],
    "rating": 8.1,
    "year": 2012,
    "description": "A young man returns from abroad to help his father run his small restaurant.",
    "poster": "https://picsum.photos/seed/69/300/450"
  },
  {
    "id": 70,
    "title": "The Great Indian Kitchen",
    "language": "Malayalam",
    "genre": ["Drama"],
    "rating": 8.3,
    "year": 2021,
    "description": "A newly married woman struggles with the patriarchal expectations of her new household.",
    "poster": "https://picsum.photos/seed/70/300/450"
  },
  {
    "id": 71,
    "title": "Jallikattu",
    "language": "Malayalam",
    "genre": ["Action", "Drama", "Thriller"],
    "rating": 7.7,
    "year": 2019,
    "description": "A bull that escapes from a slaughterhouse causes chaos in a village, revealing the animalistic nature of humans.",
    "poster": "https://picsum.photos/seed/71/300/450"
  },
  {
    "id": 72,
    "title": "Joji",
    "language": "Malayalam",
    "genre": ["Crime", "Drama", "Thriller"],
    "rating": 7.6,
    "year": 2021,
    "description": "The youngest son of a wealthy family plots to claim his father's inheritance.",
    "poster": "https://picsum.photos/seed/72/300/450"
  },
  {
    "id": 73,
    "title": "Minnal Murali",
    "language": "Malayalam",
    "genre": ["Action", "Comedy", "Sci-Fi"],
    "rating": 7.3,
    "year": 2021,
    "description": "A young man gains superpowers after being struck by lightning and must learn to control them.",
    "poster": "https://picsum.photos/seed/73/300/450"
  },
  {
    "id": 74,
    "title": "Thondimuthalum Driksakshiyum",
    "language": "Malayalam",
    "genre": ["Comedy", "Drama"],
    "rating": 8.2,
    "year": 2017,
    "description": "A couple gets involved in a theft case and must navigate the legal system.",
    "poster": "https://picsum.photos/seed/74/300/450"
  },
  {
    "id": 75,
    "title": "Virus",
    "language": "Malayalam",
    "genre": ["Drama", "Thriller"],
    "rating": 8.0,
    "year": 2019,
    "description": "Based on the Nipah virus outbreak in Kerala, the film depicts the efforts of health workers to contain the epidemic.",
    "poster": "https://picsum.photos/seed/75/300/450"
  },
  {
    "id": 76,
    "title": "Take Off",
    "language": "Malayalam",
    "genre": ["Drama", "Thriller"],
    "rating": 8.4,
    "year": 2017,
    "description": "Based on true events, Indian nurses in Iraq are taken hostage by terrorists.",
    "poster": "https://picsum.photos/seed/76/300/450"
  },
  {
    "id": 77,
    "title": "Aadu",
    "language": "Malayalam",
    "genre": ["Comedy"],
    "rating": 6.8,
    "year": 2015,
    "description": "A group of friends enters a tug-of-war competition to win a prize goat, leading to chaotic situations.",
    "poster": "https://picsum.photos/seed/77/300/450"
  },
  {
    "id": 78,
    "title": "Spadikam",
    "language": "Malayalam",
    "genre": ["Action", "Drama"],
    "rating": 8.5,
    "year": 1995,
    "description": "A young man rebels against his disciplinarian father and becomes a local rowdy.",
    "poster": "https://picsum.photos/seed/78/300/450"
  },
  {
    "id": 79,
    "title": "Sufiyum Sujatayum",
    "language": "Malayalam",
    "genre": ["Drama", "Romance"],
    "rating": 6.4,
    "year": 2020,
    "description": "A free-spirited woman falls in love with a Sufi priest, but their relationship is opposed by society.",
    "poster": "https://picsum.photos/seed/79/300/450"
  },
  {
    "id": 80,
    "title": "Nayattu",
    "language": "Malayalam",
    "genre": ["Crime", "Drama", "Thriller"],
    "rating": 8.1,
    "year": 2021,
    "description": "A police officer, a political prisoner, and a driver become suspects in a murder case and go on the run.",
    "poster": "https://picsum.photos/seed/80/300/450"
  },
  {
    "id": 81,
    "title": "KGF: Chapter 1",
    "language": "Kannada",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 8.2,
    "year": 2018,
    "description": "A young man rises to power in the Kolar Gold Fields, a dangerous criminal empire.",
    "poster": "https://picsum.photos/seed/81/300/450"
  },
  {
    "id": 82,
    "title": "KGF: Chapter 2",
    "language": "Kannada",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 8.0,
    "year": 2022,
    "description": "Rocky continues his reign over the Kolar Gold Fields while facing threats from new adversaries.",
    "poster": "https://picsum.photos/seed/82/300/450"
  },
  {
    "id": 83,
    "title": "Kantara",
    "language": "Kannada",
    "genre": ["Action", "Drama", "Fantasy"],
    "rating": 8.3,
    "year": 2022,
    "description": "A mythical tale about a man's battle to protect his village's ancient traditions and land.",
    "poster": "https://picsum.photos/seed/83/300/450"
  },
  {
    "id": 84,
    "title": "777 Charlie",
    "language": "Kannada",
    "genre": ["Adventure", "Comedy", "Drama"],
    "rating": 8.6,
    "year": 2022,
    "description": "A man's life changes when he adopts a stray dog named Charlie and they embark on a journey together.",
    "poster": "https://picsum.photos/seed/84/300/450"
  },
  {
    "id": 85,
    "title": "Ulidavaru Kandanthe",
    "language": "Kannada",
    "genre": ["Crime", "Drama", "Mystery"],
    "rating": 8.3,
    "year": 2014,
    "description": "Five different narratives about a murder reveal different perspectives of the same event.",
    "poster": "https://picsum.photos/seed/85/300/450"
  },
  {
    "id": 86,
    "title": "Rangitaranga",
    "language": "Kannada",
    "genre": ["Mystery", "Thriller"],
    "rating": 8.6,
    "year": 2015,
    "description": "A writer and his wife move to a village where he encounters mysterious occurrences related to his novel.",
    "poster": "https://picsum.photos/seed/86/300/450"
  },
  {
    "id": 87,
    "title": "U Turn",
    "language": "Kannada",
    "genre": ["Crime", "Mystery", "Thriller"],
    "rating": 8.0,
    "year": 2016,
    "description": "A journalist investigates a series of accidents at a particular intersection and uncovers a dark secret.",
    "poster": "https://picsum.photos/seed/87/300/450"
  },
  {
    "id": 88,
    "title": "Lucia",
    "language": "Kannada",
    "genre": ["Drama", "Fantasy", "Thriller"],
    "rating": 8.4,
    "year": 2013,
    "description": "A man with insomnia begins to experience a different life in his dreams, blurring the lines between reality and fantasy.",
    "poster": "https://picsum.photos/seed/88/300/450"
  },
  {
    "id": 89,
    "title": "Mungaru Male",
    "language": "Kannada",
    "genre": ["Drama", "Romance"],
    "rating": 8.1,
    "year": 2006,
    "description": "A young man falls in love with a woman he meets on a rainy day, but she is already engaged.",
    "poster": "https://picsum.photos/seed/89/300/450"
  },
  {
    "id": 90,
    "title": "Kirik Party",
    "language": "Kannada",
    "genre": ["Comedy", "Drama", "Romance"],
    "rating": 8.4,
    "year": 2016,
    "description": "The story of a group of engineering students and their experiences in college.",
    "poster": "https://picsum.photos/seed/90/300/450"
  },
  {
    "id": 91,
    "title": "Avane Srimannarayana",
    "language": "Kannada",
    "genre": ["Action", "Comedy", "Fantasy"],
    "rating": 7.8,
    "year": 2019,
    "description": "A corrupt police officer gets involved in a treasure hunt that changes his life.",
    "poster": "https://picsum.photos/seed/91/300/450"
  },
  {
    "id": 92,
    "title": "Godhi Banna Sadharana Mykattu",
    "language": "Kannada",
    "genre": ["Drama", "Thriller"],
    "rating": 8.2,
    "year": 2016,
    "description": "A man searches for his missing father who suffers from Alzheimer's disease.",
    "poster": "https://picsum.photos/seed/92/300/450"
  },
  {
    "id": 93,
    "title": "Tagaru",
    "language": "Kannada",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 7.5,
    "year": 2018,
    "description": "A police officer goes on a mission to eliminate a criminal gang but faces unexpected challenges.",
    "poster": "https://picsum.photos/seed/93/300/450"
  },
  {
    "id": 94,
    "title": "Bell Bottom",
    "language": "Kannada",
    "genre": ["Action", "Comedy", "Mystery"],
    "rating": 7.6,
    "year": 2019,
    "description": "A detective investigates a series of robberies and uncovers a conspiracy.",
    "poster": "https://picsum.photos/seed/94/300/450"
  },
  {
    "id": 95,
    "title": "Roberrt",
    "language": "Kannada",
    "genre": ["Action", "Drama"],
    "rating": 6.4,
    "year": 2021,
    "description": "A businessman with a mysterious past seeks revenge against those who wronged him.",
    "poster": "https://picsum.photos/seed/95/300/450"
  },
  {
    "id": 96,
    "title": "Kotigobba 3",
    "language": "Kannada",
    "genre": ["Action", "Comedy", "Drama"],
    "rating": 5.8,
    "year": 2021,
    "description": "A man with a dual identity gets involved in a series of comedic situations.",
    "poster": "https://picsum.photos/seed/96/300/450"
  },
  {
    "id": 97,
    "title": "Pailwaan",
    "language": "Kannada",
    "genre": ["Action", "Drama", "Sport"],
    "rating": 6.9,
    "year": 2019,
    "description": "A wrestler from a small town gets a chance to compete in an international wrestling competition.",
    "poster": "https://picsum.photos/seed/97/300/450"
  },
  {
    "id": 98,
    "title": "Salaga",
    "language": "Kannada",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 7.2,
    "year": 2021,
    "description": "A ruthless gangster rises to power in the criminal underworld of Bangalore.",
    "poster": "https://picsum.photos/seed/98/300/450"
  },
  {
    "id": 99,
    "title": "Vikrant Rona",
    "language": "Kannada",
    "genre": ["Action", "Fantasy", "Mystery"],
    "rating": 5.9,
    "year": 2022,
    "description": "A police officer arrives at a remote village to investigate a series of mysterious deaths.",
    "poster": "https://picsum.photos/seed/99/300/450"
  },
  {
    "id": 100,
    "title": "Garuda Gamana Vrishabha Vahana",
    "language": "Kannada",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 8.5,
    "year": 2021,
    "description": "Two friends with contrasting personalities get involved in the criminal underworld of Mangalore.",
    "poster": "https://picsum.photos/seed/100/300/450"
  },
  {
    "id": 101,
    "title": "Inception",
    "language": "English",
    "genre": ["Action", "Adventure", "Sci-Fi", "Thriller"],
    "rating": 8.8,
    "year": 2010,
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    "poster": "https://picsum.photos/seed/101/300/450"
  },
  {
    "id": 102,
    "title": "The Dark Knight",
    "language": "English",
    "genre": ["Action", "Crime", "Drama", "Thriller"],
    "rating": 9.0,
    "year": 2008,
    "description": "When the menace known as the Joker wreaks havoc on Gotham, Batman must confront one of the greatest tests of his ability to fight injustice.",
    "poster": "https://picsum.photos/seed/102/300/450"
  },
  {
    "id": 103,
    "title": "Interstellar",
    "language": "English",
    "genre": ["Adventure", "Drama", "Sci-Fi"],
    "rating": 8.7,
    "year": 2014,
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "poster": "https://picsum.photos/seed/103/300/450"
  },
  {
    "id": 104,
    "title": "The Shawshank Redemption",
    "language": "English",
    "genre": ["Drama"],
    "rating": 9.3,
    "year": 1994,
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "poster": "https://picsum.photos/seed/104/300/450"
  },
  {
    "id": 105,
    "title": "Pulp Fiction",
    "language": "English",
    "genre": ["Crime", "Drama"],
    "rating": 8.9,
    "year": 1994,
    "description": "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    "poster": "https://picsum.photos/seed/105/300/450"
  },
  {
    "id": 106,
    "title": "Forrest Gump",
    "language": "English",
    "genre": ["Comedy", "Drama", "Romance"],
    "rating": 8.8,
    "year": 1994,
    "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    "poster": "https://picsum.photos/seed/106/300/450"
  },
  {
    "id": 107,
    "title": "The Matrix",
    "language": "English",
    "genre": ["Action", "Sci-Fi"],
    "rating": 8.7,
    "year": 1999,
    "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "poster": "https://picsum.photos/seed/107/300/450"
  },
  {
    "id": 108,
    "title": "Fight Club",
    "language": "English",
    "genre": ["Drama"],
    "rating": 8.8,
    "year": 1999,
    "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    "poster": "https://picsum.photos/seed/108/300/450"
  },
  {
    "id": 109,
    "title": "Gladiator",
    "language": "English",
    "genre": ["Action", "Adventure", "Drama"],
    "rating": 8.5,
    "year": 2000,
    "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "poster": "https://picsum.photos/seed/109/300/450"
  },
  {
    "id": 110,
    "title": "The Avengers",
    "language": "English",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "rating": 8.0,
    "year": 2012,
    "description": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    "poster": "https://picsum.photos/seed/110/300/450"
  },
  {
    "id": 111,
    "title": "Titanic",
    "language": "English",
    "genre": ["Drama", "Romance"],
    "rating": 7.9,
    "year": 1997,
    "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "poster": "https://picsum.photos/seed/111/300/450"
  },
  {
    "id": 112,
    "title": "Joker",
    "language": "English",
    "genre": ["Crime", "Drama", "Thriller"],
    "rating": 8.4,
    "year": 2019,
    "description": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic criminal figure.",
    "poster": "https://picsum.photos/seed/112/300/450"
  },
  {
    "id": 113,
    "title": "Whiplash",
    "language": "English",
    "genre": ["Drama", "Music"],
    "rating": 8.5,
    "year": 2014,
    "description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    "poster": "https://picsum.photos/seed/113/300/450"
  },
  {
    "id": 114,
    "title": "La La Land",
    "language": "English",
    "genre": ["Comedy", "Drama", "Music", "Romance"],
    "rating": 8.0,
    "year": 2016,
    "description": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    "poster": "https://picsum.photos/seed/114/300/450"
  },
  {
    "id": 115,
    "title": "The Social Network",
    "language": "English",
    "genre": ["Biography", "Drama"],
    "rating": 7.8,
    "year": 2010,
    "description": "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later combatively squeezed out.",
    "poster": "https://picsum.photos/seed/115/300/450"
  },
  {
    "id": 116,
    "title": "Get Out",
    "language": "English",
    "genre": ["Horror", "Mystery", "Thriller"],
    "rating": 7.7,
    "year": 2017,
    "description": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    "poster": "https://picsum.photos/seed/116/300/450"
  },
  {
    "id": 117,
    "title": "Parasite",
    "language": "Korean",
    "genre": ["Comedy", "Drama", "Thriller"],
    "rating": 8.5,
    "year": 2019,
    "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "poster": "https://picsum.photos/seed/117/300/450"
  },
  {
    "id": 118,
    "title": "Mad Max: Fury Road",
    "language": "English",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "rating": 8.1,
    "year": 2015,
    "description": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    "poster": "https://picsum.photos/seed/118/300/450"
  },
  {
    "id": 119,
    "title": "Knives Out",
    "language": "English",
    "genre": ["Comedy", "Crime", "Drama", "Mystery"],
    "rating": 7.9,
    "year": 2019,
    "description": "A detective investigates the death of the patriarch of an eccentric, combative family.",
    "poster": "https://picsum.photos/seed/119/300/450"
  },
  {
    "id": 120,
    "title": "Dune",
    "language": "English",
    "genre": ["Action", "Adventure", "Drama", "Sci-Fi"],
    "rating": 8.0,
    "year": 2021,
    "description": "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    "poster": "https://picsum.photos/seed/120/300/450"
  },
  {
    "id": 121,
    "title": "Parasite",
    "language": "Korean",
    "genre": ["Comedy", "Drama", "Thriller"],
    "rating": 8.5,
    "year": 2019,
    "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "poster": "https://picsum.photos/seed/121/300/450"
  },
  {
    "id": 122,
    "title": "Train to Busan",
    "language": "Korean",
    "genre": ["Action", "Horror", "Thriller"],
    "rating": 7.6,
    "year": 2016,
    "description": "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
    "poster": "https://picsum.photos/seed/122/300/450"
  },
  {
    "id": 123,
    "title": "Oldboy",
    "language": "Korean",
    "genre": ["Action", "Drama", "Mystery", "Thriller"],
    "rating": 8.4,
    "year": 2003,
    "description": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    "poster": "https://picsum.photos/seed/123/300/450"
  },
  {
    "id": 124,
    "title": "The Handmaiden",
    "language": "Korean",
    "genre": ["Drama", "Mystery", "Romance", "Thriller"],
    "rating": 8.1,
    "year": 2016,
    "description": "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
    "poster": "https://picsum.photos/seed/124/300/450"
  },
  {
    "id": 125,
    "title": "Memories of Murder",
    "language": "Korean",
    "genre": ["Crime", "Drama", "Mystery"],
    "rating": 8.1,
    "year": 2003,
    "description": "In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped and murdered.",
    "poster": "https://picsum.photos/seed/125/300/450"
  },
  {
    "id": 126,
    "title": "Burning",
    "language": "Korean",
    "genre": ["Drama", "Mystery"],
    "rating": 7.5,
    "year": 2018,
    "description": "Jong-su bumps into a childhood friend, Hye-mi, on a delivery trip and they become involved in a mysterious relationship with a wealthy man.",
    "poster": "https://picsum.photos/seed/126/300/450"
  },
  {
    "id": 127,
    "title": "The Wailing",
    "language": "Korean",
    "genre": ["Drama", "Horror", "Mystery"],
    "rating": 7.5,
    "year": 2016,
    "description": "A policeman investigates a series of mysterious deaths in a small village that may be connected to a strange Japanese stranger.",
    "poster": "https://picsum.photos/seed/127/300/450"
  },
  {
    "id": 128,
    "title": "A Taxi Driver",
    "language": "Korean",
    "genre": ["Drama", "History"],
    "rating": 8.0,
    "year": 2017,
    "description": "A taxi driver from Seoul becomes involved in the Gwangju Uprising when he picks up a German journalist.",
    "poster": "https://picsum.photos/seed/128/300/450"
  },
  {
    "id": 129,
    "title": "I Saw the Devil",
    "language": "Korean",
    "genre": ["Action", "Crime", "Drama", "Horror", "Thriller"],
    "rating": 7.8,
    "year": 2010,
    "description": "After his fiancée is brutally murdered, a secret agent sets out to track down and take revenge on the killer.",
    "poster": "https://picsum.photos/seed/129/300/450"
  },
  {
    "id": 130,
    "title": "The Host",
    "language": "Korean",
    "genre": ["Action", "Comedy", "Horror", "Sci-Fi"],
    "rating": 7.0,
    "year": 2006,
    "description": "A monster emerges from Seoul's Han River and begins attacking people. One victim's family must fight to rescue her from its clutches.",
    "poster": "https://picsum.photos/seed/130/300/450"
  },
  {
    "id": 131,
    "title": "Decision to Leave",
    "language": "Korean",
    "genre": ["Crime", "Drama", "Mystery", "Romance"],
    "rating": 7.6,
    "year": 2022,
    "description": "A detective investigating a man's death in the mountains begins to suspect the dead man's mysterious wife.",
    "poster": "https://picsum.photos/seed/131/300/450"
  },
  {
    "id": 132,
    "title": "Mother",
    "language": "Korean",
    "genre": ["Crime", "Drama", "Mystery"],
    "rating": 7.8,
    "year": 2009,
    "description": "A mother searches for her son's murderer after he is accused of killing a young girl.",
    "poster": "https://picsum.photos/seed/132/300/450"
  },
  {
    "id": 133,
    "title": "Snowpiercer",
    "language": "Korean",
    "genre": ["Action", "Drama", "Sci-Fi", "Thriller"],
    "rating": 7.1,
    "year": 2013,
    "description": "In a future where a failed climate-change experiment has killed all life except for the lucky few who boarded the Snowpiercer, a train that travels around the globe, a new class system emerges.",
    "poster": "https://picsum.photos/seed/133/300/450"
  },
  {
    "id": 134,
    "title": "The Man from Nowhere",
    "language": "Korean",
    "genre": ["Action", "Crime", "Drama", "Thriller"],
    "rating": 8.0,
    "year": 2010,
    "description": "A quiet pawnshop keeper with a mysterious past takes on a drug and organ trafficking syndicate to save a child.",
    "poster": "https://picsum.photos/seed/134/300/450"
  },
  {
    "id": 135,
    "title": "Along with the Gods",
    "language": "Korean",
    "genre": ["Comedy", "Drama", "Fantasy"],
    "rating": 7.7,
    "year": 2017,
    "description": "After dying, a firefighter encounters several guardians of the afterlife who help him navigate the trials to be reincarnated.",
    "poster": "https://picsum.photos/seed/135/300/450"
  },
  {
    "id": 136,
    "title": "Extreme Job",
    "language": "Korean",
    "genre": ["Action", "Comedy", "Crime"],
    "rating": 7.0,
    "year": 2019,
    "description": "A group of detectives go undercover as fried chicken restaurant employees to bust a drug syndicate.",
    "poster": "https://picsum.photos/seed/136/300/450"
  },
  {
    "id": 137,
    "title": "Veteran",
    "language": "Korean",
    "genre": ["Action", "Comedy", "Crime"],
    "rating": 7.4,
    "year": 2015,
    "description": "When a detective confronts a young, arrogant heir to a powerful corporation, he finds himself in a dangerous game of cat and mouse.",
    "poster": "https://picsum.photos/seed/137/300/450"
  },
  {
    "id": 138,
    "title": "New World",
    "language": "Korean",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 7.8,
    "year": 2013,
    "description": "An undercover cop struggles to maintain his identity while infiltrating a powerful criminal organization.",
    "poster": "https://picsum.photos/seed/138/300/450"
  },
  {
    "id": 139,
    "title": "The Chaser",
    "language": "Korean",
    "genre": ["Action", "Crime", "Drama", "Mystery", "Thriller"],
    "rating": 8.1,
    "year": 2008,
    "description": "A retired detective turned pimp investigates the disappearance of his women and discovers a serial killer.",
    "poster": "https://picsum.photos/seed/139/300/450"
  },
  {
    "id": 140,
    "title": "Hellbound",
    "language": "Korean",
    "genre": ["Drama", "Fantasy", "Horror", "Thriller"],
    "rating": 7.5,
    "year": 2021,
    "description": "People receive prophecies of their deaths from supernatural beings, causing chaos and the rise of a religious cult.",
    "poster": "https://picsum.photos/seed/140/300/450"
  },
  {
    "id": 141,
    "title": "Spirited Away",
    "language": "Japanese",
    "genre": ["Animation", "Adventure", "Family", "Fantasy"],
    "rating": 8.6,
    "year": 2001,
    "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    "poster": "https://picsum.photos/seed/141/300/450"
  },
  {
    "id": 142,
    "title": "Your Name",
    "language": "Japanese",
    "genre": ["Animation", "Drama", "Fantasy", "Romance"],
    "rating": 8.4,
    "year": 2016,
    "description": "Two teenagers share a profound, magical connection upon discovering they are swapping bodies.",
    "poster": "https://picsum.photos/seed/142/300/450"
  },
  {
    "id": 143,
    "title": "Akira",
    "language": "Japanese",
    "genre": ["Animation", "Action", "Sci-Fi"],
    "rating": 8.0,
    "year": 1988,
    "description": "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath.",
    "poster": "https://picsum.photos/seed/143/300/450"
  },
  {
    "id": 144,
    "title": "Seven Samurai",
    "language": "Japanese",
    "genre": ["Action", "Adventure", "Drama"],
    "rating": 8.6,
    "year": 1954,
    "description": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
    "poster": "https://picsum.photos/seed/144/300/450"
  },
  {
    "id": 145,
    "title": "Grave of the Fireflies",
    "language": "Japanese",
    "genre": ["Animation", "Drama", "War"],
    "rating": 8.5,
    "year": 1988,
    "description": "A young boy and his little sister struggle to survive in Japan during World War II.",
    "poster": "https://picsum.photos/seed/145/300/450"
  },
  {
    "id": 146,
    "title": "Princess Mononoke",
    "language": "Japanese",
    "genre": ["Animation", "Adventure", "Fantasy"],
    "rating": 8.4,
    "year": 1997,
    "description": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
    "poster": "https://picsum.photos/seed/146/300/450"
  },
  {
    "id": 147,
    "title": "Battle Royale",
    "language": "Japanese",
    "genre": ["Action", "Drama", "Thriller"],
    "rating": 7.6,
    "year": 2000,
    "description": "In the future, the Japanese government captures a class of ninth-grade students and forces them to kill each other under the revolutionary 'Battle Royale' act.",
    "poster": "https://picsum.photos/seed/147/300/450"
  },
  {
    "id": 148,
    "title": "Ringu",
    "language": "Japanese",
    "genre": ["Horror", "Mystery"],
    "rating": 7.2,
    "year": 1998,
    "description": "A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.",
    "poster": "https://picsum.photos/seed/148/300/450"
  },
  {
    "id": 149,
    "title": "Tokyo Story",
    "language": "Japanese",
    "genre": ["Drama"],
    "rating": 8.2,
    "year": 1953,
    "description": "An old couple visit their children in Tokyo, only to find that the children are too absorbed in their own lives to spend much time with their parents.",
    "poster": "https://picsum.photos/seed/149/300/450"
  },
  {
    "id": 150,
    "title": "Departures",
    "language": "Japanese",
    "genre": ["Drama"],
    "rating": 8.1,
    "year": 2008,
    "description": "A newly unemployed cellist takes a job preparing the dead for funerals.",
    "poster": "https://picsum.photos/seed/150/300/450"
  },
  {
    "id": 151,
    "title": "Shoplifters",
    "language": "Japanese",
    "genre": ["Comedy", "Drama"],
    "rating": 8.0,
    "year": 2018,
    "description": "A family of small-time crooks take in a child they find on the street.",
    "poster": "https://picsum.photos/seed/151/300/450"
  },
  {
    "id": 152,
    "title": "Drive My Car",
    "language": "Japanese",
    "genre": ["Drama"],
    "rating": 7.6,
    "year": 2021,
    "description": "A renowned stage actor and director hires a young woman as his chauffeur, forming an unexpected bond.",
    "poster": "https://picsum.photos/seed/152/300/450"
  },
  {
    "id": 153,
    "title": "Weathering with You",
    "language": "Japanese",
    "genre": ["Animation", "Drama", "Fantasy", "Romance"],
    "rating": 7.5,
    "year": 2019,
    "description": "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
    "poster": "https://picsum.photos/seed/153/300/450"
  },
  {
    "id": 154,
    "title": "Howl's Moving Castle",
    "language": "Japanese",
    "genre": ["Animation", "Adventure", "Fantasy", "Romance"],
    "rating": 8.2,
    "year": 2004,
    "description": "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions.",
    "poster": "https://picsum.photos/seed/154/300/450"
  },
  {
    "id": 155,
    "title": "Ichi the Killer",
    "language": "Japanese",
    "genre": ["Action", "Crime", "Drama", "Horror", "Thriller"],
    "rating": 6.9,
    "year": 2001,
    "description": "When a Yakuza boss is murdered, his underlings search for the killer, leading them to a mysterious figure named Ichi.",
    "poster": "https://picsum.photos/seed/155/300/450"
  },
  {
    "id": 156,
    "title": "Audition",
    "language": "Japanese",
    "genre": ["Drama", "Horror", "Thriller"],
    "rating": 7.2,
    "year": 1999,
    "description": "A widower takes an offer to screen girls at a special audition, arranged for him by a friend to find him a new wife.",
    "poster": "https://picsum.photos/seed/156/300/450"
  },
  {
    "id": 157,
    "title": "13 Assassins",
    "language": "Japanese",
    "genre": ["Action", "Drama", "History"],
    "rating": 7.6,
    "year": 2010,
    "description": "A group of assassins come together for a suicide mission to kill an evil lord.",
    "poster": "https://picsum.photos/seed/157/300/450"
  },
  {
    "id": 158,
    "title": "Rashomon",
    "language": "Japanese",
    "genre": ["Crime", "Drama", "Mystery"],
    "rating": 8.2,
    "year": 1950,
    "description": "The rape of a bride and the murder of her samurai husband are recalled from the perspectives of a bandit, the bride, the samurai's ghost and a woodcutter.",
    "poster": "https://picsum.photos/seed/158/300/450"
  },
  {
    "id": 159,
    "title": "Ikiru",
    "language": "Japanese",
    "genre": ["Drama"],
    "rating": 8.3,
    "year": 1952,
    "description": "A bureaucrat discovers he has terminal cancer and tries to find meaning in his last days.",
    "poster": "https://picsum.photos/seed/159/300/450"
  },
  {
    "id": 160,
    "title": "A Silent Voice",
    "language": "Japanese",
    "genre": ["Animation", "Drama", "Romance"],
    "rating": 8.1,
    "year": 2016,
    "description": "A former bully seeks out the deaf girl he tormented in elementary school to make amends.",
    "poster": "https://picsum.photos/seed/160/300/450"
  },
  {
    "id": 161,
    "title": "Pan's Labyrinth",
    "language": "Spanish",
    "genre": ["Drama", "Fantasy", "Horror", "War"],
    "rating": 8.2,
    "year": 2006,
    "description": "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    "poster": "https://picsum.photos/seed/161/300/450"
  },
  {
    "id": 162,
    "title": "The Sea Inside",
    "language": "Spanish",
    "genre": ["Biography", "Drama"],
    "rating": 8.0,
    "year": 2004,
    "description": "The real-life story of Spaniard Ramon Sampedro, who fought a 30-year campaign to win the right to end his life with dignity.",
    "poster": "https://picsum.photos/seed/162/300/450"
  },
  {
    "id": 163,
    "title": "Y Tu Mama Tambien",
    "language": "Spanish",
    "genre": ["Comedy", "Drama"],
    "rating": 7.7,
    "year": 2001,
    "description": "In Mexico, two teenage boys and an attractive older woman embark on a road trip and learn a thing or two about life, friendship, sex, and each other.",
    "poster": "https://picsum.photos/seed/163/300/450"
  },
  {
    "id": 164,
    "title": "Dune: Part Two",
    "language": "English",
    "genre": ["Action", "Adventure", "Drama", "Sci-Fi"],
    "rating": 8.6,
    "year": 2024,
    "description": "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    "poster": "https://picsum.photos/seed/164/300/450"
  },
  {
    "id": 165,
    "title": "Oppenheimer",
    "language": "English",
    "genre": ["Biography", "Drama", "History"],
    "rating": 8.4,
    "year": 2023,
    "description": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    "poster": "https://picsum.photos/seed/165/300/450"
  },
  {
    "id": 166,
    "title": "Everything Everywhere All at Once",
    "language": "English",
    "genre": ["Action", "Adventure", "Comedy", "Fantasy"],
    "rating": 7.8,
    "year": 2022,
    "description": "A middle-aged Chinese immigrant is swept up in an insane adventure where she alone can save the world by exploring other universes.",
    "poster": "https://picsum.photos/seed/166/300/450"
  },
  {
    "id": 167,
    "title": "RRR",
    "language": "Telugu",
    "genre": ["Action", "Drama", "History"],
    "rating": 7.8,
    "year": 2022,
    "description": "A fictitious story about two legendary revolutionaries and their journey far away from home before they began fighting for their country.",
    "poster": "https://picsum.photos/seed/167/300/450"
  },
  {
    "id": 168,
    "title": "Jawan",
    "language": "Hindi",
    "genre": ["Action", "Drama", "Thriller"],
    "rating": 6.8,
    "year": 2023,
    "description": "A man is driven by a personal vendetta to rectify the wrongs in society while being connected to a bigger conspiracy.",
    "poster": "https://picsum.photos/seed/168/300/450"
  },
  {
    "id": 169,
    "title": "Animal",
    "language": "Hindi",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 6.5,
    "year": 2023,
    "description": "A son undergoes a remarkable transformation when the bond between him and his father is tested.",
    "poster": "https://picsum.photos/seed/169/300/450"
  },
  {
    "id": 170,
    "title": "12th Fail",
    "language": "Hindi",
    "genre": ["Biography", "Drama"],
    "rating": 8.8,
    "year": 2023,
    "description": "The story of IPS officer Manoj Kumar Sharma who overcame incredible odds to achieve his dream.",
    "poster": "https://picsum.photos/seed/170/300/450"
  },
  {
    "id": 171,
    "title": "Leo",
    "language": "Tamil",
    "genre": ["Action", "Crime", "Drama", "Thriller"],
    "rating": 7.0,
    "year": 2023,
    "description": "A mild-mannered cafe owner becomes a target when his past comes back to haunt him.",
    "poster": "https://picsum.photos/seed/171/300/450"
  },
  {
    "id": 172,
    "title": "Jailer",
    "language": "Tamil",
    "genre": ["Action", "Comedy", "Drama"],
    "rating": 7.2,
    "year": 2023,
    "description": "A retired jailer goes on a manhunt to find his son's killers after they escape from prison.",
    "poster": "https://picsum.photos/seed/172/300/450"
  },
  {
    "id": 173,
    "title": "Ponniyin Selvan: Part Two",
    "language": "Tamil",
    "genre": ["Action", "Drama", "History"],
    "rating": 7.8,
    "year": 2023,
    "description": "The second part of the historical drama about the Chola dynasty and the conspiracy to overthrow the king.",
    "poster": "https://picsum.photos/seed/173/300/450"
  },
  {
    "id": 174,
    "title": "2018",
    "language": "Malayalam",
    "genre": ["Action", "Drama", "Thriller"],
    "rating": 8.4,
    "year": 2023,
    "description": "Based on the devastating floods that struck Kerala in 2018, the film portrays the resilience of ordinary people facing extraordinary circumstances.",
    "poster": "https://picsum.photos/seed/174/300/450"
  },
  {
    "id": 175,
    "title": "Romancham",
    "language": "Malayalam",
    "genre": ["Comedy", "Horror", "Thriller"],
    "rating": 8.1,
    "year": 2023,
    "description": "A group of bachelors experience supernatural events after one of them brings home an Ouija board.",
    "poster": "https://picsum.photos/seed/175/300/450"
  },
  {
    "id": 176,
    "title": "Salaar: Part 1 - Ceasefire",
    "language": "Telugu",
    "genre": ["Action", "Crime", "Drama"],
    "rating": 6.5,
    "year": 2023,
    "description": "An action-packed saga of a violent world where loyalties are tested and alliances are fragile.",
    "poster": "https://picsum.photos/seed/176/300/450"
  },
  {
    "id": 177,
    "title": "Hi Nanna",
    "language": "Telugu",
    "genre": ["Drama", "Romance"],
    "rating": 7.9,
    "year": 2023,
    "description": "A single father and his daughter's lives change when a woman enters their world and unravels a secret from the past.",
    "poster": "https://picsum.photos/seed/177/300/450"
  },
  {
    "id": 178,
    "title": "Tillu Square",
    "language": "Telugu",
    "genre": ["Action", "Comedy", "Crime", "Thriller"],
    "rating": 6.8,
    "year": 2024,
    "description": "Tillu, a small-time crook, gets entangled in a bigger crime and must navigate his way out.",
    "poster": "https://picsum.photos/seed/178/300/450"
  },
  {
    "id": 179,
    "title": "Martin",
    "language": "Kannada",
    "genre": ["Action", "Thriller"],
    "rating": 5.5,
    "year": 2024,
    "description": "A man discovers he has a connection to an international conspiracy and must fight to uncover the truth.",
    "poster": "https://picsum.photos/seed/179/300/450"
  },
  {
    "id": 180,
    "title": "Kaatera",
    "language": "Kannada",
    "genre": ["Action", "Drama"],
    "rating": 7.5,
    "year": 2023,
    "description": "A young man fights against injustice and corruption in his village.",
    "poster": "https://picsum.photos/seed/180/300/450"
  }
];
