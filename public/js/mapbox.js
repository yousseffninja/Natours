/*eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations)

mapboxgl.accessToken = 'pk.eyJ1IjoieXUta3VuIiwiYSI6ImNsOHV1aW1yZzA3Zmczb3J4N2YwM3FjNHcifQ.kXawMPuf235QVKZvuiVnVQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yu-kun/cl8uv57dh000v14r0dv93l9pp',
    center: [-118.113491, 34.111745],
    zoom: 5,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // add marker
    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom',
    }).setLngLat(loc.coordinates).addTo(map);

    new mapboxgl.Popup().setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map)

    bounds.extend(loc.coordinates);
});

map.fitBounds(Bounds, {
    paddind: {
        top: 200,
        bottom: 200,
        left: 100,
        right: 100,
    }
},)