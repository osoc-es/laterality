const now = parseInt(new Date().getTime() / 1000);
console.log(now);
const dataToImport = {
  database: "testdb",
  version: 1,
  encrypted: false,
  mode: "partial",
  tables: [
    {
      name: "user",
      schema: [
        { column: "id", value: "INTEGER PRIMARY KEY NOT NULL" },
        { column: "name", value: "TEXT UNIQUE NOT NULL" },
        { column: "points", value: "INTEGER" },
      ],
    },
  ],
};
export default dataToImport;

