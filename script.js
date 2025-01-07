function mostrarServicio(servicioId) {
    // Oculta todos los servicios
    const servicios = document.querySelectorAll('.servicio');
    servicios.forEach(servicio => servicio.style.display = 'none');

    // Muestra el servicio seleccionado
    const servicioSeleccionado = document.getElementById(servicioId);
    servicioSeleccionado.style.display = 'block';

    // Asegura que el contenedor general sea visible
    document.getElementById('detalle-servicio').style.display = 'block';
}
