// Define diferentes conjuntos de colores
const colorSets = [
    {
        '--blue': '#060215',
        '--white': '#fff',
        '--gray': '#f5f5f5',
        '--black1': '#C2BDBD',
        '--black2': '#FF9E9E'
    },
    {
        '--blue': '#E6E5E5',
        '--white': '#222',
        '--gray': '#ccc',
        '--black1': '#000',
        '--black2': '#888'
    },
    {
        '--blue': '#CEB2E6',
        '--white': '#444',
        '--gray': '#bbb',
        '--black1': '#333',
        '--black2': '#666'
    },
    {
        '--blue': '#018744',
        '--white': '#fff',
        '--gray': '#f5f5f5',
        '--black1': '#C2BDBD',
        '--black2': '#FF9E9E'
    }
];

let currentColorSetIndex = 0; // Índice del conjunto de colores actual

// Función para aplicar los colores del conjunto actual
function applyCurrentColors() {
    const currentColors = colorSets[currentColorSetIndex];
    Object.keys(currentColors).forEach(key => {
        document.documentElement.style.setProperty(key, currentColors[key]);
    });
}

// Evento click en el botón
document.getElementById('colorOption').addEventListener('click', function() {
    // Incrementa el índice para cambiar al siguiente conjunto de colores
    currentColorSetIndex++;
    if (currentColorSetIndex >= colorSets.length) {
        currentColorSetIndex = 0; // Vuelve al primer conjunto cuando llega al final
    }
// Ejemplo de cambio de color
    // Aplica los colores del conjunto actual
    applyCurrentColors();
});

// Aplica el primer conjunto de colores al cargar la página
applyCurrentColors();

