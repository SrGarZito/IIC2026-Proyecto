import Protobject from './js/protobject.js';
import Aruco from './js/aruco.js';

// Función para encontrar los dos marcadores más cercanos por sus posiciones Y
function encontrarNumerosMasCercanos(lista) {
  if (lista.length < 2) {
    return null; // No hay suficientes números para comparar
  }

  // Ordenar la lista de menor a mayor según las posiciones Y
  lista.sort((a, b) => a.y - b.y);

  // Inicializar la diferencia mínima como un número muy grande
  let diferenciaMinima = Infinity;
  let markersMasCercanos = [];

  // Iterar por la lista para encontrar la menor diferencia entre posiciones Y consecutivas
  for (let i = 0; i < lista.length - 1; i++) {
    let diferencia = lista[i + 1].y - lista[i].y;
    if (diferencia < diferenciaMinima) {
      diferenciaMinima = diferencia;
      markersMasCercanos = [lista[i], lista[i + 1]]; // Guardar los dos marcadores más cercanos
    }
  }

  // Devolver los IDs de los dos marcadores más cercanos
  return [markersMasCercanos[0].id, markersMasCercanos[1].id];
}

// Inicializa el sistema de detección de marcadores Aruco
Aruco.start(1000, 0); // La cámara genera eventos cada 30 ms y utiliza la cámara con id 1
Aruco.showPreview({ top: 0, left: 0, width: 1280 / 3, height: 720 / 3 }); // Muestra la vista previa de la cámara

// Escucha los datos de los marcadores Aruco
Aruco.onData((data) => {
  //console.log(data); // Muestra los datos en la consola para depuración

  // Identificadores de marcadores que se desea verificar
  const markerIds = [200, 1, 100, 300, 400, 2, 3, 4]; 
  let markers = []; // Array para almacenar los marcadores detectados

  // Recorre los identificadores de marcadores y verifica su presencia en los datos
  for (const id of markerIds) {
    if (data[id]) {
      // Si el marcador está presente, guarda su id y posición en el eje Y
      markers.push({ id: id, y: data[id].position.y });
    }
  }

  // Llama a la función para encontrar los dos marcadores más cercanos por sus posiciones Y
  const idsMasCercanos = encontrarNumerosMasCercanos(markers);

  console.log(idsMasCercanos); // Muestra los IDs de los dos marcadores más cercanos

  // Envía los IDs ordenados al sistema principal
  Protobject.send(idsMasCercanos).to('namek.js');
});