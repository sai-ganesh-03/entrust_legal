// Initialize the map
const map = L.map('map').setView([17.41774798449491, 78.45171556690707], 7);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
const marker = L.marker([17.41774798449491, 78.45171556690707])
    .addTo(map)
    .bindPopup('Your Location');

// You can style the map using CSS filters to match your original gray theme
document.querySelector('.leaflet-tile-pane').style.filter = 'grayscale(100%) brightness(103%)';