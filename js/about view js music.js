let $ = document
let locationSearch = location.search
let locationSearchParams = new URLSearchParams(locationSearch)
let userIDParams = locationSearchParams.get('id')
let picMusic = $.getElementById('pic-music')
let musicName = $.querySelector("#music-name")
let categoryMusics = $.querySelector("#category-name")
let music = $.querySelector("audio")
let prevBtn = $.querySelector("#prev-btn")
let Zero = $.querySelector("#zero")
let playPauseBtn = $.querySelector("#play-pause-btn")
let nextBtn = $.querySelector("#next-btn")
let prevIcon = $.querySelector("#prev")
let playPauseIcon = $.querySelector("#play-pause")
let nextIcon = $.querySelector("next")
let titleDocument = $.querySelector('title')
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
let loaderGif = $.querySelector('#loader')
let boxMusic = $.querySelector('.contianer-music-optional')
let backToTheHomePageBtn = $.querySelector(".backToTheHomePageBtn")
let songIndex = 0;
let isPlaying = false

let allmusic = [

    // games
    {id: 1, idTrack: 1, name : "Game", nameTrack : "Bioshok infinite",cover: "image/game/bioshock infinite.png", path : "music/game/18 Solace.mp3", layersColor: "linear-gradient(to bottom, #dbe729d5,#e6c94dd5, #a71a1ae3)"},
    {id: 1, idTrack: 2, name : "Game", nameTrack : "Assassins Creed Revelations",cover: "image/game/assassin_s_creed_revelations.jpg", path : "music/game/Assassin's Creed Revelations.mp3", layersColor: "linear-gradient(to bottom, #066cf3e7,#211fb6d5, #22c5e2e3)"},
    {id: 1, idTrack: 3, name : "Game", nameTrack : "assassins Creed 2",cover: "image/game/assassins creed2.JPG", path : "music/game/Jesper Kyd - Ezios Family.mp3", layersColor: "linear-gradient(to bottom,#979204 ,#8f0606d5,#4a4b0b)"},
    {id: 1, idTrack: 4, name : "Game", nameTrack : "batman Arkham City",cover: "image/game/batman-arkham-city.jpg", path : "music/game/13._batman_arkham_city_main_theme.mp3", layersColor: "linear-gradient(to bottom,#e7e7e7 ,#888888d5,#181818)"},
    {id: 1, idTrack: 5, name : "Game", nameTrack : "call Of Duty Modern Warfare 4",cover: "image/game/call of duty mw3.jpg", path : "music/game/call of duty.mp3", layersColor: "linear-gradient(to bottom,#0f0f0f ,#054100b4,#181818)"},
    {id: 1, idTrack: 6, name : "Game", nameTrack : "crysis 2",cover: "image/game/crysis.jpg", path : "music/game/crysis-2-_epilogue_main_theme.mp3", layersColor: "linear-gradient(to bottom,#71d87a ,#525252ef,#537e51)"},
    {id: 1, idTrack: 7, name : "Game", nameTrack : "Doom",cover: "image/game/doom.jpg", path : "music/game/doom.mp3", layersColor: "linear-gradient(to bottom,#630000 ,#fc7a7afa,#cc0e0e)"},
    {id: 1, idTrack: 8, name : "Game", nameTrack : "elden Ring",cover: "image/game/elden ring.jpg", path : "music/game/elden ring.mp3", layersColor: "linear-gradient(to bottom,#ec6834 ,#6b5c04, #6e2525fa)"},
    {id: 1, idTrack: 9, name : "Game", nameTrack : "god Of War 2018",cover: "image/game/gow2018.jpg", path : "music/game/gow2018.mp3", layersColor: "linear-gradient(to bottom,#dadada ,#7c7c7c, #494848fa)"},
    {id: 1, idTrack: 10, name : "Game", nameTrack : "dark Souls 1",cover: "image/game/ds1.jpg", path : "music/game/22-Gwyn-Lord-of-Cinder.mp3", layersColor: "linear-gradient(to right,#752e12 ,#868686, #6e6e5afa)"},
    {id: 1, idTrack: 11, name : "Game", nameTrack : "Need for Speed Rivals",cover: "image/game/Need-for-Speed-Rivals.jpg", path : "music/game/4. Pompeii (Kat Krazy Remix).mp3", layersColor: "linear-gradient(to bottom,#dbdbdb ,#504f4f, #3b3b3b)"},
    {id: 1, idTrack: 12, name : "Game", nameTrack : "a Plaguetale",cover: "image/game/plaguetale.jpg", path : "music/game/01. A Plague Tale Requiem (feat. Estonian Philharmonic Chamber Choir & Eric-Maria Couturier).mp3", layersColor: "linear-gradient(to bottom,#dbdbdb ,#4e4e4e, #535353)"},
    {id: 1, idTrack: 13, name : "Game", nameTrack : "red Dead Redemption 2",cover: "image/game/Red Dead Redemption2.jpg", path : "music/game/rdr2.mp3", layersColor: "linear-gradient(to bottom,#f1f1bf ,#fffec6, #df8653)"},
    {id: 1, idTrack: 14, name : "Game", nameTrack : "Resident Evil 2",cover: "image/game/resident evil remake 2.jpg", path : "music/game/Cody_Matthew_Johnson_-Saudade_feat__Shim_Gratomic.com.mp3", layersColor: "linear-gradient(to right,#171c2c ,#300d0d, #363641)"},
    {id: 1, idTrack: 15, name : "Game", nameTrack : "street Fighter",cover: "image/game/street fighter.jpg", path : "music/game/1-01. NOT ON THE SIDELINES.mp3", layersColor: " linear-gradient(to bottom,#3a60db ,#f79e62, #245aac)"},
    {id: 1, idTrack: 16, name : "Game", nameTrack : "The Last of Us",cover: "image/game/tlou1.jpg", path : "music/game/Gustavo Santaolalla - The Last of Us.mp3", layersColor: "linear-gradient(to bottom,#c96523 ,#f7e162, #534208)"},
    {id: 1, idTrack: 17, name : "Game", nameTrack : "The Last of Us Part 2",cover: "image/game/tloup2.png", path : "music/game/last of us p2.mp3", layersColor: "linear-gradient(to bottom,#2c2a2a ,#25251f, #1c212b)"},
    {id: 1, idTrack: 18, name : "Game", nameTrack : "Vampire Survivors",cover: "image/game/Vampire_Survivors_key_art.jpg", path : "music/game/Vampire Survivors (2022).mp3", layersColor: "linear-gradient(to bottom,#310404 ,#262927, #472424)"},
    {id: 1, idTrack: 19, name : "Game", nameTrack : "witcher 3",cover: "image/game/witcher3.jpg", path : "music/game/موسیقی متن ویچر 3 وایلد هانت ویکی ویچر فارسی.mp3", layersColor: "linear-gradient(to right,#5c5b5b ,#727272, #ccafaf)"},
    {id: 1, idTrack: 20, name : "Game", nameTrack : " Zelda",cover: "image/game/zelda-breath-of-the-wild.jpg", path : "music/game/zelda.mp3", layersColor: "linear-gradient(to bottom,#f1d178 ,#79d3ce, #416331)"},

      // Rock
      {id: 2, idTrack: 21, name : "Rock", nameTrack : "Human",cover: "image/rock/Human.jpg", path: "music/rock/human.mp3", layersColor: " linear-gradient(to right,#634e33 ,#6e3b00b9, #634e33)"},
      {id: 2, idTrack: 22, name : "Rock", nameTrack : "Carnival Of Rust",cover: "image/rock/carnival of rust.jpg", path: "music/rock/carnival of rust.mp3", layersColor: "linear-gradient(to bottom,#292218 ,#000216b9, #000322)"},
      {id: 2, idTrack: 23, name : "Rock", nameTrack : "Forget Me Knot",cover: "image/rock/forget me knot.jpg", path: "music/rock/forget me knot.mp3", layersColor: "linear-gradient(to right,#2e210e ,#69563a, #a8a8a8)"},
      {id: 2, idTrack: 24, name : "Rock", nameTrack : "Enemy",cover: "image/rock/imagine-dragons-and-jid-enemy.jpg", path: "music/rock/imagine dragons - enemy (320).mp3", layersColor: "linear-gradient(to right,#c4c4c4 ,#5e5e5e, #4b3558)"},
      {id: 2, idTrack: 25, name : "Rock", nameTrack : "Natural",cover: "image/rock/ab67616d0000b273da6f73a25f4c79d0e6b4a8bd.jpg", path: "music/rock/imagine_dragons_-_natural_audio-9bpfyhhv7-c.mp3", layersColor: "linear-gradient(to bottom,#00393b ,#003b2c, #073b00)"},
      {id: 2, idTrack: 26, name : "Rock", nameTrack : "bones",cover: "image/rock/bones.jpg", path: "music/rock/imagine_dragons_-_bones.mp3", layersColor: "linear-gradient(to bottom,#bebebe ,#acacac, #bebebe)"},
      {id: 2, idTrack: 27, name : "Rock", nameTrack : "Thunder",cover: "image/rock/Imagine_Dragons_Thunder.jpg", path: "music/rock/Imagine-Dragons thunder.mp3", layersColor: "linear-gradient(to bottom,#d0a2d4 ,#c491bb, #d0a2d4)"},
      {id: 2, idTrack: 28, name : "Rock", nameTrack : "Popular Monster",cover: "image/rock/Popular Monster.jpg", path: "music/rock/Popular Monster.mp3", layersColor: "linear-gradient(to bottom,#292929 ,#2e1818, #292929)"},
      {id: 2, idTrack: 29, name : "Rock", nameTrack : "Saving Us",cover: "image/rock/serj tankian saving us.jpg", path: "music/rock/serj_tankian_-_saving_us.mp3", layersColor: "linear-gradient(to bottom,#00203a ,#3a1a00, #00203a)"},
      {id: 2, idTrack: 30, name : "Rock", nameTrack : "Sky Is Over",cover: "image/rock/serj tankian sky is over.jpg", path: "music/rock/serj_tankian_-_sky_is_over_my-free-mp3s.com_.mp3", layersColor: "linear-gradient(to right,#69482c ,#524e49, #69482c)"},
      {id: 2, idTrack: 31, name : "Rock", nameTrack : "Harakiri",cover: "image/rock/serj tankian harakiri.jpg", path: "music/rock/serj_tankian_-harakiri.mp3", layersColor: "linear-gradient(to right,#0f0f0f ,#1d0d00, #00101d)"},
      {id: 2, idTrack: 32, name : "Rock", nameTrack : "The Rains Of Castamere",cover: "image/rock/serj tankian ramin djawadi.jpg", path: "music/rock/serj_tankian_ramin_djawadi_-_the_rains_of_castamere.mp3", layersColor: "linear-gradient(to right,#69482c ,#3f3f3f, #69482c)"},

    // movie
    {id: 3, idTrack: 33, name : "movie", nameTrack : "Braveheart",cover: "image/music film/braveheart.jpg", path : "music/music film/James-Horner-Braveheart1.mp3", layersColor: "linear-gradient(to bottom,#6bcdeb ,#c7c7c7, #5ea0b4)"},
    {id: 3, idTrack: 34, name : "movie", nameTrack : "Gladiator",cover: "image/music film/gladiator.jpg", path : "music/music film/Hans-Zimmer-Gladiator1.mp3", layersColor: "linear-gradient(to right,#607379 ,#c7c7c7, #465f61)"},
    {id: 3, idTrack: 35, name : "movie", nameTrack : "Interstellar",cover: "image/music film/Interstellar.jpeg", path : "music/music film/Hans-Zimmer-S.T.A.Y.mp3", layersColor: " linear-gradient(to bottom,#607379 ,#c7c7c7, #465f61)"},
    {id: 3, idTrack: 36, name : "movie", nameTrack : "Leon The Professional",cover: "image/music film/leon-the-professional.jpg", path : "music/music film/Éric-Serra-The-Professional1.mp3", layersColor: "linear-gradient(to bottom,#070707 ,#1a1a1a, #070707)"},
    {id: 3, idTrack: 37, name : "movie", nameTrack : "Papillon",cover: "image/music film/Papillon.png", path : "music/music film/Jerry-Goldsmith-Papillon1.mp3", layersColor: "linear-gradient(to bottom,#506ce6 ,#ddd99c, #8a7155)"},
    {id: 3, idTrack: 38, name : "movie", nameTrack : "Rocky",cover: "image/music film/rocky.jpg", path : "music/music film/Bill-Conti-Rocky1.mp3", layersColor: "linear-gradient(to bottom,#0f0f0f ,#3a3a3a, #0f0f0f)"},
    {id: 3, idTrack: 39, name : "movie", nameTrack : "The Dark Knight",cover: "image/music film/the dark knight.jpg", path : "music/music film/The-Dark-Knight-Ending- plaza.ir.mp3", layersColor: "linear-gradient(to bottom,#6a78f1 ,#262b3d, #1b1a27)"},
    {id: 3, idTrack: 40, name : "movie", nameTrack : "The Good The Bad And The Ugly",cover: "image/music film/the good the bad and the ugly.jpg", path : "music/music film/ino-morikone-the-Good,-the-Bad,-and-the-Ugly1.mp3", layersColor: " linear-gradient(to bottom,#382b1f ,#565740, #271c16)"},
    {id: 3, idTrack: 41, name : "movie", nameTrack : "The Lord Of Ring",cover: "image/music film/the lord of ring.jpg", path : "music/music film/The-Lord-of-the-rings-Howard-Leslie-Shore1.mp3", layersColor: "linear-gradient(to bottom,#dad26a ,#917a5f, #858264)"},
    {id: 3, idTrack: 42, name : "movie", nameTrack : "The Godfather",cover: "image/music film/The-Godfather.jpg", path : "music/music film/4s0b_nino_rota_-_love_theme_from_the_godfather_-_plaza.ir.mp3", layersColor: "linear-gradient(to right,#0f0f0f ,#2c2c25, #070707)"},

     //rap & HipHop
     {id: 4, idTrack: 43, name : "rap & HipHop", nameTrack : "Drop It Like Its Hot Tim Gunter",cover: "image/rap & hiphop/_Snoop_Dogg_Drop It Like Its Hot Tim Gunter.jpg", path: "music/rap & hiphop/Tim_Gunter_-_Snoop_Dogg_-_Drop_It_Like_Its_Hot_Tim_Gunter.mp3", layersColor: "linear-gradient(to right,#0f0f0f ,#20201f, #070707)"},
     {id: 4, idTrack: 44, name : "rap & HipHop", nameTrack : "Beautiful",cover: "image/rap & hiphop/Beautiful.jpg", path: "music/rap & hiphop/24. Beautiful.mp3", layersColor: "linear-gradient(to right,#303030 ,#d1d1d1, #303030)"},
     {id: 4, idTrack: 45, name : "rap & HipHop", nameTrack : "Godzilla",cover: "image/rap & hiphop/Eminem_-_Music_to_Be_Murdered_By.png", path: "music/rap & hiphop/Eminem - Godzilla feat Juice WRLD.mp3", layersColor: "linear-gradient(to right,#fd6060 ,#eb4040, #740606)"},
     {id: 4, idTrack: 46, name : "rap & HipHop", nameTrack : "Stan",cover: "image/rap & hiphop/eminemstan.png", path: "music/rap & hiphop/eminem_stan 128.mp3", layersColor: "linear-gradient(to right,#423324 ,#3a3027, #221b14)"},
     {id: 4, idTrack: 47, name : "rap & HipHop", nameTrack : "Venom",cover: "image/rap & hiphop/Eminem'Venom'.jpg", path: "music/rap & hiphop/03. Venom - Music From The Motion Picture.mp3", layersColor: "linear-gradient(to right,#000d31 ,#020218, #060d2b)"},
     {id: 4, idTrack: 48, name : "rap & HipHop", nameTrack : "Last One Standing",cover: "image/rap & hiphop/Last One Standing (feat. Polo G_ Mozzy _ Eminem) - From Venom_ Let There Be Carnage.jpg", path: "music/rap & hiphop/36. Last One Standing (feat. Polo G_ Mozzy _ Eminem) - From Venom_ Let There Be Carnage.mp3", layersColor: "linear-gradient(to right,#181818 ,#241717, #270202)"},
     {id: 4, idTrack: 49, name : "rap & HipHop", nameTrack : "Mockingbird",cover: "image/rap & hiphop/Mockingbird.jpg", path: "music/rap & hiphop/Eminem - Mockingbird.mp3", layersColor: " linear-gradient(to right,#58739c ,#75a9b9, #58739c)"},
     {id: 4, idTrack: 50, name : "rap & HipHop", nameTrack : "Rap God",cover: "image/rap & hiphop/Rap God.jpg", path: "music/rap & hiphop/Rap God.mp3", layersColor: "linear-gradient(to right,#ae71bd ,#906fb4, #955da3)"},
     {id: 4, idTrack: 51, name : "rap & HipHop", nameTrack : "BRUNO MARS",cover: "image/rap & hiphop/SNOOP DOGG ft WIZ KHALIFA ft BRUNO MARS.jpg", path: "music/rap & hiphop/Young_ Wild and Free - SNOOP DOGG ft WIZ KHALIFA ft BRUNO MARS.mp3", layersColor: " linear-gradient(to right,#031a04 ,#6fb478, #031a04)"},
     {id: 4, idTrack: 52, name : "rap & HipHop", nameTrack : "Vato",cover: "image/rap & hiphop/Snoop_Dogg Vato.jpg", path: "music/rap & hiphop/Snoop_Dogg_-_Vato_Official_Music_Video.mp3", layersColor: "linear-gradient(to right,#77edf1 ,#567c76, #747474)"},
     {id: 4, idTrack: 53, name : "rap & HipHop", nameTrack : "Till I Collapse",cover: "image/rap & hiphop/Till I Collapse.jpg", path: "music/rap & hiphop/01. Till I Collapse.mp3", layersColor: "linear-gradient(to right,#310c0c ,#000000, #310c0c)"},
     {id: 4, idTrack: 54, name : "rap & HipHop", nameTrack : "Without Me",cover: "image/rap & hiphop/Without Me.png", path: "music/rap & hiphop/07. Without Me.mp3", layersColor: "linear-gradient(to right,#922020 ,#ff1212, #922020)"},
     {id: 4, idTrack: 55, name : "rap & HipHop", nameTrack : "Everybody Dies In Their Nightmares",cover: "image/rap & hiphop/XXXTENTACION - Everybody Dies In Their Nightmares.jpg", path: "music/rap & hiphop/03.XXXTENTACION - Everybody Dies In Their Nightmares.mp3", layersColor: "linear-gradient(to right,#c4c4c4 ,#bdbdbd, #c4c4c4)"},
 
     //Pop
     {id: 5, idTrack: 56, name : "pop", nameTrack : "Let Me Down Slowly ",cover: "image/pop/Alec-Benjamin.jpg", path: "music/pop/alec_benjamin_let_me down slowly 128.mp3", layersColor: "linear-gradient(to right,#eba556 ,#71edf1, #91e9e1)"},
     {id: 5, idTrack: 57, name : "pop", nameTrack : "Balenciaga",cover: "image/pop/Balenciaga.jpg", path: "music/pop/Balenciaga - T3NZU (128).mp3", layersColor: "linear-gradient(to right,#141414 ,#1f1f1f, #141414)"},
     {id: 5, idTrack: 58, name : "pop", nameTrack : "Callin' U",cover: "image/pop/Callin' U.jpg", path: "music/pop/Outlandish - Callin' U.mp3", layersColor: "linear-gradient(to right,#554425 ,#b99c4b, #776138)"},
     {id: 5, idTrack: 59, name : "pop", nameTrack : "2Step",cover: "image/pop/Ed_Sheeran 2step.png", path: "music/pop/2step.mp3", layersColor: "linear-gradient(to right,#f13838 ,#f5a3a3, #f13838)"},
     {id: 5, idTrack: 60, name : "pop", nameTrack : "Don t",cover: "image/pop/Ed_Sheeran Don't.png", path: "music/pop/ed-sheeran-dont.mp3", layersColor: "linear-gradient(to right,#2cec7c ,#2cec7c, #2cec7c)"},
     {id: 5, idTrack: 61, name : "pop", nameTrack : "Shivers",cover: "image/pop/Ed_Sheeran Shivers.png", path: "music/pop/ed-sheeran-shivers.mp3", layersColor: "linear-gradient(to right,#eb2424 ,#cfec2c, #eb2424)"},
     {id: 5, idTrack: 62, name : "pop", nameTrack : "Ego",cover: "image/pop/ego.jpg", path: "music/pop/willy_william_ego.mp3", layersColor: "linear-gradient(to right,#7c7c7c ,#707070, #7c7c7c)"},
     {id: 5, idTrack: 63, name : "pop", nameTrack : "Ghost",cover: "image/pop/ghost.jpg", path: "music/pop/Alan-Walker-Ghost-(Ft-Aura).mp3", layersColor: "linear-gradient(to right,#62a1a3 ,#b3ad8e, #597c7e)"},
     {id: 5, idTrack: 64, name : "pop", nameTrack : "It Ain t Me",cover: "image/pop/Kygo Selena Gomez.jpg", path: "music/pop/Kygo_Selena_Gomez_It_Ain_t_Me.mp3", layersColor: "linear-gradient(to right,#141414 ,#26112c, #191935)"},
     {id: 5, idTrack: 65, name : "pop", nameTrack : "Living Life In The Night",cover: "image/pop/Living Life In The Night.jpg", path: "music/pop/T3nzu - Living Life In The Night - remix.mp3", layersColor: "linear-gradient(to right,#141414 ,#2b2b2b, #353535)"},
     {id: 5, idTrack: 66, name : "pop", nameTrack : "Lose Yourself Remix",cover: "image/pop/Lose Yourself Remix.jpg", path: "music/pop/Eminem - Lose Yourself Remix.mp3", layersColor: "linear-gradient(to right,#718097 ,#485e70, #606a85)"},
     {id: 5, idTrack: 67, name : "pop", nameTrack : "Moonlight",cover: "image/pop/moonlight.jpg", path: "music/pop/Anbroski-Moonlight-Remix.mp3", layersColor: "linear-gradient(to right,#141414 ,#23282c, #1a1a1a)"},
     {id: 5, idTrack: 68, name : "pop", nameTrack : "Runaway",cover: "image/pop/runaway.jpg", path: "music/pop/aurora_runaway.mp3", layersColor: "linear-gradient(to right,#2c231c ,#4d3f35, #312822)"},
     {id: 5, idTrack: 69, name : "pop", nameTrack : "Stranger Things (Alan Walker)",cover: "image/pop/Stranger Things (feat. OneRepublic) Alan Walker Remix.jpg", path: "music/pop/Stranger Things (feat. OneRepublic) - Alan Walker Remix.mp3", layersColor: "linear-gradient(to right,#eec0e8 ,#c1ece9, #e2b8a5)"},
     {id: 5, idTrack: 70, name : "pop", nameTrack : "Changes",cover: "image/pop/xxxtentacion.jpg", path: "music/pop/XXXTENTACION20-20Changes20remix.mp3", layersColor: "linear-gradient(to right,#9c9dd8 ,#b4b4b4, #cecece)"},
 
     //Classic
     {id: 6, idTrack: 71, name : "Classic", nameTrack : "THE ARRIVAL OF THE QUEEN OF SHEBA",cover: "image/classic/classic.jpg", path: "music/classic/01. HANDEL- THE ARRIVAL OF THE QUEEN OF SHEBA (Solomon).mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},
     {id: 6, idTrack: 72, name : "Classic", nameTrack : "LE QUATTRO STAGIONI- i. Allegro",cover: "image/classic/classic.jpg", path: "music/classic/02. VIVALDI- LE QUATTRO STAGIONI- i. Allegro (Concerto No. 1 in E 'La primavera').mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},
     {id: 6, idTrack: 73, name : "Classic", nameTrack : "TOCCATA IN D MINOR",cover: "image/classic/classic.jpg", path: "music/classic/03. J.S. BACH- TOCCATA IN D MINOR BWV565.mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},
     {id: 6, idTrack: 74, name : "Classic", nameTrack : "HORN CONCERTO NO.4 IN E FLAT",cover: "image/classic/classic.jpg", path: "music/classic/04. MOZART- HORN CONCERTO NO.4 IN E FLAT K495- iii. Rondo (Allegro vivace).mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},
     {id: 6, idTrack: 75, name : "Classic", nameTrack : "SYMPHONY NO.5 IN C MINOR",cover: "image/classic/classic.jpg", path: "music/classic/05. BEETHOVEN- SYMPHONY NO.5 IN C MINOR OP.67- i. Allegro con brio.mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},
     {id: 6, idTrack: 76, name : "Classic", nameTrack : "TCHAIKOVSKY- 1812 OVERTURE",cover: "image/classic/classic.jpg", path: "music/classic/06. TCHAIKOVSKY- 1812 OVERTURE (conclusion).mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},
     {id: 6, idTrack: 77, name : "Classic", nameTrack : "PIANO CONCERTO IN A MINOR",cover: "image/classic/classic.jpg", path: "music/classic/08. GRIEG- PIANO CONCERTO IN A MINOR OP.16- i. Allegro molto moderato.mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},
     {id: 6, idTrack: 78, name : "Classic", nameTrack : "ALLA MARCIA (Karelia Suite)",cover: "image/classic/classic.jpg", path: "music/classic/09. SIBELIUS- ALLA MARCIA (Karelia Suite, Op.11-3).mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},
     {id: 6, idTrack: 79, name : "Classic", nameTrack : "PIANO CONCERTO NO.3 IN D MINOR",cover: "image/classic/classic.jpg", path: "music/classic/17. RACHMANINOV- PIANO CONCERTO NO.3 IN D MINOR- i. Allegro ma non tanto.mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},
     {id: 6, idTrack: 80, name : "Classic", nameTrack : "Experience",cover: "image/classic/classic.jpg", path: "music/classic/12_-_experience.mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},

     //selected
     {id: 7, idTrack: 81, name : "selected", nameTrack : "Saving Us",cover: "image/rock/serj tankian saving us.jpg", path: "music/rock/serj_tankian_-_saving_us.mp3", layersColor: "linear-gradient(to bottom,#00203a ,#3a1a00, #00203a)"},
     {id: 7, idTrack: 82, name: "selected", nameTrack : "The Last of Us", cover: "image/game/tlou1.jpg", path : "music/game/Gustavo Santaolalla - The Last of Us.mp3", layersColor: "linear-gradient(to bottom,#c96523 ,#f7e162, #534208)"},
     {id: 7, idTrack: 83, name: "selected", nameTrack : "interstellar", cover: "image/music film/Interstellar.jpeg", path : "music/music film/Hans-Zimmer-S.T.A.Y.mp3", layersColor: "linear-gradient(to bottom,#607379 ,#c7c7c7, #465f61)"},
     {id: 7, idTrack: 84, name: "selected", nameTrack : "shivers", cover: "image/pop/Ed_Sheeran Shivers.png", path: "music/pop/ed-sheeran-shivers.mp3", layersColor: "linear-gradient(to right,#eb2424 ,#cfec2c, #eb2424)"},
     {id: 7, idTrack: 85, name: "selected", nameTrack : "Godzilla ", cover: "image/rap & hiphop/Eminem_-_Music_to_Be_Murdered_By.png", path: "music/rap & hiphop/Eminem - Godzilla feat Juice WRLD.mp3", layersColor: "linear-gradient(to right,#fd6060 ,#eb4040, #740606)"},
     {id: 7, idTrack: 86, name: "selected", nameTrack : "natural", cover: "image/rock/ab67616d0000b273da6f73a25f4c79d0e6b4a8bd.jpg", path: "music/rock/imagine_dragons_-_natural_audio-9bpfyhhv7-c.mp3", layersColor: "linear-gradient(to bottom,#00393b ,#003b2c, #073b00)"},
     {id: 7, idTrack: 87, name: "selected", nameTrack : "Beautiful", cover: "image/rap & hiphop/Beautiful.jpg", path: "music/rap & hiphop/24. Beautiful.mp3", layersColor: "linear-gradient(to right,#303030 ,#d1d1d1, #303030)"},
     {id: 7, idTrack: 88, name : "selected", nameTrack : "dark Souls 1",cover: "image/game/ds1.jpg", path : "music/game/22-Gwyn-Lord-of-Cinder.mp3", layersColor: "linear-gradient(to right,#752e12 ,#868686, #6e6e5afa)"},
     {id: 7, idTrack: 89, name: "selected", nameTrack : "experience", cover: "image/classic/classic.jpg", path: "music/classic/12_-_experience.mp3", layersColor: "linear-gradient(to right,#ececc1 ,#ceb29c, #c8c9a9)"},
     {id: 7, idTrack: 90, name : "selected", nameTrack : "Need for Speed Rivals",cover: "image/game/Need-for-Speed-Rivals.jpg", path : "music/game/4. Pompeii (Kat Krazy Remix).mp3", layersColor: "linear-gradient(to bottom,#dbdbdb ,#504f4f, #3b3b3b)"},
     {id: 7, idTrack: 91, name : "selected", nameTrack : "Popular Monster",cover: "image/rock/Popular Monster.jpg", path: "music/rock/Popular Monster.mp3", layersColor: "linear-gradient(to bottom,#292929 ,#2e1818, #292929)"},
     {id: 7, idTrack: 92, name : "selected", nameTrack : "Leon The Professional",cover: "image/music film/leon-the-professional.jpg", path : "music/music film/Éric-Serra-The-Professional1.mp3", layersColor: "linear-gradient(to bottom,#070707 ,#1a1a1a, #070707)"},
    
     //trends
     {id: 8, idTrack: 93, name: "trends", nameTrack: "The Godfather", cover: "image/music film/The-Godfather.jpg", path : "music/music film/4s0b_nino_rota_-_love_theme_from_the_godfather_-_plaza.ir.mp3", layersColor: "linear-gradient(to right,#0f0f0f ,#2c2c25, #070707)"},
     {id: 8, idTrack: 94, name: "trends", nameTrack: "ego", cover: "image/pop/ego.jpg", path: "music/pop/willy_william_ego.mp3", layersColor: "linear-gradient(to right,#7c7c7c ,#707070, #7c7c7c)"},
     {id: 8, idTrack: 95, name: "trends", nameTrack: "Living Life In ...", cover: "image/pop/Living Life In The Night.jpg", path: "music/pop/T3nzu - Living Life In The Night - remix.mp3", layersColor: "linear-gradient(to right,#141414 ,#2b2b2b, #353535)"},
     {id: 8, idTrack: 96, name: "trends", nameTrack: "runaway", cover: "image/pop/runaway.jpg", path: "music/pop/aurora_runaway.mp3", layersColor: "linear-gradient(to right,#2c231c ,#4d3f35, #312822)"},
     {id: 8, idTrack: 97, name: "trends", nameTrack: "Rap God ", cover: "image/rap & hiphop/Rap God.jpg", path: "music/rap & hiphop/Rap God.mp3", layersColor: "linear-gradient(to right,#ae71bd ,#906fb4, #955da3)"},
     {id: 8, idTrack: 98, name: "trends", nameTrack: "bones", cover: "image/rock/bones.jpg", path: "music/rock/imagine_dragons_-_bones.mp3", layersColor: "linear-gradient(to bottom,#bebebe ,#acacac, #bebebe)"},
     {id: 8, idTrack: 99, name: "trends", nameTrack: "enemy", cover: "image/rock/imagine-dragons-and-jid-enemy.jpg", path: "music/rock/imagine dragons - enemy (320).mp3", layersColor: "linear-gradient(to right,#c4c4c4 ,#5e5e5e, #4b3558)"},
     {id: 8, idTrack: 100, name : "trends", nameTrack : "Lose Yourself Remix",cover: "image/pop/Lose Yourself Remix.jpg", path: "music/pop/Eminem - Lose Yourself Remix.mp3", layersColor: "linear-gradient(to right,#718097 ,#485e70, #606a85)"},
     {id: 8, idTrack: 101, name : "trends", nameTrack : "street Fighter",cover: "image/game/street fighter.jpg", path : "music/game/1-01. NOT ON THE SIDELINES.mp3", layersColor: " linear-gradient(to bottom,#3a60db ,#f79e62, #245aac)"},
     {id: 8, idTrack: 102, name : "trends", nameTrack : "Human",cover: "image/rock/Human.jpg", path: "music/rock/human.mp3", layersColor: " linear-gradient(to right,#634e33 ,#6e3b00b9, #634e33)"},
     {id: 8, idTrack: 103, name : "trends", nameTrack : "Moonlight",cover: "image/pop/moonlight.jpg", path: "music/pop/Anbroski-Moonlight-Remix.mp3", layersColor: "linear-gradient(to right,#141414 ,#23282c, #1a1a1a)"},
     {id: 8, idTrack: 104, name : "trends", nameTrack : "assassins Creed 2",cover: "image/game/assassins creed2.JPG", path : "music/game/Jesper Kyd - Ezios Family.mp3", layersColor: "linear-gradient(to bottom,#979204 ,#8f0606d5,#4a4b0b)"},
];


let mianUser = allmusic.find(function (song) {
    return Number(userIDParams) === song.idTrack
})


if (mianUser) {
    picMusic.setAttribute('src', mianUser.cover)
    musicName.innerHTML = mianUser.nameTrack
    categoryMusics.innerHTML = mianUser.name
    music.src = mianUser.path
    titleDocument.innerHTML = mianUser.nameTrack
    boxMusic.style.background = mianUser.layersColor
} else {
    alert("Page Not Found :(")
    location.href = 'file:///C:/Users/user/Desktop/(music-player)blue%20project/index-player.html'
}

document.body.addEventListener('keyup', function (event) {
  if (event.code === "MediaPlayPause" && isPlaying === false) {
    isPlaying = true;
    playPauseIcon.classList.replace("fa-play", "fa-pause");
    musicName.style.color = "#2dce6b"
    music.play();
  } else if (event.code === "MediaPlayPause" && isPlaying === true) {
    isPlaying = false;
    playPauseIcon.classList.replace("fa-pause", "fa-play");
    musicName.style.color = "#ce2d2d"
    music.pause();
  }
  if (event.code === "MediaTrackNext") {
    songIndex++;
    location = "file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id=" + (mianUser.idTrack + 1)
    if (mianUser.idTrack > allmusic.length - 1) {
      songIndex = 0;
      location = "file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id=" + (mianUser.idTrack - (allmusic.length -1))
    }
    playSong()
  }else if (event.code === "MediaTrackPrevious") {
    songIndex--;
    location = "file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id=" + (mianUser.idTrack - 1) 
    if (mianUser.idTrack == 1) {
      songIndex = allmusic.length
      mianUser.idTrack = allmusic.length
      location = "file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id=" + (mianUser.idTrack)
    }
    playSong()
  }
  else if (event.code === "MediaStop") {
    music.currentTime = 0;
    playPauseIcon.classList.replace("fa-pause", "fa-play");
    musicName.style.color = "#ce2d2d"
  }
})

//play
function playSong() {
    isPlaying = true;
    playPauseIcon.classList.replace("fa-play", "fa-pause");
    musicName.style.color = "#2dce6b"
    music.play();
  }
  
  // Pause
  function pauseSong() {
    isPlaying = false;
    playPauseIcon.classList.replace("fa-pause", "fa-play");
    musicName.style.color = "#ce2d2d"
    music.pause();
  }
  
playPauseBtn.addEventListener('click' ,function () {
    if (isPlaying) {
        pauseSong()
      } else {
        playSong()
      }
})



// Previous Song
function prevSong() {
  songIndex--;
  location = "file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id=" + (mianUser.idTrack - 1) 
  if (mianUser.idTrack == 1) {
    songIndex = allmusic.length
    mianUser.idTrack = allmusic.length
    location = "file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id=" + (mianUser.idTrack)
  }
  playSong()
}

// Next Song
function nextSong() {
  songIndex++;
  location = "file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id=" + (mianUser.idTrack + 1)
  if (mianUser.idTrack > allmusic.length - 1) {
    songIndex = 0;
    location = "file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id=" + (mianUser.idTrack - (allmusic.length -1))
  }
  playSong()
}


//gif load (Only until the site is fully ready)
window.addEventListener("load" , function () {
  loaderGif.classList += " hidden"
})


// On Load - Select First Song
function updateProgressBar(e) {
    const duration = e.srcElement.duration;
    const currentTime = e.srcElement.currentTime;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = progressPercent + "%";
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = durationMinutes + ":" + durationSeconds;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
}

function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = music.duration;
  music.currentTime = (clickX / width) * duration;
}

backToTheHomePageBtn.addEventListener("click", function () {
  location.href = 'file:///C:/Users/user/Desktop/(music-player)blue%20project/index-player.html'
})


progressContainer.addEventListener("click", setProgressBar);
music.addEventListener("timeupdate", updateProgressBar);

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);