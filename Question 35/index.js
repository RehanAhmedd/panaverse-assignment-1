"use strict";
const animals = ["cat", "dog", "rabbit"];
// Print the names of each animal
console.log("The animals are:");
for (let animal of animals) {
    console.log(animal);
}
// Print a statement about each animal
console.log("\nSome statements about these animals:");
for (let animal of animals) {
    switch (animal) {
        case "cat":
            console.log("A cat is a great companion.");
            break;
        case "dog":
            console.log("A dog is a loyal friend.");
            break;
        case "rabbit":
            console.log("A rabbit is a cute and playful pet.");
            break;
        default:
            console.log("I don't know much about this animal.");
    }
}
// Print what these animals have in common
console.log("\nAny of these animals would make a great pet!");
