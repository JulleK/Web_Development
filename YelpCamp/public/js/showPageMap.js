mapboxgl.accessToken = 'pk.eyJ1IjoianVsbGVrIiwiYSI6ImNsbGY5MnVsaTB4djkzcXFoeXZyb3lnbmIifQ.tnbEwTwdGfsJiJRRSc7lWQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: campgroundCoordinates, // starting position [lng, lat]
    zoom: 10, // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(campgroundCoordinates)
    .addTo(map)