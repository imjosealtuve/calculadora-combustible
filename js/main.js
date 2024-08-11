function calcularCombustible(){
    let km = document.getElementById('txtKM').value;
    let autonomia = document.getElementById('txtAutonomia').value;
    let resultado = document.getElementById('txtResultado');

    let cantLitros = Math.ceil(km/autonomia);

    resultado.textContent = '📍 ' + (cantLitros).toFixed(2) + 'lts';
}
function calcularCombustible2(){
    let km = document.getElementById('txtKM').value;
    let autonomia = document.getElementById('txtAutonomia').value;
    let resultado = document.getElementById('txtResultado');

    let cantGalones = Math.ceil(km/autonomia);

    resultado.textContent = '📍 ' + (cantGalones/4.546).toFixed(2) + ' galones';
}