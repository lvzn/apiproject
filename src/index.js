import { Chart } from "../node_modules/frappe-charts/dist/frappe-charts.min.esm.js";

const chartQuery = {
    "query": [
        {
            "code": "Äänestysalue",
            "selection": {
                "filter": "agg:- Vaalipiirit ja kunnat 2019 evfi.agg",
                "values": [
                    "SSS",
                    "VP01",
                    "091",
                    "VP02",
                    "018",
                    "049",
                    "078",
                    "092",
                    "106",
                    "149",
                    "186",
                    "224",
                    "235",
                    "245",
                    "257",
                    "407",
                    "434",
                    "444",
                    "504",
                    "505",
                    "543",
                    "611",
                    "616",
                    "638",
                    "710",
                    "753",
                    "755",
                    "858",
                    "927",
                    "VP03",
                    "019",
                    "202",
                    "284",
                    "304",
                    "322",
                    "400",
                    "423",
                    "430",
                    "445",
                    "480",
                    "481",
                    "503",
                    "529",
                    "538",
                    "561",
                    "577",
                    "631",
                    "636",
                    "680",
                    "704",
                    "734",
                    "738",
                    "761",
                    "833",
                    "853",
                    "895",
                    "918",
                    "VP04",
                    "050",
                    "051",
                    "079",
                    "099",
                    "102",
                    "181",
                    "214",
                    "230",
                    "271",
                    "484",
                    "531",
                    "608",
                    "609",
                    "684",
                    "747",
                    "783",
                    "886",
                    "VP06",
                    "016",
                    "061",
                    "081",
                    "082",
                    "086",
                    "098",
                    "103",
                    "109",
                    "111",
                    "165",
                    "169",
                    "316",
                    "398",
                    "433",
                    "560",
                    "576",
                    "694",
                    "781",
                    "834",
                    "981",
                    "VP07",
                    "020",
                    "108",
                    "143",
                    "177",
                    "211",
                    "250",
                    "418",
                    "508",
                    "536",
                    "562",
                    "581",
                    "604",
                    "619",
                    "635",
                    "702",
                    "790",
                    "837",
                    "887",
                    "908",
                    "922",
                    "936",
                    "980",
                    "VP08",
                    "046",
                    "075",
                    "090",
                    "097",
                    "142",
                    "153",
                    "171",
                    "178",
                    "213",
                    "285",
                    "286",
                    "405",
                    "416",
                    "441",
                    "489",
                    "491",
                    "507",
                    "580",
                    "588",
                    "593",
                    "623",
                    "624",
                    "681",
                    "689",
                    "700",
                    "739",
                    "740",
                    "768",
                    "831",
                    "935",
                    "VP09",
                    "140",
                    "146",
                    "167",
                    "176",
                    "204",
                    "239",
                    "260",
                    "263",
                    "276",
                    "297",
                    "309",
                    "402",
                    "420",
                    "422",
                    "426",
                    "541",
                    "595",
                    "607",
                    "686",
                    "687",
                    "707",
                    "749",
                    "762",
                    "778",
                    "844",
                    "848",
                    "857",
                    "911",
                    "915",
                    "921",
                    "925",
                    "VP10",
                    "005",
                    "010",
                    "052",
                    "074",
                    "145",
                    "151",
                    "152",
                    "217",
                    "218",
                    "231",
                    "232",
                    "233",
                    "236",
                    "272",
                    "280",
                    "287",
                    "288",
                    "300",
                    "301",
                    "399",
                    "403",
                    "408",
                    "421",
                    "440",
                    "475",
                    "499",
                    "545",
                    "584",
                    "598",
                    "599",
                    "743",
                    "759",
                    "846",
                    "849",
                    "893",
                    "905",
                    "924",
                    "934",
                    "946",
                    "989",
                    "VP11",
                    "077",
                    "172",
                    "179",
                    "182",
                    "216",
                    "226",
                    "249",
                    "256",
                    "265",
                    "275",
                    "291",
                    "312",
                    "410",
                    "435",
                    "495",
                    "500",
                    "592",
                    "601",
                    "729",
                    "850",
                    "892",
                    "931",
                    "992",
                    "VP12",
                    "009",
                    "069",
                    "071",
                    "072",
                    "105",
                    "139",
                    "205",
                    "208",
                    "244",
                    "290",
                    "305",
                    "317",
                    "425",
                    "436",
                    "483",
                    "494",
                    "535",
                    "563",
                    "564",
                    "578",
                    "615",
                    "620",
                    "625",
                    "626",
                    "630",
                    "678",
                    "691",
                    "697",
                    "746",
                    "748",
                    "765",
                    "777",
                    "785",
                    "791",
                    "832",
                    "859",
                    "889",
                    "977",
                    "VP13",
                    "047",
                    "148",
                    "240",
                    "241",
                    "261",
                    "273",
                    "320",
                    "498",
                    "583",
                    "614",
                    "683",
                    "698",
                    "732",
                    "742",
                    "751",
                    "758",
                    "845",
                    "851",
                    "854",
                    "890",
                    "976",
                    "VP05",
                    "035",
                    "043",
                    "060",
                    "062",
                    "065",
                    "076",
                    "170",
                    "295",
                    "318",
                    "417",
                    "438",
                    "478",
                    "736",
                    "766",
                    "771",
                    "941"
                ]
            }
        },
        {
            "code": "Puolueiden kannatus",
            "selection": {
                "filter": "item",
                "values": [
                    "Sar1"
                ]
            }
        },
        {
            "code": "Sukupuoli",
            "selection": {
                "filter": "item",
                "values": [
                    "S"
                ]
            }
        }
    ],
    "response": {
        "format": "json-stat2"
    }
}

