const dataToImport = {
  database: "latusdb",
  version: 1,
  encrypted: false,
  mode: "partial",
  tables: [

    {
      name: "avatar",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "image", value: "TEXT NOT NULL" },
      ],
      values: [
        [1,"snorlax-cat","/assets/images/characters/snorlax_cat.png"],
        [2,"cat","/assets/images/characters/cat.png"],
        [3,"dog","/assets/images/characters/dog.png"],
        [4,"golden-dog","/assets/images/characters/golden_dog.png"],
        [5,"rabbit","/assets/images/characters/rabbit.png"],
        [6,"brown-rabbit","/assets/images/characters/brown_rabbit.png"],
      ]
    }, 
    {
      name: "user",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "points", value: "INTEGER" },
        { column:"avatarId", value: "INTEGER NOT NULL"},
        { constraint: "avatar_fk", value: "FOREIGN KEY (avatarId) REFERENCES avatar(id) ON DELETE RESTRICT" },
      ],
    },
    {
      name: "cosmetic",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "image", value: "TEXT NOT NULL" },
        { column: "type", value:"TEXT NOT NULL" },
        { column: "price", value: "INTEGER NOT NULL" }
      ],
    },
    {
      name: "wears",
      schema: [
        { column: "userId", value: "INTEGER NOT NULL"},
        { column: "avatarId", value: "INTEGER NOT NULL" },
        { column: "cosmeticId", value: "INTEGER NOT NULL"},
        { constraint: 'PK_wears', value: 'PRIMARY KEY (userId,avatarId,cosmeticId)'},
        { constraint: "user_fk", value: "FOREIGN KEY (userId) REFERENCES user(id) ON DELETE RESTRICT" },
        { constraint: "avatar_fk", value: "FOREIGN KEY (avatarId) REFERENCES avatar(id) ON DELETE RESTRICT" },
        { constraint: "comestic_fk", value: "FOREIGN KEY (cosmeticId) REFERENCES cosmetic(id) ON DELETE RESTRICT" },
      ],
    },
    {
      name: "game",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL"},
      ],
      values: [
        [1, "Hangman"]
      ]
    },
    {
      name: "hangmanExercise",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "date", value: "DATE NOT NULL"},
        { column: "gameId", value: "INTEGER NOT NULL"},
        { column: "userId", value: "INTEGER NOT NULL"},
        { column: "points", value: "INTEGER NOT NULL"},
        { constraint: "game_fk", value: "FOREIGN KEY (gameId) REFERENCES game(id) ON DELETE RESTRICT" },
        { constraint: "user_fk", value: "FOREIGN KEY (userId) REFERENCES user(id) ON DELETE RESTRICT" },
      ],
    },
    {
      name: "word",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL"},
        { column: "image", value: "TEXT"},
        { column: "wordGroup", value: "TEXT" },
      ],
      values: [
        [1,"brillante", "/assets/images/words/BR_group/Brillante.png","br"],
        [2,"libreta", "/assets/images/words/BR_group/Libreta.png","br"],
        [3,"sobre", "/assets/images/words/BR_group/Sobre.png","br"],
        [4,"sombrero", "/assets/images/words/BR_group/Sombrero.png","br"],
        [5,"sombrilla", "/assets/images/words/BR_group/Sombrilla.png","br"],
        [6,"comprar", "/assets/images/words/PR_group/Comprar.png","pr"],
        [7,"prado", "/assets/images/words/PR_group/Prado.png","pr"],
        [8,"precio", "/assets/images/words/PR_group/Precio.png","pr"],
        [9,"predecir", "/assets/images/words/PR_group/Predecir.png","pr"],
        [10,"preguntar", "/assets/images/words/PR_group/Preguntar.png","pr"],
      ]
    }, 
    {
      name: "try",
      schema: [
        { column: "sequenceId", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "sequence", value: "TEXT NOT NULL"},
        { column: "time", value: "INTEGER NOT NULL" },
        { column: "exerciseId", value: "INTEGER NOT NULL" },
        { column: "wordId", value: "INTEGER NOT NULL" },
        { constraint: "excercise_fk", value: "FOREIGN KEY (exerciseId) REFERENCES hangmanExercise(id) ON DELETE RESTRICT" },
        { constraint: "word_fk", value: "FOREIGN KEY (wordId) REFERENCES word(id) ON DELETE RESTRICT" },
      ],
    },
    {
      name: "hint",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "position", value: "INTEGER"},
        { column: "tryId", value:"INTEGER"},
        { constraint: "try_fk", value: "FOREIGN KEY (tryId) REFERENCES try(sequenceId) ON DELETE RESTRICT" },
      ],
    },
  ],
};
export default dataToImport;

