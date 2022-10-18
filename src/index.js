import { Chart } from "../node_modules/frappe-charts/dist/frappe-charts.min.esm.js";

function initializeMap(data) {
    let map = L.map('map').setView([60.19, 24.94], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let munLayer = L.geoJSON(null, {
        onEachFeature: (feature, layer) => {
            layer.bindTooltip(feature.properties.name + "<br/>Väkiluku: " + feature.properties.vaesto)
            layer.on("click", () => { //hopefully correct syntax
                //TODO add data to chart 
                console.log(feature.properties.name);
            })
        }
    }).addTo(map);
    data.forEach(element => {
        munLayer.addData(element);
    });
    map.fitBounds(munLayer.getBounds());

}

async function getmapdata() {
    const municipalityurl = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=kunta_vaki2021&outputFormat=json&srsName=EPSG:4326";
    const regionurl = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=maakunta_vaki2021&outputFormat=json&srsName=EPSG:4326";
    const data = await fetch(municipalityurl);
    let jsonData = await data.json();
    console.log(jsonData);
    initializeMap(jsonData.features);
}

function getUserSelection() {
    selection = document.getElementById("")
}

getmapdata();
