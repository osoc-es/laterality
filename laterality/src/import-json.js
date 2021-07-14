const now = parseInt(new Date().getTime() / 1000);
console.log(now);
const dataToImport = {
  database: "latusdb",
  version: 1,
  encrypted: false,
  mode: "full",
  tables: [

    {
      name: "avatar",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "image", value: "TEXT" },
      ],
    }, 
    {
      name: "user",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "points", value: "INTEGER" },
        { column:"avatarId", value: "INTEGER"},
        { constraint: "avatar_fk", value: "FOREIGN KEY (avatarId) REFERENCES avatar(id) ON DELETE RESTRICT" },
      ],
    },
    {
      name: "cosmetic",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "image", value: "TEXT" },
        { column: "type", value:"TEXT"},
      ],
    },
    {
      name: "wears",
      schema: [
        { column: "avatarId", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "cosmeticId", value: "INTEGER NOT NULL"},
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
    },
    {
      name: "hangmanExercise",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "date", value: "DATE"},
        { column: "gameId", value: "INTEGER"},
        { column: "userId", value: "INTEGER"},
        { column: "points", value: "INTEGER"},
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
    }, 
    {
      name: "try",
      schema: [
        { column: "sequenceId", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "sequence", value: "TEXT NOT NULL"},
        { column: "time", value: "INTEGER" },
        { column: "exerciseId", value: "INTEGER" },
        { column: "wordId", value: "INTEGER" },
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

