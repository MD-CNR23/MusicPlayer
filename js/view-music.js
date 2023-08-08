let $ = document
let locationSearch = location.search
let locationSearchParams = new URLSearchParams(locationSearch)
let userIDParams = locationSearchParams.get('id')
let contianerMusicList  = $.querySelector('.contianer-musiclist')
let titleMusicList = $.querySelector('#titlemusiclist')
let imgCoverMusiclist = $.querySelector('.img-cover-musiclist')
let playPauseBtn = $.getElementById('play-pause')
let audioPath = $.querySelector("audio")
let containerTitle = $.querySelector('.container-title')


let allMusicsStyles = [
    {id: 1, name : "Game", cover: "image/artists/the-witcher.jpg", color: "linear-gradient(to right,#bb3a19f6 ,#0a46b6d2 ,#361b1bc9)"},
    {id: 2, name : "Rock", cover: "image/artists/Serj tankian.jpg", color: "linear-gradient(to right,#bb1919f6 ,#b60a3ed2 ,#7e0606c9)"},
    {id: 3, name : "Movie", cover: "image/artists/interstellar.jpg", color: "linear-gradient(to right,#beb7b7f6 ,#cececed2 ,#aaaaaac9)"},
    {id: 4, name : "rap & HipHop", cover: "image/artists/eminem.jpg", color: "linear-gradient(to right,#000000 ,#202020f5 ,#070707e3)"},
    {id: 5, name : "Pop", cover: "image/artists/edSheeran.jpg", color: " linear-gradient(to right,#07dbd1e3 ,#1795b4f5 ,#06838be3)"},
    {id: 6, name : "Classic", cover: "image/artists/classic.jpg", color: "linear-gradient(to right,#1d1d1de3 ,#6c7172f5 ,#251c1ce3)"},
    {id: 7, name : "selected", cover: "image/artists/selected.png", color: "linear-gradient(to right,#0c4626e3 ,#638288f5 ,#f0e5e5e3)"},
    {id: 8, name : "trends", cover: "image/artists/trends.jpg", color: "linear-gradient(to right,#3d2c88e3 ,#582c58f5 ,#551c1c)"},
];

