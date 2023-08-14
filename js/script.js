// Obtener el formulario y el botón de enviar por su ID
const formulario = document.getElementById("formulario-calificar");
const botonEnviar = document.getElementById("btn-enviar");

// Agregar un evento al botón de enviar
botonEnviar.addEventListener("click", function(event) {
    // Detener el envío del formulario por defecto
    event.preventDefault();

    // Aquí puedes agregar cualquier acción creativa que desees
    // Por ejemplo, mostrar una alerta con un mensaje personalizado
    alert("¡Gracias por calificarnos! Tu opinión es muy importante para nosotros.");
    
    // Puedes agregar más acciones aquí, como enviar el formulario a un servidor
});