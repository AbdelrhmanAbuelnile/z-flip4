let bigOne = document.querySelector(".big-one"); // for images
let container = document.querySelector(".container"); //for colors
let icon = document.getElementById("second");
let daList = document.getElementById("list");

// this function chages the big img src with the src of the img that have been clicked on 

function changeSrc(pic){
    bigOne.src= pic ;
}

//this function changes the background color with a new color when clicked on small imgs

function changeBack(manga) {
    container.style.background = manga ; 
}



// document.querySelector('.links').onclick = ()=> {
//     if((icon.style.width ==="60%") && (daList.style.display === "block")){
//         // icon.style.width="100%";
//         daList.style.display="block" ;
//     }else{
//         // icon.style.width === "60%";
//         daList.style.display === "block";
//     }
// }


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