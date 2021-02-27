db.createUser({
  user: 'user',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'quiz',
    },
  ],
})

db.createCollection("birds")

db.birds.insertMany(
    [
        {
            "bird": "crows",
            "answer": "murder",
            "answer_options": ["gang", "group"]
        },
        {
            "bird": "eagles",
            "answer": "convocation",
            "answer_options": ["collective", "concert"]
        },
        {
            "bird": "doves",
            "answer": "flight",
            "answer_options": ["temptation", "set"]
        },
        {
            "bird": "geese",
            "answer": "gaggle",
            "answer_options": ["swarm", "group"]
        },
        {
            "bird": "albatrosses",
            "answer": "weight",
            "answer_options": ["colony", "cavalry"]
        },
        {
            "bird": "flamingoes",
            "answer": "flamboyance",
            "answer_options": ["balance", "picture"]
        },
        {
            "bird": "ducks",
            "answer": "paddling",
            "answer_options": ["flock", "fleet"]
        }
    ]
)
