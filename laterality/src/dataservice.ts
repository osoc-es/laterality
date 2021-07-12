// SQLITE IMPORTS
import { Plugins } from "@capacitor/core";
import { SQLiteConnection } from "@capacitor-community/sqlite";

// JSON FILE WITH DATA
import jsonData from "./import-json";

const { CapacitorSQLite } = Plugins;

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
      "testdb",
      false,
      "no-encryption",
      1
    );

    // load the default users
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

  // query to get all of the users from database
  return database.query("SELECT * from user;");
};

/**
 *
 * @param userId
 */
export const getUserById = async (userId: any) => {
  return await database.query("SELECT * FROM user WHERE id = ?;", [
    userId + "",
  ]);
};

/**
 *
 * @param userId
 */
export const deleteUserById = async (userId: any) => {
  return await database.query("DELETE FROM user WHERE id = ?;", [
    userId + "",
  ]);
};

/**
 *
 * @param id
 */
export const updateUserById = async (id: any, userData: any) => {
  const { name, points } = userData;
  return await database.query(
    "UPDATE user SET name=?, points=? WHERE id = ?;",
    [name, points, id + ""]
  );
};

/**
 *
 * @param userData
 */
export const createUser = async (userData: any) => {
  const { name } = userData;
  return await database.run(
    "INSERT INTO user (name, points) VALUES(?,0)",
    [name]

  );
};
