"use strict";
const usernames = ['Rehan', 'Admin', 'Muhammad', 'Sarah', 'Admin', 'David'];
for (let username of usernames) {
    if (username === 'Admin') {
        console.log(`Hello ${username}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
