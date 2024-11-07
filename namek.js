
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
        0: 'n1.jpg',  // Image for the first point
        1: 'n2.jpg',  // Image for the second point
        2: 'n3.jpg',  // Image for the third point
        3: 'n4.jpg',  // Image for the fourth point
        // Add more images here for more points as needed
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

        // Check if an image exists for this index
        if (pointImages[index] !== undefined) {
            imageDiv.style.display = 'block';  // Show the image div
            imageDiv.style.left = `${eventData.event.clientX + 10}px`; // Position near the mouse click
            imageDiv.style.top = `${eventData.event.clientY + 10}px`;

            // Set the image inside the div
            imageDiv.innerHTML = `<img src="${pointImages[index]}" alt="Point Image" style="max-width: 100px; max-height: 100px;"/>`;
        }
    });

    // Hide the image when you click anywhere else on the plot
    plotDiv.on('plotly_relayout', function() {
        imageDiv.style.display = 'none';  // Hide the image div if the plot is re-arranged
    });
}

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
}

// Function to create the plot and handle clicks
function graf1() {
    fetchData1().then(data => {
        let nuevoDiv = document.createElement('div');
        nuevoDiv.id = 'scatter';
        document.body.appendChild(nuevoDiv);

        // Create the traces for each character
        const createCharacterTrace = (characterName, color, lineColor) => {
            var filteredData = data.char.map((c, index) => {
                return c === characterName ? { char: c, power: data.power[index], saga: data.saga[index] } : null;
            }).filter(item => item);

            return {
                x: filteredData.map(item => item.saga),
                y: filteredData.map(item => item.power),
                type: 'scatter',
                marker: { color: ['black'] },
                line: { color: lineColor, width: 0.7 },
                width: 0.5,
                showlegend: false,
                name: characterName
            };
        };

        // Create the traces for all characters
        const traceFreezer = createCharacterTrace('Freezer', 'black', 'purple');
        const traceGoku = createCharacterTrace('Goku', 'black', 'orange');
        const traceVegeta = createCharacterTrace('Vegeta', 'black', 'blue');
        const traceKrillin = createCharacterTrace('Krillin', 'black', 'red');

        // Layout settings for the plot
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

        // Combine all traces into a single array
        const dataToPlot = [
            traceFreezer, traceGoku, traceVegeta, traceKrillin
        ];

        // Create the plot
        Plotly.newPlot('scatter', dataToPlot, layout);

        // Call showPointImage after rendering the plot
        showPointImage();
    });
}

// Función de activación//
function activartodo() {
    graf1();
    fondo1();
}

// Activación de todas las funciones con la función "activartodo()"
activartodo();
