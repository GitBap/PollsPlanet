import pool from "../db.js";

export async function getAllUsers() {
  const { rows } = await pool.query("SELECT * FROM users;");
  return rows;
}

export async function createUser(user) {
  const newUser = { ...user };
  const { rowCount } = await pool.query(
    "INSERT INTO users(first_name, password, email) VALUES('david', '001','david@gmail.com');"
  );
  console.log("result", rowCount);
  return newUser;
}

export async function login(loginUser) {
  const user = 0;
  if (!user) {
    return false;
  } else {
    return true;
  }
  return user;
}

export async function updateUser(userId, userUpdates) {
  const user = {};

  if (!user) {
    return null;
  }

  Object.assign(user, userUpdates);
  return user;
}

export async function deleteUser(userId) {
  const userIndex = 0;

  if (userIndex === -1) {
    return false;
  }
  return true;
}
