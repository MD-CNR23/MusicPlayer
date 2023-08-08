 // codes :))

let $ = document
let i_Elem = $.querySelectorAll('.icon-menu')
const containerBox = $.querySelector('.container-box')
let loaderGif = $.getElementById("loader")
let selected = $.querySelector('.selected')
let trends = $.querySelector(".trends")
let seeMore = $.querySelector('#see-More')
let containerHeader = $.querySelector(".container-header")
let boxMenu = $.querySelector(".box-menu")
let colorBox = $.querySelectorAll('.color-box')

const prev = $.querySelector(".prev");
const next = $.querySelector(".next");

const prev2 = $.querySelector(".p2");
const next2= $.querySelector(".n2");

const prev3 = $.querySelector(".p3");
const next3 = $.querySelector(".n3");

let imge = $.querySelector(".img-slider")
let imge2 = $.querySelector(".img-slider-2")
let imge3 = $.querySelector(".img-slider-3")
let arrayimg = ["image/artists/trends.jpg", "image/artists/eminem.jpg", "image/artists/the-witcher.jpg"]
let arrayimg2 = ['image/artists/Serj tankian.jpg', 'image/artists/interstellar.jpg', 'image/artists/edSheeran.jpg']
let arrayimg3 = ['image/artists/selected.png', 'image/artists/classic.jpg', 'image/artists/trends.jpg']

let index = 0;
let index2 = 0
let index3 = 0

let allMusicsStyles = [
    {id: 1, name : "Game", cover: "image/artists/the-witcher.jpg"},
    {id: 2, name : "Rock", cover: "image/artists/Serj tankian.jpg"},
    {id: 3, name : "Movie", cover: "image/artists/interstellar.jpg"},
    {id: 4, name : "rap & HipHap", cover: "image/artists/eminem.jpg"},
    {id: 5, name : "Pop", cover: "image/artists/edSheeran.jpg"},
    {id: 6, name : "Classic", cover: "image/artists/classic.jpg"}
];

let selectedMusic = [
    {id: 7, idTrack: 81,category: "selected", name : "Saving Us",cover: "image/rock/serj tankian saving us.jpg"},
    {id: 7,idTrack: 82, category: "selected", name : "The Last of Us", cover: "image/game/tlou1.jpg"},
    {id: 7,idTrack: 83, category: "selected", name : "interstellar", cover: "image/music film/Interstellar.jpeg"},
    {id: 7,idTrack: 84, category: "selected", name : "shivers", cover: "image/pop/Ed_Sheeran Shivers.png"},
    {id: 7,idTrack: 85, category: "selected", name : "Godzilla ", cover: "image/rap & hiphop/Eminem_-_Music_to_Be_Murdered_By.png"},
    {id: 7,idTrack: 86, category: "selected", name : "natural", cover: "image/rock/ab67616d0000b273da6f73a25f4c79d0e6b4a8bd.jpg"},
    {id: 7,idTrack: 87, category: "selected", name : "Beautiful", cover: "image/rap & hiphop/Beautiful.jpg"}
]

let trendsMusic = [
    {id: 8,idTrack: 93, category: "trends", name : "The Godfather", cover: "image/music film/The-Godfather.jpg"},
    {id: 8,idTrack: 94, category: "trends", name : "ego", cover: "image/pop/ego.jpg"},
    {id: 8,idTrack: 95, category: "trends", name : "Living Life In ...", cover: "image/pop/Living Life In The Night.jpg"},
    {id: 8,idTrack: 96, category: "trends", name : "runaway", cover: "image/pop/runaway.jpg"},
    {id: 8,idTrack: 97, category: "trends", name : "Rap God ", cover: "image/rap & hiphop/Rap God.jpg"},
    {id: 8,idTrack: 98, category: "trends", name : "bones", cover: "image/rock/bones.jpg"},
    {id: 8,idTrack: 99, category: "trends", name : "enemy", cover: "image/rock/imagine-dragons-and-jid-enemy.jpg"}
]

