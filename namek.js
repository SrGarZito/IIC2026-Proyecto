
//Creación del mapa de sagas de Namek//

function namek(){
    let SVG = document.getElementById("namek");
    SVG.setAttribute("width", "645");
    SVG.setAttribute("height", "1108");
}

//Creación de los fondos rectangulares//

function fondo1(){
    let SVG = document.getElementById("fondo1");
    SVG.setAttribute("width", "1000");
    SVG.setAttribute("height", "1220");
}

function fondo2(){
    let SVG = document.getElementById("fondo2");
    SVG.setAttribute("width", "500");
    SVG.setAttribute("height", "800");
}

function enlace1(){
    let SVG = document.getElementById("enlace1");
    SVG.setAttribute("width", "700");
    SVG.setAttribute("height", "180");
}

function enlace2(){
    let SVG = document.getElementById("enlace2");
    SVG.setAttribute("width", "700");
    SVG.setAttribute("height", "180");
}

function enlace3(){
    let SVG = document.getElementById("enlace3");
    SVG.setAttribute("width", "700");
    SVG.setAttribute("height", "180");
}

function enlace4(){
    let SVG = document.getElementById("enlace4");
    SVG.setAttribute("width", "700");
    SVG.setAttribute("height", "180");
}

// POSIBLE USO PARA E2//

// function fondo3(){
//     let SVG = document.getElementById("fondo3");
//     SVG.setAttribute("width", "500");
//     SVG.setAttribute("height", "800");
// }

//Creación de los SVG de imagenes//

function foto1(){
    let SVG = document.getElementById("foto1");
    SVG.setAttribute("width", "370");
    SVG.setAttribute("height", "250");
}

function foto2(){
    let SVG = document.getElementById("foto2");
    SVG.setAttribute("width", "370");
    SVG.setAttribute("height", "250");
}

function foto3(){
    let SVG = document.getElementById("foto3");
    SVG.setAttribute("width", "370");
    SVG.setAttribute("height", "250");
}

function foto4(){
    let SVG = document.getElementById("foto4");
    SVG.setAttribute("width", "370");
    SVG.setAttribute("height", "250");
}

//Creación de los gráficos//

//Gráfico N°1//

async function fetchData1() {
    const response = await fetch('./namek.csv');
    const data = await response.text();
    
    // Dividir los datos por líneas
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    
    rows.forEach(row => {
        const cols = row.split(',');
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
            width: '550',
            height: '250',
            yaxis: {
                title: "Cantidad de ki"
            }
        };

        Plotly.newPlot('barchart', [trace], layout);
    });
}

//Gráfico N°2//

async function fetchData2() {
    const response = await fetch('./force.csv');
    const data = await response.text();
    
    // Dividir los datos por líneas
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    
    rows.forEach(row => {
        const cols = row.split(',');
        char.push((cols[1]));
        power.push(parseFloat(cols[2]));
    });

    return { char, power };
};

function graf2() {
    fetchData2().then(data => {
        let nuevoDiv = document.createElement('div');

        // Asignar un id único al nuevo div
        nuevoDiv.id = 'barchart1';

        // Insertar el nuevo div dentro de un contenedor existente
        document.body.appendChild(nuevoDiv);

        const trace = {
            x: data.char,
            y: data.power,
            type: 'bar',
            marker: {
                color: ['rgba(255, 153, 106, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)',
                    'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)']
            }
        };
        
        const layout = {
            title: 'Saga de las Fuerzas Especiales Ginyu',
            width: '550',
            height: '250',
            yaxis: {
                title: "Cantidad de ki"
            }
        };

        Plotly.newPlot('barchart1', [trace], layout);
    });
}

//Gráfico N°3//

async function fetchData3() {
    const response = await fetch('./ginyu.csv');
    const data = await response.text();
    
    // Dividir los datos por líneas
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    
    rows.forEach(row => {
        const cols = row.split(',');
        char.push((cols[1]));
        power.push(parseFloat(cols[2]));
    });

    return { char, power };
};

function graf3() {
    fetchData3().then(data => {
        let nuevoDiv = document.createElement('div');

        // Asignar un id único al nuevo div
        nuevoDiv.id = 'barchart2';

        // Insertar el nuevo div dentro de un contenedor existente
        document.body.appendChild(nuevoDiv);

        const trace = {
            x: data.char,
            y: data.power,
            type: 'bar',
            marker: {
                color: ['rgba(135, 145, 255, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)',
                    'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)']
            }
        };
        
        const layout = {
            title: 'Saga del Capitán Ginyu',
            width: '550',
            height: '250',
            yaxis: {
                title: "Cantidad de ki"
            }
        };

        Plotly.newPlot('barchart2', [trace], layout);
    });
}

//Gráfico N°4//

async function fetchData4() {
    const response = await fetch('./freezer.csv');
    const data = await response.text();
    
    // Dividir los datos por líneas
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    
    rows.forEach(row => {
        const cols = row.split(',');
        char.push((cols[1]));
        power.push(parseFloat(cols[2]));
    });

    return { char, power };
};

function graf4() {
    fetchData4().then(data => {
        let nuevoDiv = document.createElement('div');

        // Asignar un id único al nuevo div
        nuevoDiv.id = 'barchart3';

        // Insertar el nuevo div dentro de un contenedor existente
        document.body.appendChild(nuevoDiv);

        const trace = {
            x: data.char,
            y: data.power,
            type: 'bar',
            marker: {
                color: ['rgba(255, 255, 148, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)',
                    'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)', 'rgba(182, 182, 182, 0.8)']
            }
        };
        
        const layout = {
            title: 'Saga de Freezer',
            width: '550',
            height: '250',
            yaxis: {
                title: "Cantidad de ki"
            }
        };

        Plotly.newPlot('barchart3', [trace], layout);
    });
}


//Función de activación//
function activartodo(){
    namek();
    graf1();
    graf2();
    graf3();
    graf4();
    fondo1();
    fondo2();
    enlace1();
    enlace2();
    enlace3();
    enlace4();
    foto1();
    foto2();
    foto3();
    foto4();
}

//Activación de todas las funciones con la función "activartodo()//
activartodo()