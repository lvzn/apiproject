import { Chart } from "../node_modules/frappe-charts/dist/frappe-charts.min.esm.js";

function initializeMap(regdata, mundata) {
    console.log(regdata);
    let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    let munLayer = L.geoJSON(null, {
        onEachFeature: (feature, layer) => {
            layer.bindTooltip(feature.properties.name + "<br/>Väkiluku: " + feature.properties.vaesto)
            layer.on("click", () => {
                //TODO add data to chart 
                console.log(feature.properties.name);
            }) 
        }
    });
    mundata.forEach(element => {
        munLayer.addData(element);
    });

    let regLayer = L.geoJSON(null, {
        onEachFeature: (feature, layer) => {
            layer.bindTooltip(feature.properties.name + "<br/>Väkiluku: " + feature.properties.vaesto)
            layer.on("click", () => { 
                //TODO add data to chart 
                console.log(feature.properties.name);
            }) 
        }
    });
    regdata.forEach(element => {
        regLayer.addData(element);
    });



    let map = L.map('map', {
        layers: [osm, munLayer, regLayer]
    }).setView([60.19, 24.94], 5);

    let baseMaps = {
        "OpenStreetMap": osm
    }

    let overlayMaps = {
        "Regions": regLayer,
        "Municipalities": munLayer
    }

    let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

    map.fitBounds(munLayer.getBounds());
}

async function getmapdata() {
    const municipalityurl = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=kunta_vaki2021&outputFormat=json&srsName=EPSG:4326";
    const regionurl = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=maakunta_vaki2021&outputFormat=json&srsName=EPSG:4326";
    const regdata = await fetch(regionurl);
    const regjson = await regdata.json();
    const mundata = await fetch(municipalityurl);
    const munjson = await mundata.json();
    initializeMap(regjson.features, munjson.features);
}

function getUserSelection() {
    selection = document.getElementById("")
}

getmapdata();
