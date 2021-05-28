const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de Submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar el formulario
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'true');
        
        return
    }
    
    //Crear alerta de enviado correctamente
    mostrarAlerta('Mensaje enviado correctamente');
})

function leerTexto(e) {
    datos[e.target.id] = e.target.value
} 

function mostrarAlerta (mensaje, error = null) {
    const alerta = document.createElement('p')
    
    alerta.textContent = mensaje;

    console.log(error);
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparecer despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}