const voteQuery = {
    "query": [
        {
            "code": "Äänestysalue",
            "selection": {
                "filter": "agg:- Vaalipiirit ja kunnat 2019 evfi.agg",
                "values": [
                    "SSS",
                    "VP01",
                    "091",
                    "VP02",
                    "018",
                    "049",
                    "078",
                    "092",
                    "106",
                    "149",
                    "186",
                    "224",
                    "235",
                    "245",
                    "257",
                    "407",
                    "434",
                    "444",
                    "504",
                    "505",
                    "543",
                    "611",
                    "616",
                    "638",
                    "710",
                    "753",
                    "755",
                    "858",
                    "927",
                    "VP03",
                    "019",
                    "202",
                    "284",
                    "304",
                    "322",
                    "400",
                    "423",
                    "430",
                    "445",
                    "480",
                    "481",
                    "503",
                    "529",
                    "538",
                    "561",
                    "577",
                    "631",
                    "636",
                    "680",
                    "704",
                    "734",
                    "738",
                    "761",
                    "833",
                    "853",
                    "895",
                    "918",
                    "VP04",
                    "050",
                    "051",
                    "079",
                    "099",
                    "102",
                    "181",
                    "214",
                    "230",
                    "271",
                    "484",
                    "531",
                    "608",
                    "609",
                    "684",
                    "747",
                    "783",
                    "886",
                    "VP06",
                    "016",
                    "061",
                    "081",
                    "082",
                    "086",
                    "098",
                    "103",
                    "109",
                    "111",
                    "165",
                    "169",
                    "316",
                    "398",
                    "433",
                    "560",
                    "576",
                    "694",
                    "781",
                    "834",
                    "981",
                    "VP07",
                    "020",
                    "108",
                    "143",
                    "177",
                    "211",
                    "250",
                    "418",
                    "508",
                    "536",
                    "562",
                    "581",
                    "604",
                    "619",
                    "635",
                    "702",
                    "790",
                    "837",
                    "887",
                    "908",
                    "922",
                    "936",
                    "980",
                    "VP08",
                    "046",
                    "075",
                    "090",
                    "097",
                    "142",
                    "153",
                    "171",
                    "178",
                    "213",
                    "285",
                    "286",
                    "405",
                    "416",
                    "441",
                    "489",
                    "491",
                    "507",
                    "580",
                    "588",
                    "593",
                    "623",
                    "624",
                    "681",
                    "689",
                    "700",
                    "739",
                    "740",
                    "768",
                    "831",
                    "935",
                    "VP09",
                    "140",
                    "146",
                    "167",
                    "176",
                    "204",
                    "239",
                    "260",
                    "263",
                    "276",
                    "297",
                    "309",
                    "402",
                    "420",
                    "422",
                    "426",
                    "541",
                    "595",
                    "607",
                    "686",
                    "687",
                    "707",
                    "749",
                    "762",
                    "778",
                    "844",
                    "848",
                    "857",
                    "911",
                    "915",
                    "921",
                    "925",
                    "VP10",
                    "005",
                    "010",
                    "052",
                    "074",
                    "145",
                    "151",
                    "152",
                    "217",
                    "218",
                    "231",
                    "232",
                    "233",
                    "236",
                    "272",
                    "280",
                    "287",
                    "288",
                    "300",
                    "301",
                    "399",
                    "403",
                    "408",
                    "421",
                    "440",
                    "475",
                    "499",
                    "545",
                    "584",
                    "598",
                    "599",
                    "743",
                    "759",
                    "846",
                    "849",
                    "893",
                    "905",
                    "924",
                    "934",
                    "946",
                    "989",
                    "VP11",
                    "077",
                    "172",
                    "179",
                    "182",
                    "216",
                    "226",
                    "249",
                    "256",
                    "265",
                    "275",
                    "291",
                    "312",
                    "410",
                    "435",
                    "495",
                    "500",
                    "592",
                    "601",
                    "729",
                    "850",
                    "892",
                    "931",
                    "992",
                    "VP12",
                    "009",
                    "069",
                    "071",
                    "072",
                    "105",
                    "139",
                    "205",
                    "208",
                    "244",
                    "290",
                    "305",
                    "317",
                    "425",
                    "436",
                    "483",
                    "494",
                    "535",
                    "563",
                    "564",
                    "578",
                    "615",
                    "620",
                    "625",
                    "626",
                    "630",
                    "678",
                    "691",
                    "697",
                    "746",
                    "748",
                    "765",
                    "777",
                    "785",
                    "791",
                    "832",
                    "859",
                    "889",
                    "977",
                    "VP13",
                    "047",
                    "148",
                    "240",
                    "241",
                    "261",
                    "273",
                    "320",
                    "498",
                    "583",
                    "614",
                    "683",
                    "698",
                    "732",
                    "742",
                    "751",
                    "758",
                    "845",
                    "851",
                    "854",
                    "890",
                    "976",
                    "VP05",
                    "035",
                    "043",
                    "060",
                    "062",
                    "065",
                    "076",
                    "170",
                    "295",
                    "318",
                    "417",
                    "438",
                    "478",
                    "736",
                    "766",
                    "771",
                    "941"
                ]
            }
        },
        {
            "code": "Äänestystiedot",
            "selection": {
                "filter": "item",
                "values": [
                    "Sar3"
                ]
            }
        },
        {
            "code": "Sukupuoli",
            "selection": {
                "filter": "item",
                "values": [
                    "S"
                ]
            }
        }
    ],
    "response": {
        "format": "json-stat2"
    }
}

