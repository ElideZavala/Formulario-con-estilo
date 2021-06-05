const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
	label.innerHTML = label.innerText // <== Para cada letra del label
		.split('') // <== Cada letra la separamos por un espacio vacio	
		.map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // <== Creamos un nuevo elemento con las letras separadas. 
		.join(''); // <== Unimos los elementos 

})