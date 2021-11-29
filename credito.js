const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formularioTarjeta = document.querySelector('#formulario-tarjeta'),
	  logoMarca = document.querySelector('.logo-marca');
const numeroTarjeta = document.querySelector('#tarjeta .numero');
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
const firma = document.querySelector('#tarjeta .firma p');
const mesExpiracion = document.querySelector('#expiracion .mes');
const yearExpiracion = document.querySelector('#expiracion .year');
const ccv = document.querySelector('#ccv .ccv');
	

const mostrarFrente = ()=>{
	if(tarjeta.classList.contains('active')){
			tarjeta.classList.remove('active');
	}
};
//* ROTACION DE LA TARJETA

tarjeta.addEventListener('click',()=>{
	tarjeta.classList.toggle('active');
});

//* BOTON DE ABRIR FORMULARIO

btnAbrirFormulario.addEventListener('click',()=>{
	btnAbrirFormulario.classList.toggle('active');
	formularioTarjeta.classList.toggle('active');
});

//* SELECT DEL MES GENERADO AUTOMATICAMENTE

for(let i = 1; i <=12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerHTML = i;
	formularioTarjeta.selectMes.appendChild(opcion);
}

//* SELECT DEL AÑO GENERADO AUTOMATICAMENTE

let yearActual = new Date().getFullYear();

for(let i = yearActual; i <= yearActual + 8; i++){
	let year = document.createElement('option');
	year.value = i;
	year.innerHTML = i;
	formularioTarjeta.selectYear.appendChild(year);
}

//* input Numero de tarjeta

	formularioTarjeta.inputNumero.addEventListener('keyup',(e)=>{

		let ValorInput = e.target.value;

		formularioTarjeta.inputNumero.value = ValorInput
		//*Eliminando espacios en blanco
		.replace(/\s/g, '')
		//*Eliminar letras
		.replace(/\D/g, '')
		//ponemos espacios cada cuatro numeros
		.replace(/([0-9]{4})/g, '$1 ')
		//elimina el ultimo espaciado
		.trim();
		numeroTarjeta.textContent = ValorInput;

		if (ValorInput == "") {
			numeroTarjeta.textContent = "#### #### #### ####";
			logoMarca.innerHTML = '';
		}

		if (ValorInput[0] == 4) {
			logoMarca.innerHTML = '';
			const img = document.createElement('img');
			img.src = "visa.png";
			logoMarca.appendChild(img);

		}else if(ValorInput[0] == 5){
			logoMarca.innerHTML = '';
			const img = document.createElement('img');
			img.src = "mastercard.png";
			logoMarca.appendChild(img);
		}

		mostrarFrente();

	});

//* input Nombre de tarjeta

formularioTarjeta.inputNombre.addEventListener('keyup',(e)=>{
	let ValorInput = e.target.value;

	formularioTarjeta.inputNombre.value = ValorInput
	.replace(/[0-9]/g, '');

	nombreTarjeta.textContent = ValorInput;


	firma.textContent = ValorInput;

	if (ValorInput == "") {
		nombreTarjeta.textContent = "JHON DOE";
	}
	mostrarFrente();

})

//*select mes

formularioTarjeta.selectMes.addEventListener('change',(e)=>{
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
})
//*select año

formularioTarjeta.selectYear.addEventListener('change',(e)=>{
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();

})

//* CCV

formularioTarjeta.inputCCV.addEventListener('keyup',(e)=>{
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formularioTarjeta.inputCCV.value = formularioTarjeta.inputCCV.value
	.replace(/\s/g, '')
	.replace(/\D/g, '');

	ccv.textContent = formularioTarjeta.inputCCV.value;
})