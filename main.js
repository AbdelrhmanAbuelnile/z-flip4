let bigOne = document.querySelector(".big-one"); // for images
let container = document.querySelector(".container"); //for colors
let icon = document.getElementById("second");
let daList = document.getElementById("list");

function changeSrc(pic){
    bigOne.src= pic ;
}

function changeBack(manga) {
    document.body.style.background = manga ; 
}

let openList=()=>{
    let selectedArea = document.querySelector('header .links ul');
    if(selectedArea.style.display='none'){
        selectedArea.style.display='block';
        icon.style.width="100%";
    } else {
        selectedArea.style.display='none';
    icon.style.width="60%";
    }
}

let closeAll=()=>{
    let selectedArea = document.querySelector('header .links ul');
    if(selectedArea.style.display='block'){
        selectedArea.style.display='none';
        icon.style.width="60%";
    }
}