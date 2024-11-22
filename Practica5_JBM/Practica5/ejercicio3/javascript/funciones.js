function mostrarContenedor1() {
    document.getElementById("contenedor1").classList.remove("oculto");
    document.getElementById("contenedor2").classList.add("oculto");
}

function mostrarContenedor2() {
    document.getElementById("contenedor1").classList.add("oculto");
    document.getElementById("contenedor2").classList.remove("oculto");
}


