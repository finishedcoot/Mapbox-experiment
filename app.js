mapboxgl.accessToken =
  "pk.eyJ1IjoiZmluaXNoZWRjb290IiwiYSI6ImNrdXNnYTlmZjExOWwydnF2YjY4cG81cWcifQ.S97K1xRVxHMIXMynAKJVCw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setupMap([51.389, 35.6892]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: center,
    zoom: 13,
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: "metric",
    profile: "mapbox/cycling",
  });

  map.addControl(directions, "top-left");
}
