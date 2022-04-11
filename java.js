const btnEnvio=document.getElementById("enviarcorreo");
btnEnvio.addEventListener('click', function(e) {
    e.preventDefault();
    const nombre=document.getElementById("nombre").value  ;
    const apellido=document.getElementById("apellido").value;
    const mensaje=document.getElementById("mensaje").value;
    windows.location.href='mailto: nicolasrcastellini@gmail.com subject=envioDesdeFormulario&body=nombre%3A${nombre}%0Aapellido%3A&{apellido}%0Amensaje%3A&{mensaje}';
})