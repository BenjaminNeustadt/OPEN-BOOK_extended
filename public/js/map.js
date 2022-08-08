mapboxgl.accessToken = 'pk.eyJ1IjoiemVpbnp6dSIsImEiOiJjbDZpajJoejEwMDRjM2pqdHk5OTR3c3NtIn0.K39ZfeJfxbHD6mq_lKxmjw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  zoom: 9,
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


function loadMap() {
    map.on('load', function() {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-0.125200, 51.525430]
                },
                properties: {
                  storeId: 'Gays the Word',
                  icon: 'shop'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-0.111410, 51.462000]
                },
                properties: {
                  storeId: 'Round Table Books',
                  icon: 'shop'
                }
              }
            ]
        }
      },
      layout: {
        'icon-image': '{icon}-15',
        'icon-size': 1.5,
        'text-field': '{storeId}',
        'text-size': 8,
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 1.2],
        'text-anchor': 'top'
      }
    });
  });
}

loadMap();

