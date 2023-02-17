// Define the types for the guests and the dinner invitation
let worldList: string[] = ['Paris', 'Gilgit', 'Prague', 'Skardu', 'Fairy Meadows'];

// Print the array in its original order
console.log("Original order:");
console.log(worldList);

// Print the array in its alphabetical order without modifying the actual list.
console.log("Alphabetical order:");
console.log(worldList.slice().sort());

// Printing again
console.log("Original order still same:");
console.log(worldList);

// Print the array in its alphabetical order without modifying the actual list.
console.log("Reverse alphabetical order:");
console.log(worldList.slice().sort().reverse());

// Printing again
console.log("Original order still same:");
console.log(worldList);

// Reverse the order of the array
worldList.reverse();
console.log("Reversed order:");
console.log(worldList);

// Reverse the order of the array back to original
worldList.reverse();
console.log("Reverse to original order:");
console.log(worldList);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
worldList.sort();
console.log("Again Alphabetical order:");
console.log(worldList);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
worldList.sort((a,b)=> b.localeCompare(a));
console.log("Sorts it in reverse alphabetical order");
console.log(worldList);


