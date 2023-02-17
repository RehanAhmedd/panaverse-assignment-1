"use strict";
function makeSandwich(...ingredients) {
    console.log(`Making a sandwich with: ${ingredients.join(", ")}`);
}
makeSandwich("ham", "cheese", "lettuce"); // Making a sandwich with: ham, cheese, lettuce
makeSandwich("turkey", "bacon"); // Making a sandwich with: turkey, bacon
makeSandwich("peanut butter", "jelly"); // Making a sandwich with: peanut butter, jelly
