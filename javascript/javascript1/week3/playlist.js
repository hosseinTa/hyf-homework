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
    title: 'Bad Guy',
    artist: 'Eilish Billie ',
  },
  {
    songId: 11,
    title: 'Talk',
    artist: 'Khalid',
  },
  {
    songId: 12,
    title: 'I Don\'t Care',
    artist: 'Ed Sheeran & Justin Bieber',
  }
];

function addSongToDatabase( song ) {
    song.songId = songDatabase.length + 1;
    return songDatabase.push(song);
}

addSongToDatabase({ songId: '', title: 'title_X', artist: 'artist_X' });
console.log (songDatabase);

function getSongByTitle( songtitle ) {
    let songMach = [];
    for(let i = 0; i < songDatabase.length ; i++){
        if(songDatabase[i].title === songtitle) {
            songMach.push(songDatabase[i]);
        }
    }
    // console.log('songMach');    
    // console.log(songMach); 
    return songMach
}

console.log('\ngetSongByTitle(\'Town\')');
console.log(getSongByTitle('Town'));

console.log('\ngetSongByTitle(\'I Don\'t Care\')');
console.log(getSongByTitle('I Don\'t Care'));


console.log('\ngetSongByTitle(\'Bad Guy\')');
console.log(getSongByTitle('Bad Guy'));






function addSongToMyPlaylist(title) {
    const finding = getSongByTitle ( title ) ;
    for (let i = 0 ; i < finding.length ; i++) {
        myPlaylist.push(finding[i]);   
    }
}
const myPlaylist = [];
// const myPlaylist = [ {songId: 1, title: 'Truth Hurts', artist: 'Lizzo'}];
console.log('\nmyPlaylist_Circles'); 
addSongToMyPlaylist('Circles');
console.log(myPlaylist);

console.log('\nmyPlaylist_Talk'); 
addSongToMyPlaylist('Talk');
console.log(myPlaylist);

console.log('\nBad Guy'); 
addSongToMyPlaylist('Bad Guy');
console.log(myPlaylist);


