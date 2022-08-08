mapboxgl.accessToken = 'pk.eyJ1IjoiemVpbnp6dSIsImEiOiJjbDZpajJoejEwMDRjM2pqdHk5OTR3c3NtIn0.K39ZfeJfxbHD6mq_lKxmjw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  zoom: 10,
  center: [-0.118092, 51.509865]
});


// OPTIONS
// style: 'mapbox://styles/mapbox/dark-v10'  - DARK
// style: 'mapbox://styles/mapbox/light-v10' - LIGHT
// London, longitude - latitude [-0.118092, 51.509865]
// Paris, longitude - latitude [2.3522, 48.8566] 
// New York, longitude - latitude [-74.005974, 40.712776]
// Taipei, longitude - latitude [121.565414, 25.032969]
// mapbox needs them to be in the order: longitude-latitude, else it will not center