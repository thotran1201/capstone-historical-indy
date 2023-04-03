let markertitle = "";
let locLat;
let locLon;

if(localStorage.getItem('lat') !== null) {
    locLat = parseFloat(localStorage.getItem('lat'));
}

else {
    console.log("no lat");
}

if(localStorage.getItem('lon') !== null) {
    locLon = parseFloat(localStorage.getItem('lon'));
}

else {
    console.log("no lon");
}

if(localStorage.getItem('title') !== null) {
    markertitle = localStorage.getItem('title');
}

else {
    console.log("no title");
    markertitle = "no title";
}

console.log(locLat, locLon);

// Initialize and add the map
let map;

async function initMap() {

  const position = { lat: locLat, lng: locLon };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: markertitle,
  });

}

initMap();