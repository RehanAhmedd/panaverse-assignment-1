"use strict";
const currentUsers = ['Rehan', 'Ahmed', 'Muhammad', 'Usman', 'Kashif'];
const newUsers = ['Ali', 'Ismail', 'rehan', 'usman', 'Omer'];
for (const newUser of newUsers) {
    const usernameTaken = currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase());
    if (usernameTaken) {
        console.log(`Sorry, the username "${newUser}" is already taken. Please choose a different username.`);
    }
    else {
        console.log(`Great, the username "${newUser}" is available.`);
    }
}
