// set map, so the user can set the location
var mymap = L.map('mapid').setView([50.981343945663895,-473.7937735564936], 5);
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
    iconUrl:'./public/images/marker.png',
    iconSize:[32,32],
    iconAnchor:   [16, 32],
    shadowAnchor: [0, 0],
    popupAnchor:  [190,-30]
});


// click setup to set the orphanage location on the map
let currentMarker;

mymap.on('click',getLatLng);

function getLatLng(event){
    let latlng = event.latlng;

    if(!currentMarker && latlng){
        currentMarker = L.marker([latlng.lat,latlng.lng],{icon:orphanageIcon})
        currentMarker.addTo(mymap)
    }else{
        currentMarker.setLatLng([latlng.lat,latlng.lng])
    }

    console.log(currentMarker);
}


// photo url button and removal controls
const btnAddPhotoURL = document.querySelector('#addimage-btn');

const urlInput = document.querySelector('#photo-url-input');
urlInput.children[1].onclick = autoRemove;

const photosURLContainer = document.querySelector('.photos-url');

btnAddPhotoURL.onclick = addURLInput;

function addURLInput(){
    let newURL = urlInput.cloneNode(true);
    newURL.children[0].value = ""

    // set auto remove
    newURL.children[1].onclick = autoRemove;

    photosURLContainer.appendChild(newURL);
}

function autoRemove(event){

    // check how many input 
    let urlinputs = document.querySelectorAll('#photo-url-input');
    if(urlinputs.length == 1) return;
    
    photosURLContainer.removeChild(event.target.parentElement);
}


// open on weekend setup 
let buttonYes = document.querySelector('#open-on-weekends button:nth-of-type(1)');
let buttonNo = document.querySelector('#open-on-weekends button:nth-of-type(2)');

buttonYes.onclick = toggleButtons;
buttonNo.onclick = toggleButtons;

let openOnWeekends = document.querySelector('#open-on-weekends span');

function toggleButtons(event){
    
    // clear butons
    buttonYes.classList.remove('active-btn');
    buttonNo.classList.remove('active-btn');
    
    let element = event.target;
    if(!element.classList.contains('active-btn')){
        element.classList.add('active-btn');

        if(element.textContent == "Yes"){
            openOnWeekends.dataset.openOnWeekends = "1";
        }else{
            openOnWeekends.dataset.openOnWeekends = "0";
        }
    }
}

// validate send btn (awalys check input on front-end)
var buttonSend = document.querySelector('button[type="submit"]');
buttonSend.onclick = checkMarker;

function checkMarker(){
    if(!currentMarker) {
        return false;
    } 
    return true;
}