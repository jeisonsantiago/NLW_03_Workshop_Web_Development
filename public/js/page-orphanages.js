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
    iconUrl:'./public/images/marker.png',
    iconSize:[32,32],
    iconAnchor:   [22, 94],
    shadowAnchor: [0, 0],
    popupAnchor:  [190,-30]
});

// popup
const popUp = L.popup({
    closeButton:false,
    className:'map-popup',
    minWidth:300,
    maxHeight:200})
    .setContent(`For The Love Of Children Society Of Alberta <a href="./orphanage.html" class="choose-orphanage">`+
                `<button><img src="./public/images/seta.png"></img></button></a>`);


// set up marker with the orphanageIcon and popUp variables
const ic = L.marker([50.981343945663895,-473.7937735564936],{icon:orphanageIcon})
ic.addTo(mymap).bindPopup(popUp);

// this.addMarker('teta',1,1);
// const orphanates = document.querySelectorAll('#page-orphanages span');

// orphanates.forEach((orph) => {
//     this.addMarker(orph.dataset);
// });

// // set orphanate functions
// function addMarker({id,name, lat, lng}){
//     const popUp = L.popup({
//         closeButton: false,
//         className: 'map-popup',
//         minWidth:240,
//         minHeight:240,
//     })
//     // .setContent('For The Love Of Children Society Of Alberta <a href="/orphanage?id=1"class="choose-orphanage">'+
//     // '<img src="/images/arrow-white.svg"></img></a>');
//     .setContent(`${name}<a href="/orphanage?id=${id}"class="choose-orphanage">`+
//     `<img src="/images/arrow-white.svg"></img></a>`);
    
//     // create icon
//     //L.marker([51.1284784,-114.176201],{icon:orphanageIcon})
//     L.marker([lat,lng],{icon:orphanageIcon})
//     .addTo(mymap)
//     .bindPopup(popUp);
// } 