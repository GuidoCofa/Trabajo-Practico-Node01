const parsearUrl = (datos) => {
    let miUrl = new URL(datos)
    let host = miUrl.host
    let pathname = miUrl.pathname
    let searchParams = miUrl.searchParams
    return {
        host,
        pathname,
        "parametros" :  searchParams
    }
}
let MiObjeto = parsearUrl("https://nodejs.org/api/url.html#the-whatwg-url-api")
console.log(MiObjeto)