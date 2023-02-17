"use strict";
function make_album(artist, title, tracks) {
    const album = {
        "artist": artist,
        "title": title,
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
// Example calls to make_album():
console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 10));
console.log(make_album("Artist 3", "Album 3", 15));
