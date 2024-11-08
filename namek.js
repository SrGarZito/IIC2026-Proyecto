
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
        0: 'n1.jpg', 
        1: 'n2.jpg',  
        2: 'n3.jpg',  
        3: 'n4.jpg',  
        
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

        const index = point.pointIndex;  // Get the index of the clicked point
        console.log(point)
        imageDiv.style.display = 'block';  // Show the image div
        imageDiv.style.left = `${eventData.event.clientX + 10}px`; // Position near the mouse click
        imageDiv.style.top = `${eventData.event.clientY + 10}px`;

            // Set the image inside the div
        imageDiv.innerHTML = `<img src="${pointImages[index]}" alt="Point Image" style="max-width: 100px; max-height: 100px;"/>`;
        
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
                color: ['black'],
            },
            line: {
                color: 'purple',
                width:0.7
            },
            width: 0.5,
            showlegend: false,
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
                color: ['black']
            },
            line: {
                color: 'orange',
                width:0.7
            },
            width: 0.5,
            showlegend: false,
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
                color: ['black']
            },
            line: {
                color: 'blue',
                width:0.7
            },
            width: 0.5,
            showlegend: false,
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
                color: ['black']
            },
            line: {
                color: 'red',
                width:0.7
            },
            width: 0.5,
            showlegend: false,
            name: 'Krillin'
        };

        const tracefantasma = {
            x: data.saga,
            y: data.power,
            name: 'Freezer',
            type: 'scatter',
            marker: {
                color: 'purple'
            },
            visible: 'legendonly'
        };

        const tracefantasma2 = {
            x: data.saga,
            y: data.power,
            name: 'Goku',
            type: 'scatter',
            marker: {
                color: 'orange'
            },
            visible: 'legendonly'
        };

        const tracefantasma3 = {
            x: data.saga,
            y: data.power,
            name: 'Vegeta',
            type: 'scatter',
            marker: {
                color: 'blue'
            },
            visible: 'legendonly'
        };

        const tracefantasma4 = {
            x: data.saga,
            y: data.power,
            name: 'Krillin',
            type: 'scatter',
            marker: {
                color: 'red'
            },
            visible: 'legendonly'
        };

        const f1 = {
            x: ['Saga de Namek'],
            y: [220000],
            mode: 'markers+text',
            type: 'scatter',
            marker: {
                color: 'purple',
                size: 10 
            },
            text: ['<b>Freezer</b><br>Calmado'], 
            textposition: 'top left',
            showlegend: false,
        };

        const f2 = {
            x: ['Saga del Capitán Ginyu'],
            y: [530000],
            mode: 'markers+text',
            type: 'scatter',
            marker: {
                color: 'red',
                size: 10
            },
            text: ['<b>Freezer</b><br>Poder Base'], 
            textposition: 'top left',
            showlegend: false,
        };

        const g1 = {
            x: ['Saga de las Fuerzas Especiales Ginyu'],
            y: [90000],
            mode: 'markers+text',
            type: 'scatter',
            marker: {
                color: 'blue',
                size: 10
            },
            text: ['<b>Goku</b><br>Aterriza en Namek'],
            textposition: 'top left',
            showlegend: false,
        };

        const g2 = {
            x: ['Saga del Capitán Ginyu'],
            y: [180000],
            mode: 'markers+text',
            type: 'scatter',
            marker: {
                color: 'blue', // Color del punto
                size: 10 // Tamaño del punto
            },
            text: ['<b>Goku</b><br>Enfrentamiento con<br>el capitán Ginyu'], // Texto en formato HTML
            textposition: 'bottom center', // Posición del texto
            showlegend: false,
        };

        const g3 = {
            x: ['Saga de Freezer'],
            y: [180000000],
            mode: 'markers+text',
            type: 'scatter',
            marker: {
                color: 'blue', 
                size: 10 
            },
            text: ['<b>Goku</b><br>Se transforma en SSJ'],
            textposition: 'top left', 
            showlegend: false,
        };

        const k1 = {
            x: ['Saga de Freezer'],
            y: [75000],
            mode: 'markers+text',
            type: 'scatter',
            marker: {
                color: 'black',
                size: 10 
            },
            text: ['<b>Krillin (Muerto)</b><br>Asesinado por Freezer'], 
            textposition: 'top left', 
            showlegend: false,
        };

        const v1 = {
            x: ['Saga de Freezer'],
            y: [3000000],
            mode: 'markers+text',
            type: 'scatter',
            marker: {
                color: 'black', // Color del punto
                size: 10 // Tamaño del punto
            },
            text: ['<b>Vegeta (Muerto)</b><br>Asesinado por Freezer'], // Texto en formato HTML
            textposition: 'top left', // Posición del texto
            showlegend: false,
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

        Plotly.newPlot('scatter', [trace, f1, f2, trace1, g1, g2, g3, trace2, k1, trace4, v1,
            tracefantasma, tracefantasma2, tracefantasma3, tracefantasma4], layout);
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