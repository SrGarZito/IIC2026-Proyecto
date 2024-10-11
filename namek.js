//import './barchart.js';

function namek(){
    let SVG = document.getElementById("namek");
    SVG.setAttribute("width", "745");
    SVG.setAttribute("height", "1280");
}

async function fetchData() {
    const response = await fetch('./namek.csv');
    const data = await response.text();
    
    // Dividir los datos por líneas
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    
    rows.forEach(row => {
        const cols = row.split(','); // ojo algunos csv tiene separacion ';'
        char.push(parseFloat(cols[0]));
        power.push(parseFloat(cols[1]));
    });

    return { char, power };
};

fetchData().then(data => {

    const trace = {
        x: data.char,
        y: data.power,
        type: 'bar',
    };
    
    const layout = {
        title: 'Strong',
        xaxis: { title: 'Characters' },
        yaxis: { title: 'Power Level' }
    };

    Plotly.newPlot('barchart 1', [trace], layout);
});


fetchData();
namek();