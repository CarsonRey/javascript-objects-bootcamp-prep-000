var playlist = {
  artistName: 'songTitle'};

var artistName = {
  
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( {}, playlist, { [artistName]: songTitle})
  return playlist;
  }

