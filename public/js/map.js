mapboxgl.accessToken = 'pk.eyJ1IjoiemVpbnp6dSIsImEiOiJjbDZpajJoejEwMDRjM2pqdHk5OTR3c3NtIn0.K39ZfeJfxbHD6mq_lKxmjw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  zoom: 9,
  center: [-0.118092, 51.509865]
});


// OPTIONS/ NB

// mapbox needs them to be in the order: longitude-latitude, else it will not center

// style: 'mapbox://styles/mapbox/dark-v10'  - DARK
// style: 'mapbox://styles/mapbox/light-v10' - LIGHT
// London, longitude - latitude [-0.118092, 51.509865]
// Paris, longitude - latitude [2.3522, 48.8566] 
// New York, longitude - latitude [-74.005974, 40.712776]
// Taipei, longitude - latitude [121.565414, 25.032969]

// Fetch stores from API
async function getShops() {
  const res = await fetch('/api/map');
  const something = await res.json()
  console.log(something)
  const shops = something.data.map(shop => {
    return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [shop.coordinates[0].$numberDecimal, shop.coordinates[1].$numberDecimal]
          },
          properties: {
            storeId: shop.name,
            text: 'hello?',
            icon: 'shop'
          }
        }
  });

  loadMap(shops);
  console.log(shops)
}

// Load map with stores
function loadMap(shops) {
    map.on('load', function() {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: shops,
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
      const popup = new mapboxgl.Popup({container: 'map'});
      popup.setLngLat([-0.1734961, 51.49432 ])
        .setHTML('<h1>MapBox</h1>test')
        .addTo(map)
  });
}

map.on('click', e => {
  console.log('click', e.lngLat);
});

getShops();

