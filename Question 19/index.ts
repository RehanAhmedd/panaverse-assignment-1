type Guest = { name: string, deceased?: boolean }; 

// Create an array of guests to invite to dinner
let guestList: Guest[] = [
  { name: "Doc Abdul Qadeer Khan" },
  { name: "Usman ", deceased: true },
  { name: "Muhammad", deceased: true }
];

console.log(`You are inviting ${guestList.length} people to dinner.`);
