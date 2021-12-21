const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
 
    nombre: /^[a-zA-ZÁ\s]{1,40}$/, //letras y espacios, pueden llevar acentos.
    servicio:/^[a-zA-Z0-9\_\-]{4,16}$/, // letras, numeros, guion y guion_bajo
    vehiculo:/^[a-zA-Z0-9\_\-]{4,16}$/, // letras, numeros, guion y guion_bajo
    aseguradora:/^[a-zA-Z0-9\_\-]{4,16}$/, // letras, numeros, guion y guion_bajo
    //fecha:true, // letras, numeros, guion y guion_bajo
    //horario:true, // letras, numeros, guion y guion_bajo
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/,
    telefono:/^\d{7,14}/
}

const campos = {
	nombre: false,
    servicio: false,
    vehiculo: false,
    aseguradora: false,
    //fecha: true,
    //horario: true,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "servicio":
			validarCampo(expresiones.nombre, e.target, 'servicio');
		break;
        case "aseguradora":
			validarCampo(expresiones.nombre, e.target, 'aseguradora');
		break;
        //case "fecha":
		//	validarCampo(expresiones.nombre, e.target, 'fecha');
		//break;
        //case "horario":
		//	validarCampo(expresiones.nombre, e.target, 'horario');
		//break;
    
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.servicio && campos.vehiculo && campos.correo && campos.telefono && terminos.aseguradora){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});