let allmusic = [
    // games
    {id: 1, idTrack: 1, name : "Game", nameTrack : "Bioshok infinite",cover: "image/game/bioshock infinite.png"},
    {id: 1, idTrack: 2, name : "Game", nameTrack : "assassins Creed Revelations",cover: "image/game/assassin_s_creed_revelations.jpg"},
    {id: 1, idTrack: 3, name : "Game", nameTrack : "assassins Creed 2",cover: "image/game/assassins creed2.JPG"},
    {id: 1, idTrack: 4, name : "Game", nameTrack : "batman Arkham City",cover: "image/game/batman-arkham-city.jpg"},
    {id: 1, idTrack: 5, name : "Game", nameTrack : "call Of Duty Modern Warfare 4",cover: "image/game/call of duty mw3.jpg"},
    {id: 1, idTrack: 6, name : "Game", nameTrack : "crysis2",cover: "image/game/crysis.jpg"},
    {id: 1, idTrack: 7, name : "Game", nameTrack : "Doom",cover: "image/game/doom.jpg"},
    {id: 1, idTrack: 8, name : "Game", nameTrack : "elden Ring",cover: "image/game/elden ring.jpg"},
    {id: 1, idTrack: 9, name : "Game", nameTrack : "god Of War 2018",cover: "image/game/gow2018.jpg"},
    {id: 1, idTrack: 10, name : "Game", nameTrack : "dark Souls 1",cover: "image/game/ds1.jpg"},
    {id: 1, idTrack: 11, name : "Game", nameTrack : "Need for Speed Rivals",cover: "image/game/Need-for-Speed-Rivals.jpg"},
    {id: 1, idTrack: 12, name : "Game", nameTrack : "a Plaguetale",cover: "image/game/plaguetale.jpg"},
    {id: 1, idTrack: 13, name : "Game", nameTrack : "red Dead Redemption 2",cover:"image/game/Red Dead Redemption2.jpg"},
    {id: 1, idTrack: 14, name : "Game", nameTrack : "Resident Evil 2",cover: "image/game/resident evil remake 2.jpg"},
    {id: 1, idTrack: 15, name : "Game", nameTrack : "street Fighter",cover: "image/game/street fighter.jpg"},
    {id: 1, idTrack: 16, name : "Game", nameTrack : "The Last of Us",cover: "image/game/tlou1.jpg"},
    {id: 1, idTrack: 17, name : "Game", nameTrack : "The Last of Us Part 2",cover: "image/game/tloup2.png"},
    {id: 1, idTrack: 18, name : "Game", nameTrack : "Vampire Survivors",cover: "image/game/Vampire_Survivors_key_art.jpg"},
    {id: 1, idTrack: 19, name : "Game", nameTrack : "witcher 3",cover: "image/game/witcher3.jpg"},
    {id: 1, idTrack: 20, name : "Game", nameTrack : " Zelda",cover: "image/game/zelda-breath-of-the-wild.jpg"},

     // Rock
     {id: 2, idTrack: 21, name : "Rock", nameTrack : "Human",cover: "image/rock/Human.jpg"},
     {id: 2, idTrack: 22, name : "Rock", nameTrack : "Carnival Of Rust",cover: "image/rock/carnival of rust.jpg"},
     {id: 2, idTrack: 23, name : "Rock", nameTrack : "Forget Me Knot",cover: "image/rock/forget me knot.jpg"},
     {id: 2, idTrack: 24, name : "Rock", nameTrack : "Enemy",cover: "image/rock/imagine-dragons-and-jid-enemy.jpg"},
     {id: 2, idTrack: 25, name : "Rock", nameTrack : "Natural",cover: "image/rock/ab67616d0000b273da6f73a25f4c79d0e6b4a8bd.jpg"},
     {id: 2, idTrack: 26, name : "Rock", nameTrack : "bones",cover: "image/rock/bones.jpg" ,path: "music/rock/imagine_dragons_-_bones.mp3",},
     {id: 2, idTrack: 27, name : "Rock", nameTrack : "Thunder",cover: "image/rock/Imagine_Dragons_Thunder.jpg"},
     {id: 2, idTrack: 28, name : "Rock", nameTrack : "Popular Monster",cover: "image/rock/Popular Monster.jpg"},
     {id: 2, idTrack: 29, name : "Rock", nameTrack : "Saving Us",cover: "image/rock/serj tankian saving us.jpg"},
     {id: 2, idTrack: 30, name : "Rock", nameTrack : "Sky Is Over",cover: "image/rock/serj tankian sky is over.jpg"},
     {id: 2, idTrack: 31, name : "Rock", nameTrack : "Harakiri",cover: "image/rock/serj tankian harakiri.jpg"},
     {id: 2, idTrack: 32, name : "Rock", nameTrack : "The Rains Of Castamere",cover: "image/rock/serj tankian ramin djawadi.jpg"},
 

    // movie
    {id: 3, idTrack: 33, name : "movie", nameTrack : "Braveheart",cover: "image/music film/braveheart.jpg"},
    {id: 3, idTrack: 34, name : "movie", nameTrack : "Gladiator",cover: "image/music film/gladiator.jpg"},
    {id: 3, idTrack: 35, name : "movie", nameTrack : "Interstellar",cover: "image/music film/Interstellar.jpeg"},
    {id: 3, idTrack: 36, name : "movie", nameTrack : "Leon The Professional",cover: "image/music film/leon-the-professional.jpg"},
    {id: 3, idTrack: 37, name : "movie", nameTrack : "Papillon",cover: "image/music film/Papillon.png"},
    {id: 3, idTrack: 38, name : "movie", nameTrack : "Rocky",cover: "image/music film/rocky.jpg"},
    {id: 3, idTrack: 39, name : "movie", nameTrack : "The Dark Knight",cover: "image/music film/the dark knight.jpg"},
    {id: 3, idTrack: 40, name : "movie", nameTrack : "The Good The Bad And The Ugly",cover: "image/music film/the good the bad and the ugly.jpg"},
    {id: 3, idTrack: 41, name : "movie", nameTrack : "The Lord Of Ring",cover: "image/music film/the lord of ring.jpg"},
    {id: 3, idTrack: 42, name : "movie", nameTrack : "The Godfather",cover: "image/music film/The-Godfather.jpg"},

    //rap & HipHop
    {id: 4, idTrack: 43, name : "rap & HipHop", nameTrack : "Drop It Like Its Hot...",cover: "image/rap & hiphop/_Snoop_Dogg_Drop It Like Its Hot Tim Gunter.jpg"},
    {id: 4, idTrack: 44, name : "rap & HipHop", nameTrack : "Beautiful",cover: "image/rap & hiphop/Beautiful.jpg"},
    {id: 4, idTrack: 45, name : "rap & HipHop", nameTrack : "Monster",cover: "image/rap & hiphop/Eminem_-_Music_to_Be_Murdered_By.png"},
    {id: 4, idTrack: 46, name : "rap & HipHop", nameTrack : "Stan",cover: "image/rap & hiphop/eminemstan.png"},
    {id: 4, idTrack: 47, name : "rap & HipHop", nameTrack : "Venom",cover: "image/rap & hiphop/Eminem'Venom'.jpg"},
    {id: 4, idTrack: 48, name : "rap & HipHop", nameTrack : "Last One Standing",cover: "image/rap & hiphop/Last One Standing (feat. Polo G_ Mozzy _ Eminem) - From Venom_ Let There Be Carnage.jpg"},
    {id: 4, idTrack: 49, name : "rap & HipHop", nameTrack : "Mockingbird",cover: "image/rap & hiphop/Mockingbird.jpg"},
    {id: 4, idTrack: 50, name : "rap & HipHop", nameTrack : "Rap God",cover: "image/rap & hiphop/Rap God.jpg"},
    {id: 4, idTrack: 51, name : "rap & HipHop", nameTrack : "BRUNO MARS",cover: "image/rap & hiphop/SNOOP DOGG ft WIZ KHALIFA ft BRUNO MARS.jpg"},
    {id: 4, idTrack: 52, name : "rap & HipHop", nameTrack : "Vato",cover: "image/rap & hiphop/Snoop_Dogg Vato.jpg"},
    {id: 4, idTrack: 53, name : "rap & HipHop", nameTrack : "Till I Collapse",cover: "image/rap & hiphop/Till I Collapse.jpg"},
    {id: 4, idTrack: 54, name : "rap & HipHop", nameTrack : "Without Me",cover: "image/rap & hiphop/Without Me.png"},
    {id: 4, idTrack: 55, name : "rap & HipHop", nameTrack : "Everybody Dies In...",cover: "image/rap & hiphop/XXXTENTACION - Everybody Dies In Their Nightmares.jpg"},

    //Pop
    {id: 5, idTrack: 56, name : "pop", nameTrack : "Let Me Down Slowly ",cover: "image/pop/Alec-Benjamin.jpg"},
    {id: 5, idTrack: 57, name : "pop", nameTrack : "Balenciaga",cover: "image/pop/Balenciaga.jpg"},
    {id: 5, idTrack: 58, name : "pop", nameTrack : "Callin' U",cover: "image/pop/Callin' U.jpg"},
    {id: 5, idTrack: 59, name : "pop", nameTrack : "2Step",cover: "image/pop/Ed_Sheeran 2step.png"},
    {id: 5, idTrack: 60, name : "pop", nameTrack : "Don t",cover: "image/pop/Ed_Sheeran Don't.png"},
    {id: 5, idTrack: 61, name : "pop", nameTrack : "Shivers",cover: "image/pop/Ed_Sheeran Shivers.png"},
    {id: 5, idTrack: 62, name : "pop", nameTrack : "Ego",cover: "image/pop/ego.jpg"},
    {id: 5, idTrack: 63, name : "pop", nameTrack : "Ghost",cover: "image/pop/ghost.jpg"},
    {id: 5, idTrack: 64, name : "pop", nameTrack : "It Ain t Me",cover: "image/pop/Kygo Selena Gomez.jpg"},
    {id: 5, idTrack: 65, name : "pop", nameTrack : "Living Life In The Night",cover: "image/pop/Living Life In The Night.jpg"},
    {id: 5, idTrack: 66, name : "pop", nameTrack : "Lose Yourself Remix",cover: "image/pop/Lose Yourself Remix.jpg"},
    {id: 5, idTrack: 67, name : "pop", nameTrack : "Moonlight",cover: "image/pop/moonlight.jpg"},
    {id: 5, idTrack: 68, name : "pop", nameTrack : "Runaway",cover: "image/pop/runaway.jpg"},
    {id: 5, idTrack: 69, name : "pop", nameTrack : "Stranger Things (feat. OneRepublic) Alan Walker",cover: "image/pop/Stranger Things (feat. OneRepublic) Alan Walker Remix.jpg"},
    {id: 5, idTrack: 70, name : "pop", nameTrack : "Changes",cover: "image/pop/xxxtentacion.jpg"},

    //Classic
    {id: 6, idTrack: 71, name : "Classic", nameTrack : "HANDEL THE ARRIVAL... ",cover: "image/classic/classic.jpg"},
    {id: 6, idTrack: 72, name : "Classic", nameTrack : "VIVALDI LE...",cover: "image/classic/classic.jpg"},
    {id: 6, idTrack: 73, name : "Classic", nameTrack : "J.S. BACH...",cover: "image/classic/classic.jpg"},
    {id: 6, idTrack: 74, name : "Classic", nameTrack : "MOZART HORN...",cover: "image/classic/classic.jpg"},
    {id: 6, idTrack: 75, name : "Classic", nameTrack : "BEETHOVEN SYMPHONY... ",cover: "image/classic/classic.jpg"},
    {id: 6, idTrack: 76, name : "Classic", nameTrack : "TCHAIKOVSKY OVERTURE...",cover: "image/classic/classic.jpg"},
    {id: 6, idTrack: 77, name : "Classic", nameTrack : "GRIEG- PIANO CONCERTO...",cover: "image/classic/classic.jpg"},
    {id: 6, idTrack: 78, name : "Classic", nameTrack : "SIBELIUS ALLA MARCIA",cover: "image/classic/classic.jpg"},
    {id: 6, idTrack: 79, name : "Classic", nameTrack : "RACHMANINOV PIANO...",cover: "image/classic/classic.jpg"},
    {id: 6, idTrack: 80, name : "Classic", nameTrack : "Experience",cover: "image/classic/classic.jpg"},

    //selected
    {id: 7, idTrack: 81, name : "selected", nameTrack : "Saving Us",cover: "image/rock/serj tankian saving us.jpg"},
    {id: 7, idTrack: 82, name: "selected", nameTrack : "The Last of Us", cover: "image/game/tlou1.jpg"},
    {id: 7, idTrack: 83, name: "selected", nameTrack : "interstellar", cover: "image/music film/Interstellar.jpeg"},
    {id: 7, idTrack: 84, name: "selected", nameTrack : "shivers", cover: "image/pop/Ed_Sheeran Shivers.png"},
    {id: 7, idTrack: 85, name: "selected", nameTrack : "Godzilla ", cover: "image/rap & hiphop/Eminem_-_Music_to_Be_Murdered_By.png"},
    {id: 7, idTrack: 86, name: "selected", nameTrack : "natural", cover: "image/rock/ab67616d0000b273da6f73a25f4c79d0e6b4a8bd.jpg"},
    {id: 7, idTrack: 87, name: "selected", nameTrack : "Beautiful", cover: "image/rap & hiphop/Beautiful.jpg"},
    {id: 7, idTrack: 88, name : "selected", nameTrack : "dark Souls 1",cover: "image/game/ds1.jpg"},
    {id: 7, idTrack: 89, name: "selected", nameTrack : "experience", cover: "image/classic/classic.jpg"},
    {id: 7, idTrack: 90, name : "selected", nameTrack : "Need for Speed Rivals",cover: "image/game/Need-for-Speed-Rivals.jpg"},
    {id: 7, idTrack: 91, name : "selected", nameTrack : "Popular Monster",cover: "image/rock/Popular Monster.jpg"},
    {id: 7, idTrack: 92, name : "selected", nameTrack : "Leon The Professional",cover: "image/music film/leon-the-professional.jpg"},
   
    //trends
    {id: 8, idTrack: 93, name: "trends", nameTrack: "The Godfather", cover: "image/music film/The-Godfather.jpg"},
    {id: 8, idTrack: 94, name: "trends", nameTrack: "ego", cover: "image/pop/ego.jpg"},
    {id: 8, idTrack: 95, name: "trends", nameTrack: "Living Life In ...", cover: "image/pop/Living Life In The Night.jpg",},
    {id: 8, idTrack: 96, name: "trends", nameTrack: "runaway", cover: "image/pop/runaway.jpg"},
    {id: 8, idTrack: 97, name: "trends", nameTrack: "Rap God ", cover: "image/rap & hiphop/Rap God.jpg"},
    {id: 8, idTrack: 98, name: "trends", nameTrack: "bones", cover: "image/rock/bones.jpg"},
    {id: 8, idTrack: 99, name: "trends", nameTrack: "enemy", cover: "image/rock/imagine-dragons-and-jid-enemy.jpg"},
    {id: 8, idTrack: 100, name : "trends", nameTrack : "Lose Yourself Remix",cover: "image/pop/Lose Yourself Remix.jpg"},
    {id: 8, idTrack: 101, name : "trends", nameTrack : "street Fighter",cover: "image/game/street fighter.jpg"},
    {id: 8, idTrack: 102, name : "trends", nameTrack : "Human",cover: "image/rock/Human.jpg"},
    {id: 8, idTrack: 103, name : "trends", nameTrack : "Moonlight",cover: "image/pop/moonlight.jpg"},
    {id: 8, idTrack: 104, name : "trends", nameTrack : "assassins Creed 2",cover: "image/game/assassins creed2.JPG"},
];


let mianUser = allMusicsStyles.find(function (song) {
    return Number(userIDParams) === song.id
})

if (mianUser) {
    let mianUserMusic = allmusic.filter(function (song) {
        return song.id === mianUser.id
    })
    mianUserMusic.forEach(function (music) {
        contianerMusicList.insertAdjacentHTML('afterend', '<div class="container-music"><img src="' +
        music.cover + '" alt="cover" id="cover-music"><span id="music-name"> ' +
        music.nameTrack + ' </span><div class="operator-music"></audio><button id="play-pause-btn"  id = "play-pause" class="btn-style" style="right: 100px;"><a href="file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id= ' + music.idTrack+ '"><i class="fas fa-play icon" id = "play-pause" style="left: 15px; color: #fff"></i></a></button></div></div>')
        })
    titleMusicList.innerHTML = mianUser.name
    imgCoverMusiclist.setAttribute('src', mianUser.cover)
    containerTitle.style.background = mianUser.color
} else {
    alert("Page Not Found :(")
    location.href = 'file:///C:/Users/user/Desktop/(music-player)blue%20project/index-player.html'
}