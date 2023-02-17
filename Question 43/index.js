"use strict";
function make_great(magicians) {
    const great_magicians = magicians.map((magician) => `the Great ${magician}`);
    return great_magicians;
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicians = ["David Copperfield", "David Blaine", "Criss Angel"];
const great_magicians = make_great([...magicians]); // create a copy of magicians array
console.log("Printing original array");
show_magicians(magicians); // prints original array
console.log("---");
show_magicians(great_magicians); // prints new array with 'the Great' added to each name
