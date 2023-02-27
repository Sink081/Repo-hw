function laCajaDePandora(numero) {
	// proximamente escribiremos codigo aqui
	if (numero % 2 === 0) {
		let num = numero;
		let binary = (num % 2).toString();
		for (; num > 1; ) {
			num = parseInt(num / 2);
			binary = (num % 2) + binary;
		}
		return binary;
	}

	return numero.toString(16);
}

function diegoMaldonado() {
	return { nombre: "Diego", apellido: "Maldonado", nacionalidad: "Argentino" };
}