const partyColors = {
    KESK: "#01954B",
    PS: "#FFD500",
    KOK: "#006288",
    SDP: "#E11931",
    VIHR: "#61BF1A",
    VAS: "#BF1E24",
    RKP: "#FFDD93",
    KD: "#2B67C9",
    SKP: "#8B0000",
    KTP: "#61BF1A",
    LIBE: "#FFFFFF",
    "Piraattip.": "#FFFFFF",
    EOP: "#FFFFFF",
    KP: "#FFFFFF",
    FP: "#FFFFFF",
    IP: "#FFFFFF",
    SIN: "#FFFFFF",
    SKE: "#FFFFFF",
    STL: "#FFFFFF",
    Muut: "#FFFFFF"
}

function calculateHue(perc) {
    let hue = ((perc/68.7) ** 5) * 60;
    // let hue = 0;
    // if (diff < 0) {
    //     hue = 10
    // }
    // else if (diff > 0) {
    //     hue = 100;
    // }
    // else if (diff === 0) {
    //     hue = 60
    // }
    if (hue > 120)
        hue = 120;
    console.log(hue);
    return hue
}

function getMostSupportedParty(feature, partydata) {
    let max = 0;
    let values = [];
    for (let i = 1; i < 21; i++) {
        values.push(partydata.value[partydata.dimension.Äänestysalue.category.index[feature.properties.kunta] * 21 + i])
    }
    values.forEach(e => {
        if (e > max)
            max = e;
    });
    let maxIndex = values.indexOf(max) + 1;
    let partyLabel = partydata.dimension.Puolue.category.label[Object.keys(partydata.dimension.Puolue.category.index).find(key => partydata.dimension.Puolue.category.index[key] === maxIndex)] //i know
    return partyLabel;
}

