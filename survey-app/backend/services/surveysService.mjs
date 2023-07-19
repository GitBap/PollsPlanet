import pool from "../db.js";

export async function getAllPolls() {
    const polls = {};
    

    return polls;
}

export async function createPoll(poll) {
    const newPoll = { ...poll }; 
    return newPoll;
}

export async function updatePoll(pollId, pollUpdates) {
    const poll = {};

    if (!poll) {
        return null;
    }

    Object.assign(poll, pollUpdates);
    return poll;
}

export async function deletePoll(pollId) {
    const pollIndex = 0;

    if (pollIndex === -1) {
        return false;
    }
    return true;
}