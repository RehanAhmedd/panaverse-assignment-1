function make_shirt(size: string = "large", message: string = "I love TypeScript") {
  console.log(`Making a ${size} shirt with the message: "${message}"`);
}

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt("medium");

// Making a shirt of any size with a different message
make_shirt("small", "TypeScript rocks!");