function initializeMap(regdata, mundata, partydata, votedata, chart) {
    let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    let munLayer = L.geoJSON(null, {
        onEachFeature: (feature, layer) => {
            let partyLabel = getMostSupportedParty(feature, partydata);
            layer.bindTooltip(feature.properties.name + "<br/>Väkiluku: " + feature.properties.vaesto + "<br/>Puolue: " + partyLabel)
            layer.on("click", () => {
                //TODO add data to chart 
                const labels = []
                for (let i = 1; i < 21; i++) {
                    labels.push(partydata.dimension.Puolue.category.label[Object.keys(partydata.dimension.Puolue.category.index).find(key => partydata.dimension.Puolue.category.index[key] === i)]) //fml
                }
                let values = [];
                for (let i = 1; i < 21; i++) {
                    values.push(partydata.value[partydata.dimension.Äänestysalue.category.index[feature.properties.kunta] * 21 + i])
                }
                const dataset = { name: "Puoluekannatus: " + feature.properties.nimi, chartType: "bar", values: values }
                const chartData = { labels: labels, datasets: [dataset] }
                console.log(feature.properties.kunta); //kunta id
                chart.update(chartData);
            })
        },
        style: (feature) => {
            let partyLabel = getMostSupportedParty(feature, partydata);
            return { color: partyColors[partyLabel] }
        }
    });
    mundata.forEach(element => {
        munLayer.addData(element);
    });
    console.log(votedata);
    let voteLayer = L.geoJSON(null, {
        onEachFeature: (feature, layer) => {
            layer.bindTooltip(feature.properties.name + "<br/>Väkiluku: " + feature.properties.vaesto)
            layer.bindPopup(`<p>Väkiluku: ${feature.properties.vaesto} <br/>Äänestysprosentti: ${votedata.value[votedata.dimension["Äänestysalue"].category.index[feature.properties.kunta]]}</p>`);
        }, 
        style: (feature) => {
            let perc = votedata.value[votedata.dimension["Äänestysalue"].category.index[feature.properties.kunta]]
            return {color: `hsl(${calculateHue(perc)}, 70%, 50%)`}
        }
    })

    mundata.forEach(element => voteLayer.addData(element));

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
        layers: [osm, munLayer, regLayer, voteLayer]
    }).setView([60.19, 24.94], 5);

    let baseMaps = {
        "OpenStreetMap": osm
    }

    let overlayMaps = {
        "Regions": regLayer,
        "Parties": munLayer,
        "Votes": voteLayer
    }

    let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

    map.fitBounds(munLayer.getBounds());
}

async function getMapData() {
    const municipalityurl = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=kunta_vaki2021&outputFormat=json&srsName=EPSG:4326";
    const regionurl = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=maakunta_vaki2021&outputFormat=json&srsName=EPSG:4326";
    const voteurl = "https://statfin.stat.fi:443/PxWeb/api/v1/fi/StatFin/evaa/120_evaa_2019_tau_102.px";
    const regdata = await fetch(regionurl);
    const regjson = await regdata.json();
    const mundata = await fetch(municipalityurl);
    const munjson = await mundata.json();
    const votedata = await fetch(voteurl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(voteQuery)
    });
    const votejson = await votedata.json();
    const partydata = await getPartyData();
    let chart = await initializeChart(partydata);
    initializeMap(regjson.features, munjson.features, partydata, votejson, chart);

}

async function getPartyData() {
    const url = "https://statfin.stat.fi:443/PxWeb/api/v1/fi/StatFin/evaa/130_evaa_2019_tau_103.px";
    const res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(chartQuery)
    })
    const data = await res.json();
    return data;
}

async function initializeChart(partydata) {
    const labels = []
    for (let i = 1; i < 21; i++) {
        labels.push(partydata.dimension.Puolue.category.label[Object.keys(partydata.dimension.Puolue.category.index).find(key => partydata.dimension.Puolue.category.index[key] === i)]) //fml
    }
    let values = []
    for (let i = 1; i < 21; i++) {
        values.push(partydata.value[i]);
    }
    const dataset = { name: "Puoluekannatus Suomessa", chartType: "bar", values: values }
    const chartData = { labels: labels, datasets: [dataset] }
    const chart = new Chart("#chart", {
        title: "Puoluekannatus",
        data: chartData,
        type: "axis-mixed",
        height: "450",
        colors: ["#1dbac2"]
    })
    return chart;
}

getMapData();
getChartData();