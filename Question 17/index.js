"use strict";
// Create an array of guests to invite to dinner
let guestList = [
    { name: "Doc Abdul Qadeer Khan" },
    { name: "Usman ", deceased: true },
    { name: "Muhammad", deceased: true }
];
console.log("Unfortunately, our new dinner table won't arrive in time, so we can only invite two people for dinner.");
while (guestList.length > 2) {
    const guest = guestList.pop();
    console.log(`Dear ${guest === null || guest === void 0 ? void 0 : guest.name},\nI'm sorry to inform you that we won't be able to invite you to the dinner. We hope to have the chance to see you soon.`);
}
// Print message to the remaining two guests
for (const guest of guestList) {
    console.log(`Dear ${guest === null || guest === void 0 ? void 0 : guest.name},\nI'm writing to confirm that you're still invited to the dinner. We're looking forward to seeing you there.`);
}
// Empty the list
guestList.length = 0;
console.log(guestList); // Output: []
