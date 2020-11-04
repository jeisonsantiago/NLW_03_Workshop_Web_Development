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
    iconUrl:'./images/marker.png',
    iconSize:[32,32],
    iconAnchor:   [22, 94],
    shadowAnchor: [0, 0],
    popupAnchor:  [190,-30]
});
