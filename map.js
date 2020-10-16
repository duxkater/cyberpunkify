var map = L.map('map', {
	zoomControl: false,
	attributionControl: false
}).setView([51.505, -0.09], 13);

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);