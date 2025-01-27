function mostrarServicio(servicioId) {
    // me sirve para Obtener todos los servicios
    const servicios = document.querySelectorAll('.servicio');

    // esto Recorre todos los servicios y ocultarlos
    servicios.forEach(servicio => {
        if (servicio.id === servicioId) {
            // Me muestra el servicio seleccionado si está oculto
            servicio.style.display = servicio.style.display === 'block' ? 'none' : 'block';
        } else {
            // Oculta los otros servicios
            servicio.style.display = 'none';
        }
    });

    //  me Asegura que el contenedor general sea visible
    document.getElementById('detalle-servicio').style.display = 'block';
}
