function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}

let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
show_magicians(magicians);

make_great(magicians);
show_magicians(magicians);
