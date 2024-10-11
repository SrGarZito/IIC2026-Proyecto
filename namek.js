//import './barchart.js';

function namek(){
    let SVG = document.getElementById("namek");
    SVG.setAttribute("width", "527");
    SVG.setAttribute("height", "905");
}

async function fetchData1() {
    const response = await fetch('./namek.csv');
    const data = await response.text();
    
    // Dividir los datos por líneas
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    
    rows.forEach(row => {
        const cols = row.split(','); // ojo algunos csv tiene separacion ';'
        char.push((cols[1]));
        power.push(parseFloat(cols[2]));
    });

    return { char, power };
};

fetchData1().then(data => {
    let nuevoDiv = document.createElement('div');

    // Asignar un id único al nuevo div
    nuevoDiv.id = 'barchart';

    // Insertar el nuevo div dentro de un contenedor existente
    document.body.appendChild(nuevoDiv);

    const trace = {
        x: data.char,
        y: data.power,
        type: 'bar',
    };
    
    const layout = {
        title: 'Strong',
        xaxis: { title: 'Characters' },
        yaxis: { title: 'Power Level' },
        width: '745'
    };

    Plotly.newPlot('barchart', [trace], layout);
});

async function fetchData2() {
    const response = await fetch('./force.csv');
    const data = await response.text();
    
    // Dividir los datos por líneas
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    
    rows.forEach(row => {
        const cols = row.split(','); // ojo algunos csv tiene separacion ';'
        char.push((cols[1]));
        power.push(parseFloat(cols[2]));
    });

    return { char, power };
};

fetchData2().then(data => {
    let nuevoDiv = document.createElement('div');

    // Asignar un id único al nuevo div
    nuevoDiv.id = 'barchart 1';

    // Insertar el nuevo div dentro de un contenedor existente
    document.body.appendChild(nuevoDiv);

    const trace = {
        x: data.char,
        y: data.power,
        type: 'bar',
    };
    
    const layout = {
        title: 'Strong',
        xaxis: { title: 'Characters' },
        yaxis: { title: 'Power Level' },
        width: '745'
    };

    Plotly.newPlot('barchart 1', [trace], layout);
});

async function fetchData3() {
    const response = await fetch('./ginyu.csv');
    const data = await response.text();
    
    // Dividir los datos por líneas
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    
    rows.forEach(row => {
        const cols = row.split(','); // ojo algunos csv tiene separacion ';'
        char.push((cols[1]));
        power.push(parseFloat(cols[2]));
    });

    return { char, power };
};

fetchData3().then(data => {
    let nuevoDiv = document.createElement('div');

    // Asignar un id único al nuevo div
    nuevoDiv.id = 'barchart 2';

    // Insertar el nuevo div dentro de un contenedor existente
    document.body.appendChild(nuevoDiv);

    const trace = {
        x: data.char,
        y: data.power,
        type: 'bar',
    };
    
    const layout = {
        title: 'Strong',
        xaxis: { title: 'Characters' },
        yaxis: { title: 'Power Level' },
        width: '745'
    };

    Plotly.newPlot('barchart 2', [trace], layout);
});

async function fetchData4() {
    const response = await fetch('./freezer.csv');
    const data = await response.text();
    
    // Dividir los datos por líneas
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    
    rows.forEach(row => {
        const cols = row.split(','); // ojo algunos csv tiene separacion ';'
        char.push((cols[1]));
        power.push(parseFloat(cols[2]));
    });

    return { char, power };
};

fetchData4().then(data => {
    let nuevoDiv = document.createElement('div');

    // Asignar un id único al nuevo div
    nuevoDiv.id = 'barchart 3';

    // Insertar el nuevo div dentro de un contenedor existente
    document.body.appendChild(nuevoDiv);

    const trace = {
        x: data.char,
        y: data.power,
        type: 'bar',
    };
    
    const layout = {
        title: 'Strong',
        xaxis: { title: 'Characters' },
        yaxis: { title: 'Power Level' },
        width: '745'
    };

    Plotly.newPlot('barchart 3', [trace], layout);
});


fetchData1();
namek();