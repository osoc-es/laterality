const dataToImport = {
  database: "lateralitydb",
  version: 1,
  encrypted: false,
  mode: "full",
  tables: [
    {
      name: "user",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "points", value: "INTEGER" },
      ],
      values: [
        [2, "Jaime", 0],
        [3, "Maria", 0],
      ]
    },
    /*
    {
      name: "avatar",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "image", value: "BLOB" }
      ],
    },
    {
      name: "user",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "points", value: "INTEGER" },
        { column:"avatarId", value: "INTEGER"},
        {
          foreignkey: 'avatarId',
          value: 'REFERENCES avatar(id) ON DELETE RESTRICT',
        },
      ],
    },
    {
      name: "cosmetic",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "image", value: "BLOB" },
        { column: "type", value:"TEXT"}
      ],
    },
    {
      name: "wears",
      schema: [
        { column: "avatarId", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "cosmeticId", value: "INTEGER NOT NULL"},
        {
          foreignkey: 'avatarId',
          value: 'REFERENCES avatar(id) ON DELETE RESTRICT',
        },
        {
          foreignkey: 'cosmeticId',
          value: 'REFERENCES cosmetic(id) ON DELETE RESTRICT',
        },
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
        { column: "exerciseId", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "date", value: "DATE"},
        { column: "gameId", value: "INTEGER"},
        { column: "userId", value: "INTEGER"},
        { column: "points", value: "INTEGER"},
        {
          foreignkey: 'gameId',
          value: 'REFERENCES game(id) ON DELETE RESTRICT',
        },
        {
          foreignkey: 'userId',
          value: 'REFERENCES user(id) ON DELETE RESTRICT',
        }
      ],
    },
    {
      name: "wordGroup",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "value", value: "TEXT UNIQUE NOT NULL"},
      ],
    },
    {
      name: "word",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL"},
        { column: "image", value: "BLOB"},
        { column: "wordGroupId", value: "INTEGER" },
        { 
          foreignkey: 'wordGroupId',
          value: 'REFERENCES wordGroup(id) ON DELETE RESTRICT',
        }
      ],
    },*/
  ],
};
export default dataToImport;

