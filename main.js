import "https://cdn.plot.ly/plotly-2.34.0.min.js"; // Importa la librería Plotly para gráficos
import Protobject from './js/protobject.js'; // Importa el objeto Protobject para la comunicación

// Crea un contenedor para el gráfico en el cuerpo del documento
document.body.innerHTML = `
    <!-- SVG background (you can customize this as needed) -->
    <svg id="fondo1"></svg>

    <!-- Graph Container -->
    <div id="scatter"></div>

    <!-- Image Display (hidden by default) -->
    <div id="hover-image"></div>

    <!-- Title and Subtitle -->
    <label id="titulo" class="title">¿Cómo varía la fuerza en Namekusei?</label>
    
    <style>

    body {
        background-color: rgb(49, 162, 222);
        position: relative
    }

    /*Fondos que permiten agregar estilo*/
    #fondo1 {
        /* background-color: rgb(115, 161, 247); */
        position: absolute;
        /* border: 6px solid rgb(62, 65, 164); */
        display: flex;
        right: 50px;
        top: 115px;
        border-radius: 30px;
    }


    /*Label de titulos y subtitulos*/

    .title {
        color: rgb(239, 242, 255);
        font-weight: bold;
        margin-bottom: 20px;
        align-items: center;
        position: absolute;
        display: flex;
    }

    #titulo {
        top: 10px;
        right: 50px;
        font-size: 56px;
        font-family: sans-serif;
        /* background-color: rgb(115, 161, 247); */
        /* border: 6px solid rgb(62, 65, 164); */
        justify-content: center;
        align-items: center;
        display: flex;
        width: 1755px;
        border-radius: 30px;
    }

    /*Gráfico*/

    #scatter {
        position:absolute;
        top: 120px;
        right: 170px;
        display: flex;
        border: 5px solid rgba(255, 163, 87, 0.685);
    }

    #esfera1 {
        top: 825px;
        right: 1405px;
        background-image: url(n1.jpg);
        width:100px; 
        height:50px;
        background-position: center;
        background-size: cover;
        position: absolute;
        display: flex;
    }
    #esfera2 {
        top: 825px;
        right: 1030px;
        background-image: url(n2.jpg);
        width:100px; 
        height:50px;
        background-position: center;
        background-size: cover;
        position: absolute;
        display: flex;
    }
    #esfera3 {
        top: 825px;
        right: 650px;
        background-image: url(n3.jpg);
        width:100px; 
        height:50px;
        background-position: center;
        background-size: cover;
        position: absolute;
        display: flex;
    }
    #esfera4 {
        top: 825px;
        right: 280px;
        background-image: url(n4.jpg);
        width:100px; 
        height:50px;
        background-position: center;
        background-size: cover;
        position: absolute;
        display: flex;
    }
    #exampleModal {
        top: 825px;
        right: 280px;
        width:100px; 
        height:50px;
        background-position: center;
        background-size: cover;
        position: fixed;
        display: flex;
    }
    #hover-image {
        position: absolute;
        display: none;
        z-index: 9999;
    }

    #hover-image img {
        max-width: 100px;
        max-height: 100px;
        padding: 5px;
    }
    </style>
    
`;


