var playlist = { artist: "song_title" }

function updatePlaylist(playlist, artist, title) {
  var update = Object.assign(playlist, {[artist]: title})
  return update
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artistName;
  return {}
}
