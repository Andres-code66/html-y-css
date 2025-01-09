function mostrarServicio(servicioId) {
    // Obtener todos los servicios
    const servicios = document.querySelectorAll('.servicio');

    // Recorrer todos los servicios y ocultarlos
    servicios.forEach(servicio => {
        if (servicio.id === servicioId) {
            // Mostrar el servicio seleccionado si está oculto
            servicio.style.display = servicio.style.display === 'block' ? 'none' : 'block';
        } else {
            // Ocultar los otros servicios
            servicio.style.display = 'none';
        }
    });

    // Asegura que el contenedor general sea visible
    document.getElementById('detalle-servicio').style.display = 'block';
}