//Creación del mapa de sagas de Namek//
//esto es come el arauco empiesa creo la verdad no se si funvciona entonces esta bien y si no no //

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
        220000: 'https://srgarzito.github.io/IIC2026-Proyecto/f1.gif', 
        30000: 'https://srgarzito.github.io/IIC2026-Proyecto/v1.gif',  
        13000: 'https://srgarzito.github.io/IIC2026-Proyecto/k1.gif',  
        12000: 'https://srgarzito.github.io/IIC2026-Proyecto/g1.gif',  
        220001: 'https://srgarzito.github.io/IIC2026-Proyecto/f2.gif', 
        90001: 'https://srgarzito.github.io/IIC2026-Proyecto/g2.gif',  
        40001: 'https://srgarzito.github.io/IIC2026-Proyecto/v2.gif',  
        13001: 'https://srgarzito.github.io/IIC2026-Proyecto/k2.gif',
        530002: 'https://srgarzito.github.io/IIC2026-Proyecto/f3.gif', 
        250002: 'https://srgarzito.github.io/IIC2026-Proyecto/v3.gif',  
        180002: 'https://srgarzito.github.io/IIC2026-Proyecto/g3.gif',  
        18002: 'https://srgarzito.github.io/IIC2026-Proyecto/k3.gif',
        180000003: 'https://srgarzito.github.io/IIC2026-Proyecto/g4.gif', 
        120000003: 'https://srgarzito.github.io/IIC2026-Proyecto/f4.gif',  
        3000003: 'https://srgarzito.github.io/IIC2026-Proyecto/v4.gif',  
        75003: 'https://srgarzito.github.io/IIC2026-Proyecto/k4.gif',
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
        imageDiv.style.display = 'block';  
        imageDiv.style.right = `720px`; 
        imageDiv.style.top = `220px`;

        var audio = new Audio('https://srgarzito.github.io/IIC2026-Proyecto/button.mp3');
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
    const response = await fetch('https://srgarzito.github.io/IIC2026-Proyecto/df.csv');
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
//el mero echo de poner la lesera rompe todo el codigo
Protobject.onReceived((order) => {
	console.log(order[0])
  
   	const imageDiv = document.createElement('div');
    imageDiv.id = 'hover-image';
    imageDiv.style.position = 'absolute';
    imageDiv.style.display = 'none';  // Initially hidden
    document.body.appendChild(imageDiv);

    // Here we'll associate each point with an image using its index.
    // You can adjust the naming pattern for images based on your needs.
    // For example, using the power and saga values to generate a key or just using a sequential index.
    const pointImages = {
        101: 'https://srgarzito.github.io/IIC2026-Proyecto/f1.gif', 
        102: 'https://srgarzito.github.io/IIC2026-Proyecto/v1.gif',  
        103: 'https://srgarzito.github.io/IIC2026-Proyecto/k1.gif',  
        104: 'https://srgarzito.github.io/IIC2026-Proyecto/g1.gif',  
        201: 'https://srgarzito.github.io/IIC2026-Proyecto/f2.gif', 
        204: 'https://srgarzito.github.io/IIC2026-Proyecto/g2.gif',  
        202: 'https://srgarzito.github.io/IIC2026-Proyecto/v2.gif',  
        203: 'https://srgarzito.github.io/IIC2026-Proyecto/k2.gif',
        301: 'https://srgarzito.github.io/IIC2026-Proyecto/f3.gif', 
        302: 'https://srgarzito.github.io/IIC2026-Proyecto/v3.gif',  
        304: 'https://srgarzito.github.io/IIC2026-Proyecto/g3.gif',  
        303: 'https://srgarzito.github.io/IIC2026-Proyecto/k3.gif',
        404: 'https://srgarzito.github.io/IIC2026-Proyecto/g4.gif', 
        401: 'https://srgarzito.github.io/IIC2026-Proyecto/f4.gif',  
        402: 'https://srgarzito.github.io/IIC2026-Proyecto/v4.gif',  
        403: 'https://srgarzito.github.io/IIC2026-Proyecto/k4.gif',
    };


        imageDiv.style.display = 'block';  
        imageDiv.style.right = `720px`; 
        imageDiv.style.top = `220px`;



if (
    order[0] + order[1] !== 100 &&
    order[0] + order[1] !== 200 &&
    order[0] + order[1] !== 300 &&
    order[0] + order[1] !== 400 &&
    order[0] + order[1] !== 500 &&
    order[0] + order[1] !== 600 &&
    order[0] + order[1] !== 700
) {
  console.log(order)
    imageDiv.innerHTML = `<img src="${pointImages[order[0] + order[1]]}" alt="Point Image" style="max-width: 1000px; max-height: 1000px;"/>`;
}

});