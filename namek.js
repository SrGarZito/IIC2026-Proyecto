
//Creación del mapa de sagas de Namek//

function namek(){
    let SVG = document.getElementById("namek");
    SVG.setAttribute("width", "645");
    SVG.setAttribute("height", "1108");
}

//Creación de los fondos rectangulares//

function fondo1(){
    let SVG = document.getElementById("fondo1");
    SVG.setAttribute("width", "1735");
    SVG.setAttribute("height", "800");
}


// Function to show the image of the clicked point
function showPointImage() {
    const imageDiv = document.createElement('div');
    imageDiv.id = 'hover-image';
    imageDiv.style.position = 'absolute';
    imageDiv.style.display = 'none';  // Initially hidden
    document.body.appendChild(imageDiv);

    // Here we'll associate each point with an image using its index.
    // You can adjust the naming pattern for images based on your needs.
    // For example, using the power and saga values to generate a key or just using a sequential index.
    const pointImages = {
        220000: 'f1.gif', 
        30000: 'v1.gif',  
        13000: 'k1.gif',  
        12000: 'g1.gif',  
        220001: 'f2.gif', 
        90001: 'g2.gif',  
        40001: 'v2.gif',  
        13001: 'k2.gif',
        530002: 'f3.gif', 
        250002: 'v3.gif',  
        180002: 'g3.gif',  
        18002: 'k3.gif',
        180000003: 'g4.gif', 
        120000003: 'f4.gif',  
        3000003: 'v4.gif',  
        75003: 'k4.gif',
    };

    // Plotly click event listener to display the image on click
    const plotDiv = document.getElementById('scatter');

    if (!plotDiv) {
        console.error("Plotly div not found!");
        return;
    }

    // Use Plotly's event handling system to listen for clicks
    plotDiv.on('plotly_click', function(eventData) {
        const point = eventData.points[0];  // Get the clicked point data

        const index = point.y + point.pointIndex ;  // Get the index of the clicked point
        console.log(point)
        imageDiv.style.display = 'block';  // Show the image div
        imageDiv.style.right = `720px`; // Position near the mouse click
        imageDiv.style.top = `220px`;

        var audio = new Audio('button.mp3');
        audio.play();

            // Set the image inside the div
        imageDiv.innerHTML = `<img src="${pointImages[index]}" alt="Point Image" style="max-width: 1000px; max-height: 1000px;"/>`;
        
    });

    // Hide the image when you click anywhere else on the plot
    plotDiv.on('plotly_relayout', function() {
        imageDiv.style.display = 'none';  // Hide the image div if the plot is re-arranged
    });
}

async function fetchData1() {
    const response = await fetch('./df.csv');
    const data = await response.text();
    
    // Dividir los datos por líneas
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    const saga = [];
    
    rows.forEach(row => {
        const cols = row.split(',');
        char.push((cols[1]));
        power.push(parseFloat(cols[2]));
        saga.push(cols[3])
    });

    return { char, power, saga };
};

function graf1() {
    fetchData1().then(data => {
        let nuevoDiv = document.createElement('div');

        nuevoDiv.id = 'scatter';

        document.body.appendChild(nuevoDiv);

        var filteredData = data.char.map((c, index) => {
            return c === 'Freezer' ? { char: c, power: data.power[index], saga: data.saga[index] } : null;
        }).filter(item => item)

        const trace = {
            x: filteredData.map(item => item.saga),
            y: filteredData.map(item => item.power),
            type: 'scatter',
            marker: {
                color: ['black', 'black', 'black', 'black'],
                size: 7.5
            },
            line: {
                color: 'purple',
                width:3
            },
            text: ['En su búsqueda de las esferas del Dragón','El llamado a las Fuerzas Especiales Ginyu','Transformación del Tirano', 'El 100% de su potencial'], 
            name: 'Freezer'
        };

        var filteredData = data.char.map((c, index) => {
            return c === 'Goku' ? { char: c, power: data.power[index], saga: data.saga[index] } : null;
        }).filter(item => item)

        const trace1 = {
            x: filteredData.map(item => item.saga),
            y: filteredData.map(item => item.power),
            type: 'scatter',
            marker: {
                color: ['black', 'black', 'black', 'black'],
                size: 7.5
            },
            line: {
                color: 'orange',
                width:3
            },
            text: ['En entrenamiento','Pelea contra las Fuerzas Especiales Ginyu','Cambio de cuerpo con el Capitán Ginyu','Transformación del Legendario Super Saiyajin'], 
            name: 'Goku'
        };

        var filteredData = data.char.map((c, index) => {
            return c === 'Vegeta' ? { char: c, power: data.power[index], saga: data.saga[index] } : null;
        }).filter(item => item)

        const trace2 = {
            x: filteredData.map(item => item.saga),
            y: filteredData.map(item => item.power),
            type: 'scatter',
            marker: {
                color: ['black', 'black', 'black', 'black'],
                size: 7.5
            },
            line: {
                color: 'blue',
                width:3
            },
            text: ['Pelea contra Zarbon','Decapitación de Guldo (Guerrero de las Fuerzas Especiales Ginyu)','Enfrentamiento contra Ginyu (En el cuerpo de Goku)','Muerte del orgulloso Saiyajin'], 
            name: 'Vegeta'
        };

        var filteredData = data.char.map((c, index) => {
            return c === 'Krillin' ? { char: c, power: data.power[index], saga: data.saga[index] } : null;
        }).filter(item => item)

        const trace4 = {
            x: filteredData.map(item => item.saga),
            y: filteredData.map(item => item.power),
            type: 'scatter',
            marker: {
                color: ['black', 'black', 'black', 'black'],
                size: 7.5
            },
            line: {
                color: 'red',
                width: 3
            },
            text: ['Aterrizaje en Namekusei','Pelea contra las Fuerzas Especiales Ginyu','Enfrentamiento contra Ginyu (En el cuerpo de Goku)','Muerte a manos del Tirano'], 
            name: 'Krillin'
        };

        const layout = {
            title: {
                text: 'Cronología de Namek con los niveles de poder',
                font: {
                    size: 18,
                    color: 'black'
                }
            },
            width: 1500,
            height: 750,
            barmode: 'overlay',
            yaxis: {
                title: "Cantidad de ki",
                type: 'log',
                autorange: true
            },
            legend: {
                font: {
                    size: 14,
                    color: 'black',
                },
                x: -600,
                y:1.1,
            },
        };

        Plotly.newPlot('scatter', [trace, trace1, trace2, trace4], layout);
            showPointImage();
    });
}


//Función de activación//
function activartodo(){
    graf1();
    fondo1();
}

//Activación de todas las funciones con la función "activartodo()//
activartodo()