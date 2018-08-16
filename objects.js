var playlist = {
  artistName: 'songTitle'};

var artistName = {
  My Bloody Valentine:
  Phil Ochs:
  Slowdive:
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( {}, playlist, { [artistName]: songTitle})
  return playlist;
  }

