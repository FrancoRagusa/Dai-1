let miUrl = null;
let miObjeto = null;

miObjeto = parsearUrl('https://nodejs.org/api/url.html#the-whatwg-url-api');
console.log(miObjeto);

function parsearUrl(laUrl)
{
    const miUrl = new URL(laUrl)
    let miObjeto = {
        pathname: "" ,
        search: "" ,
        hash: "" ,

    }
    miObjeto.pathname = miUrl.pathname
    miObjeto.search = miUrl.search
    miObjeto.hash = miUrl.hash

    console.log(miObjeto)

}