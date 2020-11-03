// set up main image with the first image from image list
const mainImage = document.querySelector('#mainImage');
mainImage.src = imageList[0].download_url;


// get the buttons from images class div
// and set each one with image from imageList
const buttonList = document.querySelectorAll('#images button');

for(i in imageList){
    buttonList[i].children[0].src = imageList[i].download_url;
    buttonList[i].onclick = btnClicked;
    buttonList[i].children[0].style.opacity = 0.6;
}

// set first image opacity to 1
buttonList[0].children[0].style.opacity = 1;

function setButtonsOpacity(){
    for(i in imageList){
        buttonList[i].children[0].style.opacity = 0.6;
    }   
}

// set click event for all buttons, so once clicked
// it will replace the main image
function btnClicked(event){
    let imageURL = event.target.src;
    
    if(imageURL){
        mainImage.src = imageURL;
        setButtonsOpacity();
        event.target.style.opacity = 1;
    }
}

// set map and current shelter/orphanage location
var mymap = L.map('mapid').setView([50.981343945663895,-473.7937735564936], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVpc29uIiwiYSI6ImNrZzh1ZHFjYzAzMDIycnAyMHlwMHMxa3UifQ.QQY3YcaDqcz6607G598n7Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token',
}).addTo(mymap);

// set map icon
const orphanageIcon = L.icon({
    iconUrl:'./images/marker.png',
    iconSize:[32,32],
    iconAnchor:   [22, 94],
    shadowAnchor: [0, 0],
    popupAnchor:  [190,-30]
});

const marker = L.marker([50.981343945663895,-473.7937735564936],{icon:orphanageIcon})
marker.addTo(mymap);

