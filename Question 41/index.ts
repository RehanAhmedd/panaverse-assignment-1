function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => {
    console.log(magician);
  })
}

const magicians = [ "David Blaine", "Criss Angel"];
show_magicians(magicians);