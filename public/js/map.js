mapboxgl.accessToken = 'pk.eyJ1IjoiemVpbnp6dSIsImEiOiJjbDZpajJoejEwMDRjM2pqdHk5OTR3c3NtIn0.K39ZfeJfxbHD6mq_lKxmjw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  zoom: 9,
  center: [-0.118092, 51.509865]
});

// const geojson = {
//   type: 'FeatureCollection',
//   features: [
//     {
//       type: 'Feature',
//       geometry: {
//         type: 'Point',
//         coordinates: [-0.118092, 51.509865]
//       },
//       properties: {
//         title: 'Mapbox',
//         description: 'Washington, D.C.'
//       }
//     }
//   ]
// };

// // add markers to map
// for (const feature of geojson.features) {
//   // create a HTML element for each feature
//   const el = document.createElement('div');
//   el.className = 'marker';
//   // make a marker for each feature and add to the map
// new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
// }



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
  const response = await fetch('/api/map');
  const received= await response.json()
  const shops = received.data.map(shop => {

    return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [shop.coordinates[0].$numberDecimal, shop.coordinates[1].$numberDecimal]
          },
          properties: {
            storeId: shop.name,
            hours: shop.openingHours,
            website: shop.website,
            address: shop.address,
          }
        }
  });

  loadMap(shops);
}



// Load map with stores
function loadMap(shops) {
    map.on('load', function() {
            // add markers to map
      for (const feature of shops) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              test(feature)
            )
        )
        .addTo(map)
      }

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
        // 'icon-image': '{icon}-15',
        // 'icon-size': 1.5,
        'text-field': '{storeId}',
        'text-size': 8,
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 1.2],
        'text-anchor': 'top'
      }
    });

  });

}

const test = (feature) => {
console.log(feature)
const name = feature.properties.storeId;
const hours = feature.properties.hours;
const website = feature.properties.website;
const address = feature.properties.address;

return `
      <a href=${website} target="_blank" >${name}</a>
      <br>
      <p>${hours}</p>
      <br>
      <p>${address}</p>
      `


}
// map.on('click', e => {
//   const result = map.queryRenderedFeatures(e.point, { layers: ['points'] });
//   if (result.length) {
//     console.log(result)
//     const popup = new mapboxgl.Popup();
//     const name = result[0].properties.storeId;
//     const hours = result[0].properties.hours;
//     const website = result[0].properties.website;
//     const address = result[0].properties.address;


//     popup.setLngLat(e.lngLat)
//       .setHTML(`
//       <a href=${website} target="_blank" >${name}</a>
//       <br>
//       <p>${hours}</p>
//       <br>
//       <p>${address}</p>
//       `)
//       .addTo(map)
//   }
// });

getShops();

