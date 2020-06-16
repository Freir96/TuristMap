var cities = [
    {
        name: "Ajuy",
        id: 1,
        latitude: 28.399612,
        longitude: -14.155519,
    },
    {
        name: "Antigua",
        id: 2,
        latitude: 28.416484,
        longitude: -14.010798,
    },
    {
        name: "Betancuria",
        id: 3,
        latitude: 28.424862,
        longitude: -14.056896,
    },
    {
        name: "Caleta de Fuste",
        id: 4,
        latitude: 28.397863,
        longitude: -13.866654,
    },
    {
        name: "Corralejo",
        id: 5,
        latitude: 28.728423,
        longitude: -13.867026,
    },
    {
        name: "Costa Calma",
        id: 6,
        latitude: 28.160185,
        longitude: -14.229059,
    },
    {
        name: "El Cotillo",
        id: 7,
        latitude: 28.684926,
        longitude: -14.010644,
    },
    {
        name: "Gran Tarajal",
        id: 8,
        latitude: 28.214121,
        longitude: -14.020738,
    },
    {
        name: "Isla Lobos",
        id: 9,
        latitude: 28.750720,
        longitude: -13.823716,
    },
    {
        name: "La Lajita",
        id: 10,
        latitude: 28.184292,
        longitude: -14.151954,
    },
    {
        name: "La Oliva",
        id: 11,
        latitude: 28.609787,
        longitude: -13.926182,
    },
    {
        name: "La Pared",
        id: 12,
        latitude: 28.212178,
        longitude: -14.215098,
    },
    {
        name: "Las Playitas",
        id: 13,
        latitude: 28.230609,
        longitude: -13.984154,
    },
    {
        name: "Los Molinos",
        id: 14,
        latitude: 28.543755,
        longitude: -14.063241,
    },
    {
        name: "Majanicho",
        id: 15,
        latitude: 28.739120,
        longitude: -13.939583,
    },
    {
        name: "Morro Jable",
        id: 16,
        latitude: 28.056493,
        longitude: -14.353359,
    },
    {
        name: "Esquinzo",
        id: 17,
        latitude: 28.075351,
        longitude: -14.304116,
    },
    {
        name: "Pajara",
        id: 18,
        latitude: 28.350527,
        longitude: -14.108015,
    },
    /*{
        name: "Pico de la Zarza",//peak
        id: 19,
        latitude: 28.101970,
    longitude: -14.355424,
    },*/
    {
        name: "Puerto de Morro Jable",
        id: 20,
        latitude: 28.050514,
        longitude: -14.358861,
    },
    {
        name: "Puerto del Rosario",
        id: 21,
        latitude: 28.500728,
        longitude: -13.862255,
    },
    /*{
        name: "Tetir",
        id: 22,
        latitude: 28.531534,
    longitude: -13.933317,
    },
    {
        name: "Tindaya",
        id: 23,
        latitude: 28.587355,
    longitude: -13.985469,
    },*/
    {
        name: "Tuineje",
        id: 24,
        latitude: 28.326499,
        longitude: -14.047861,
    },
    {
        name: "Vega de Rio Palmas",
        id: 25,
        latitude: 28.394085,
        longitude: -14.083592,
    },
];

function getCities() {
    return cities;
}

function getcityById(id) {
    return cities[id];
}

export default { getCities, getcityById }