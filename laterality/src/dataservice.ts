// SQLITE IMPORTS
import { Plugins } from "@capacitor/core";
import { SQLiteConnection } from "@capacitor-community/sqlite";

// JSON FILE WITH DATA
import jsonData from "./import-json";

const { CapacitorSQLite } = Plugins;

//const mSQLite = new SQLiteConnection(CapacitorSQLite);
const mSQLite = new SQLiteConnection(CapacitorSQLite);
let database: any;

/**
 * load from json file initial content
 */
const loadJSON = async () => {
  return await mSQLite.importFromJson(JSON.stringify(jsonData));
};

/**
 * initialize database..
 */
export const initdb = async () => {
  try {
    database = await mSQLite.createConnection(
      "laterdb",
      false,
      "no-encryption",
      1
    );

    // load the schema
    await loadJSON();

    return database;

  } catch (e) {
    window.alert(JSON.stringify(e, null, 2));
    return null;
  }
};

/**
 * query all users from the database
 */
export const queryAllUsers = async () => {
  // open database
  await database.open();

  // query to get all of the contacts from database
  return database.query("SELECT * from users;");
};

/**
 *
 * @param userId
 */
export const getUserById = async (userId: any) => {
  return await database.query("SELECT * FROM users WHERE id = ?;", [
    userId + "",
  ]);
};

/**
 *
 * @param userId
 */
export const deleteUserById = async (userId: any) => {
  return await database.query("DELETE FROM users WHERE id = ?;", [
    userId + "",
  ]);
};

/**
 *
 * @param userId
 */
export const updateUserById = async (userId: any, userData: any) => {
  const { name, points } = userData;
  return await database.query(
    "UPDATE users SET name=?, points=? WHERE id = ?;",
    [name, points, userId+ ""]
  );
};

/**
 *
 * @param userData
 */
export const createUser = async (userData: any) => {
  const { name, points} = userData;
  return await database.run(
    "INSERT INTO users (name,points) VALUES(?,?)",
    [name, points]
  );
};
