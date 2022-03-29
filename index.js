let songindex=0;
let audioelement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay')
let progressbar=document.getElementById('myprogress-bar')
let gif=document.getElementById('gif')
let forward=document.getElementById("forward");
let songitems=Array.from(document.getElementsByClassName("songitem"));
//audioelement.play();
let songs=[
    {songname:"haye ye dil",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Bhula Dena",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Dil tod ke",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Apna Sapna",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Zindagi pyaar se",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Kuch kaho na kaho",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"Hello brother",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"aashiqui",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songname:"Haule haule",filepath:"songs/8.mp3",coverpath:"covers/9.jpg"}
]
masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
songitems.forEach((element,i)=>{
    element.getElementsByClassName("Songname")[0].innerText=songs[i].songname;
})


//Listen to events
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value == progress;
})
myprogress-bar.addEventListener('change',()=>{
    audioelement.currentTime=myprogress-bar.value;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach(()=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src='songs/3.mp3';
        audioelement.play();


    })

})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
