function mostrarServicio(servicioId) {
    // Obtener el elemento del servicio que corresponde al id pasado
    const servicio = document.getElementById(servicioId);

    // Verificar si el servicio está visible
    if (servicio.style.display === "none" || servicio.style.display === "") {
        // Si está oculto, lo mostramos
        servicio.style.display = "block";
    } else {
        // Si está visible, lo ocultamos
        servicio.style.display = "none";
    }
    
    // Asegura que el contenedor general sea visible
    document.getElementById('detalle-servicio').style.display = 'block';
}
