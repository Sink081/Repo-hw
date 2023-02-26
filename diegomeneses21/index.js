function laCajaDePandora(numero) {
    // proximamente escribiremos codigo aqui
    if (numero % 2 === 0) {
        var result = "";
        while (numero > 0) {
            result = numero % 2 + result;
            numero = Math.floor(numero / 2)
        }
        return result;
    }
    return numero.toString(16);
}
