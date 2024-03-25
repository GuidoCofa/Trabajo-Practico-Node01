let datos;

function manejarError() {
    console.log("Error en la URL");
    return {
        host: "",
        pathname: "",
        parametros: ""
    };
}

function extraerParametros(searchParams) {
    const parametros = {};
    for (const [clave, valor] of searchParams.entries()) {
        parametros[clave] = valor;
    }
    return parametros;
}

try {

    let miUrl = new URL("https://nodejs.org/api/url.html#the-whatwg-url-api");

    let host = miUrl.host;
    let pathname = miUrl.pathname;
    let parametros = extraerParametros(miUrl.searchParams);

    datos = {
        host,
        pathname,
        parametros
    };
    
} catch (error) {

    datos = manejarError();
}

console.log(datos);
