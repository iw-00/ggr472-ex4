// Add public map token.
mapboxgl.accessToken = "pk.eyJ1IjoiaXcwMCIsImEiOiJjbTV2aXFlajYwMjZmMmtvbWtrMGRhd3lkIn0.DbEVxhgWv4ANYwpIpCc4iA"; 

const map = new mapboxgl.Map({
    container: "my-map", // map container ID
    style: "mapbox://styles/iw00/cm6iek85i000w01s7bux64xu8", // style URL
    center: [-79.3567, 43.9845], // starting position [lng, lat]
    zoom: 5 // starting zoom
})

map.on("load", () => {

    map.addSource("stargazing-sites", {
        type: "geojson",
        data: "https://iw-00.github.io/ggr472-lab1/data/stargazing_sites.geojson"
    });
    
    map.addLayer({
        id: "stargazing-pt",
        type: "circle",
        source: "stargazing-sites",
        paint: {
            "circle-radius": 4,
            "circle-color": "#ebe834"
        }
    })

    map.addSource("buildings-data", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/iw-00/ggr472-ex4/refs/heads/main/data/buildings.geojson"
    });
    
    map.addLayer({
        id: "buildings-pt",
        type: "circle",
        source: "buildings-data",
        paint: {
            "circle-radius": 4,
            "circle-color": "#1ff258"
        }
    })

    



})