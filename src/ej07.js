import { getCurrencyAbbreviation, getCountryByAbbreviation } from 'currency-map-country';

let codigoPais;
codigoPais = 'AR'
codigoPais = getCountryByAbbreviation(codigoPais)
console.log(`La moneda del país ${codigoPais} es: ${getCurrencyAbbreviation(codigoPais)}`)
