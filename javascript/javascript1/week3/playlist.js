const songDatabase = [{
    songId: 1,
    title: 'Truth Hurts',
    artist: 'Lizzo',
  },
  {
    songId: 2,
    title: 'Senorita',
    artist: 'Shawn Mendes & Camila Cabello',
  },
  {
    songId: 3,
    title: 'Goodbyes',
    artist: 'Post Malone Featuring Young',
  },
  {
    songId: 4,
    title: 'Circles',
    artist: 'Post Malone',
  },
  {
    songId: 5,
    title: 'Bad Guy',
    artist: 'Billie Eilish',
  },
  {
    songId: 6,
    title: 'Ran$om',
    artist: 'Lil Tecca',
  },
  {
    songId: 7,
    title: 'No Guidance',
    artist: 'Chris Brown Featuring Drake',
  }
  ,
  {
    songId: 8,
    title: 'Someone You Loved',
    artist: 'Lewis Capaldi',
  },
  {
    songId: 9,
    title: 'Old Town Road',
    artist: 'Lil Nas X Featuring Billy Ray Cyrus',
  },
  {
    songId: 10,
    title: 'Talk',
    artist: 'Khalid',
  },
  {
    songId: 11,
    title: 'I Don\'t Care',
    artist: 'Ed Sheeran & Justin Bieber',
  }
];

function addSongToDatabase( song ) {
    song.songId = songDatabase.length + 1;
    return songDatabase.push(song);
}

function getSongByTitle( songtitle ) {
    for(let i = 0; i < songDatabase.length ; i++){
        if(songDatabase[i].title === songtitle) {
            return songDatabase[i];
        }
    }
    // return {songId: '', title: '',artist: ''}
}

function addSongToMyPlaylist(title) {
    myPlaylist.push(getSongByTitle(title));
}

addSongToDatabase({
    songId: '',
    title: 'title_X',
    artist: 'artist_X',
  });
console.log (songDatabase);

const myPlaylist = [];
console.log('\ngetSongByTitle(\'Town\')');
console.log(getSongByTitle('Town'));

console.log('\ngetSongByTitle(\'Bad Guy\')');
console.log(getSongByTitle('Bad Guy'));

addSongToMyPlaylist('Circles');
console.log('\nmyPlaylist'); 
console.log(myPlaylist); 

addSongToMyPlaylist('Talk');
console.log('\nmyPlaylist'); 
console.log(myPlaylist); 