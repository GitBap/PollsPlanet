// import { db } from "../db.mjs";

export async function getAllUsers() {
    const users = [];
    return users;
}

export async function createUser(user) {
    const newUser = { ...user }; 
    return newUser;
}

export async function login(loginUser) {
    const user = 0; 
    if(!user) {
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