selectedMusic.forEach(function (musicselected) {
    selected.insertAdjacentHTML('afterbegin', '<div class="music-selected float-start"><img src=" ' + musicselected.cover + ' " alt="" id="cover-back"><button class="button-play-title btn-play-selected"><a href="file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id=' + musicselected.idTrack + '"><i class="fas fa-play play-icon-select"></i></a></button><p id="name-music"> ' + musicselected.name + ' </p></div>')
})


trendsMusic.forEach(function (musictrends) {
    trends.insertAdjacentHTML('afterbegin', '<div class="music-trends float-start"><img src=" ' + musictrends.cover + ' " alt="" id="cover-back-trends"><button class="button-play-title btn-play-selected"><a href="file:///C:/Users/user/Desktop/(music-player)blue%20project/music-view-title.html?id=' + musictrends.idTrack + '"><i class="fas fa-play play-icon-trends"></i></a></button><p id="name-music"> ' + musictrends.name + ' </p></div>')
})


    i_Elem.forEach(function (menuItem) {
        menuItem.addEventListener('mouseenter', function () {
            setInterval(function () {
                menuItem.classList.add('move-icon')
            }, 100);
            menuItem.classList.remove('move-icon')
        })
    })

allMusicsStyles.forEach(function (style) {
    containerBox.insertAdjacentHTML('afterbegin', '<div class="col-md-3 col-sm-12 float-start ratio-4×3 pop-box card"><center><div class="capture">' + style.name + '</div></center><hr><img src=" ' + style.cover + ' " class="img-cover-game col-md-12 float-start ratio-4×3 card" alt="game music title"><div class="col-md-3 col-sm-12 float-start ratio-4×3"><button class="button-play-title"><a href="file:///C:/Users/user/Desktop/(music-player)blue%20project/music-list.html?id= ' + style.id + '"><i class="fas fa-play play-icon"></i></a></button></div></div>')
}) 


window.addEventListener("load" , function () {
    loaderGif.classList += " hidden"
})


//Change Color Theme And Connect To Local Storage

colorBox.forEach(function (color) {
    color.addEventListener("click", function (event) {
        let colorbtn = event.target.dataset.color
        setIntoLocalStorage(colorbtn)    
    })
})

function setIntoLocalStorage (colorTheme) {
    localStorage.setItem('colorbtn',  JSON.stringify(colorTheme))
    colorsGenerator(colorTheme)
}

function colorsGenerator (colorTheme) {
    document.documentElement.style.setProperty("--background-theme", colorTheme)
}

function getcolorsFromLocalStorage () {
    let localStorageColors = localStorage.getItem('colorbtn')

    if (localStorageColors) {
        colorbtn = JSON.parse(localStorageColors)
        colorsGenerator(colorbtn)
    }
}

window.addEventListener('load', getcolorsFromLocalStorage)


//Showcase
//1
function prevItem() {
    index--
    if (index < 0) {
        index = arrayimg.length - 1
    }
   imge.setAttribute('src', arrayimg[index])
}

function nextItem() {
  index++;
  if (index > arrayimg.length - 1) {
    index = 0;
  }
  imge.setAttribute('src', arrayimg[index])
}

//2
function prevItem2() {
    index2--
    if (index2 < 0) {
        index2 = arrayimg2.length - 1
    }
   imge2.setAttribute('src', arrayimg2[index2])
}

function nextItem2() {
  index2++;
  if (index2 > arrayimg2.length - 1) {
    index2 = 0;
  }
  imge2.setAttribute('src', arrayimg2[index2])
}

//3
function prevItem3() {
    index3--
    if (index3 < 0) {
        index3 = arrayimg3.length - 1
    }
   imge3.setAttribute('src', arrayimg3[index3])
}

function nextItem3() {
  index3++;
  if (index3 > arrayimg3.length - 1) {
    index3= 0;
  }
  imge3.setAttribute('src', arrayimg3[index3])
}


setInterval(nextItem, 4000)
setInterval(nextItem2, 4000)
setInterval(nextItem3, 4000)
prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);
prev2.addEventListener("click", prevItem2)
next2.addEventListener("click", nextItem2);
prev3.addEventListener("click", prevItem3)
next3.addEventListener("click", nextItem3);