console.log('Welcome to Spotify Clone')

let songIndex = 0;
let audioElement = new Audio('H:/Spotify/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "salam-e-Ishq", filePath: "Media/songs/1.mp3", coverPath: "Media/covers/1.jpg"},
    {songName: "Do Din", filePath: "Media/songs/2.mp3", coverPath: "Media/covers/2.jpg"},
    {songName: "Lofi", filePath: "Media/songs/3.mp3", coverPath: "Media/covers/3.jpg"},
    {songName: "salam-e-Ishq", filePath: "Media/songs/4.mp3", coverPath: "Media/covers/4.jpg"},
    {songName: "salam-e-Ishq", filePath: "Media/songs/5.mp3", coverPath: "Media/covers/5.jpg"},
    {songName: "salam-e-Ishq", filePath: "Media/songs/6.mp3", coverPath: "Media/covers/6.jpg"},
    {songName: "salam-e-Ishq", filePath: "Media/songs/7.mp3", coverPath: "Media/covers/7.jpg"},
    {songName: "salam-e-Ishq", filePath: "Media/songs/8.mp3", coverPath: "Media/covers/8.jpg"},
    {songName: "salam-e-Ishq", filePath: "Media/songs/9.mp3", coverPath: "Media/covers/9.jpg"},
    {songName: "OK oK", filePath: "Media/songs/10.mp3", coverPath: "Media/covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        // console.log(e.target)
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `H:/Spotify/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Media/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`Media/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})