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
      "latusdb",
      false,
      "no-encryption",
      1
    );

    // load the default users
    await loadJSON();

    return database;
  } catch (e) {
    //window.alert(JSON.stringify(e, null, 2));
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


export const queryAllwords = async () => {
  // query to get all of the words from database
  return database.query("SELECT * from word;");
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
 * @param avatarId
 */
 export const getAvatarById = async (avatarId: any) => {
  return await database.query("SELECT * FROM avatar WHERE id = ?;", [
    avatarId + "",
  ]);
};

/**
 *
 * @param wordId
 */
export const getWordById = async (wordId: any) => {
  return await database.query("SELECT * FROM word WHERE id = ?;", [
    wordId + "",
  ]);
};

/**
 *
 * @param wordGroup
 */
export const getWordsByGroup = async(wordGroup:any) => {
  return await database.query("SELECT * FROM word WHERE wordGroup = ?;",[
    wordGroup + "",
  ])
}
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
  const { name, points, avatarId } = userData;
  alert(JSON.stringify(userData));
  return await database.query(
    "UPDATE user SET name=?, points=?, avatarId=? WHERE id = ?;",
    [name, points, avatarId, id + ""]
  );
};

/**
 *
 * @param userData
 */
export const createUser = async (userData: any) => {
  const { name, avatarId } = userData;
  return await database.run(
    "INSERT INTO user (name, points, avatarId) VALUES(?,0,?)",
    [name, avatarId]

  );
};
