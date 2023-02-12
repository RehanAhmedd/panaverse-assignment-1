let personName: string = "rehan ahmed";

var titlePersonName = personName.split(" ");
for (var i = 0; i < titlePersonName.length; i++) {
    titlePersonName[i] = titlePersonName[i][0].toUpperCase() + titlePersonName[i].slice(1);
}


console.log("Lowercase: ", personName.toLowerCase());
console.log("Uppercase: ", personName.toUpperCase());
console.log("Titlecase: ", titlePersonName.join(" "))