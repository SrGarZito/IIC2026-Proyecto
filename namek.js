
function namek(){
    let SVG = document.getElementById("namek");
    SVG.setAttribute("width", "400");
    SVG.setAttribute("height", "687");
}

function fondo1(){
    let SVG = document.getElementById("fondo1");
    SVG.setAttribute("width", "1200");
    SVG.setAttribute("height", "800");
}

function fondo2(){
    let SVG = document.getElementById("fondo2");
    SVG.setAttribute("width", "300");
    SVG.setAttribute("height", "450");
}

function fondo3(){
    let SVG = document.getElementById("fondo3");
    SVG.setAttribute("width", "500");
    SVG.setAttribute("height", "800");
}

function fondo4(){
    let SVG = document.getElementById("fondo4");
    SVG.setAttribute("width", "500");
    SVG.setAttribute("height", "800");
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

function graf1() {
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
            marker: {
                color: ['rgba(211, 104, 255, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)',
                    'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)']
            }
        };
        
        const layout = {
            title: 'Saga de Namek',
            width: '745'
        };

        Plotly.newPlot('barchart', [trace], layout);
    });
}

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

function graf2() {
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
            title: 'Saga de las Fuerzas Especiales Ginyu',
            width: '745'
        };

        Plotly.newPlot('barchart 1', [trace], layout);
    });
}

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

function graf3() {
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
            title: 'Saga del Capitán Ginyu',
            width: '745'
        };

        Plotly.newPlot('barchart 2', [trace], layout);
    });
}

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

function graf4() {
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
            title: 'Saga de Freezer',
            width: '745'
        };

        Plotly.newPlot('barchart 3', [trace], layout);
    });
}

function activartodo(){
    namek();
    graf1();
    fondo1();
    fondo2();
    fondo3();
}

activartodo()