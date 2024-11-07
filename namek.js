
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

//Creación del gráfico//

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

async function fetchData1() {
    const response = await fetch('./df.csv');
    const data = await response.text();
    
    // Split data into rows
    const rows = data.split('\n').slice(1);
    
    const char = [];
    const power = [];
    const saga = [];
    
    rows.forEach(row => {
        const cols = row.split(',');
        char.push(cols[1]);
        power.push(parseFloat(cols[2]));
        saga.push(cols[3]);
    });

    return { char, power, saga };
};

function graf1() {
    fetchData1().then(data => {
        let nuevoDiv = document.createElement('div');
        var myPlot = document.getElementById('scatter');

        nuevoDiv.id = 'scatter';
        document.body.appendChild(nuevoDiv);

        var filteredData = data.char.map((c, index) => {
            return c === 'Freezer' ? { char: c, power: data.power[index], saga: data.saga[index] } : null;
        }).filter(item => item);

        const trace = {
            x: filteredData.map(item => item.saga),
            y: filteredData.map(item => item.power),
            type: 'scatter',
            marker: { color: ['black'] },
            line: { color: 'purple', width: 0.7 },
            width: 0.5,
            showlegend: false,
            name: 'Freezer'
        };

        var filteredData1 = data.char.map((c, index) => {
            return c === 'Goku' ? { char: c, power: data.power[index], saga: data.saga[index] } : null;
        }).filter(item => item);

        const trace1 = {
            x: filteredData1.map(item => item.saga),
            y: filteredData1.map(item => item.power),
            type: 'scatter',
            marker: { color: ['black'] },
            line: { color: 'orange', width: 0.7 },
            width: 0.5,
            showlegend: false,
            name: 'Goku'
        };

        var filteredData2 = data.char.map((c, index) => {
            return c === 'Vegeta' ? { char: c, power: data.power[index], saga: data.saga[index] } : null;
        }).filter(item => item);

        const trace2 = {
            x: filteredData2.map(item => item.saga),
            y: filteredData2.map(item => item.power),
            type: 'scatter',
            marker: { color: ['black'] },
            line: { color: 'blue', width: 0.7 },
            width: 0.5,
            showlegend: false,
            name: 'Vegeta'
        };

        var filteredData3 = data.char.map((c, index) => {
            return c === 'Krillin' ? { char: c, power: data.power[index], saga: data.saga[index] } : null;
        }).filter(item => item);

        const trace4 = {
            x: filteredData3.map(item => item.saga),
            y: filteredData3.map(item => item.power),
            type: 'scatter',
            marker: { color: ['black'] },
            line: { color: 'red', width: 0.7 },
            width: 0.5,
            showlegend: false,
            name: 'Krillin'
        };

        const layout = {
            title: {
                text: 'Cronología de Namek con los niveles de poder',
                font: { size: 18, color: 'black' }
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
                font: { size: 14, color: 'black' },
                x: -600,
                y: 1.1,
            },
        };

        data = [trace, trace1, trace2, trace4];
        Plotly.newPlot('scatter', data, layout);

        // Create a div to display the image
        var imageDiv = document.getElementById('hover-image');

        // Image paths for each character
        const characterImages = {
            'Freezer': 'n1.jpg',
            'Goku': 'n4.jpg',
            'Vegeta': 'n4.jpg',
            'Krillin': 'esf2.png'
        };

        // Click event to display image
        myPlot.on('plotly_click', function(eventData) {
            const point = eventData.points[0];
            const character = point.data.name; // Get character name (Freezer, Goku, etc.)

            // Check if the image exists for the character
            if (characterImages[character]) {
                imageDiv.style.display = 'block'; // Show the image
                imageDiv.style.left = `${eventData.event.clientX + 10}px`; // Position near mouse
                imageDiv.style.top = `${eventData.event.clientY + 10}px`;
                imageDiv.innerHTML = `<img src="${characterImages[character]}" alt="${character}" style="max-width: 100px; max-height: 100px;"/>`;
            }
        });
    });
}


//Función de activación//
function activartodo(){
    
    graf1();
    fondo1();
}


//Activación de todas las funciones con la función "activartodo()//
activartodo()