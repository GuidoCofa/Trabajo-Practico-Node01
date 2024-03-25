function invertirString(str) {
    return str.split('').reverse().join('');
}
function concatenarEInvertir(str1, str2) {
    return invertirString(str1 + str2);
}
var resultado = concatenarEInvertir("Escuela", "ORT");
console.log(resultado);
