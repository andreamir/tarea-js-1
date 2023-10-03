// alert ("JavaScript funcionando correctamente");
let variableSinValor
let booleano1 = true
let booleano2 = false
const PI = 3.1416
const TAU = 2*PI
const miNombre = "Drea"
let miNumeroFav = 7
const booleano3 = true
console.log (miNombre.length)
console.log(typeof miNumeroFav)
console.log ('Mi nombre es ' + miNombre +' y mi número favorito es el ' + miNumeroFav + ' .')
const crack1 = 'Seré una crack en JavaScript al terminar el bootcamp'
console.log (crack1.toUpperCase())
const crack2 = 'Hola soy un crack'
console.log (crack2.substring(0,5))
miNumeroFav = "7"
console.log(typeof miNumeroFav)
const variable = "Lorena"
console.log (`Mi nombre es ${variable} y mi número favorito es el ${miNumeroFav}.`)
console.log(PI.toFixed(2))


let arrayVacio 
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const arrayNumerosPares =  [0, 2, 4, 6, 8]
arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
const holaMundo =  ['Hola', 'Mundo']
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']
const arrayDeArrays =  [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
console.log (loGuardoTodo.length)
loGuardoTodo.push('estás')
console.log(loGuardoTodo [1])
loGuardoTodo[6]= 'Euralio'
console.log(loGuardoTodo[6])


const coche = {
    marca: "kia",
    modelo: "niro",
    matricula: "6666GGG"
}
const casa = {
    codPostal: "08107",
    calle: "Huerta",
    portal: 23,
    piso: 3,
}
const FullStackDeveloper = {
    arrayLenguajes : ['javascript', 'php'],
    arrayProyectos : ['mi página personal', 'carta con css']
}
const perro = {
    nombre: 'Toby',
    raza: 'Cocker Spaniel',
    color: 'Marrón',
    edad: 4,
}
const noticia = {
    titular: 'El Nobel de Medicina para Karikó y Weisman por sus investigaciones en la vacuna contra la covid',
    cuerpo: ' El Premio Nobel de Medicina o Fisiología 2023 es para Katalin Karikó y Drew Weissman por sus investigaciones relacionadas con las vacunas ARN mensajero contra la covid-19, informó la Asamblea Nobel del Instituto Karolinska de Estocolmo.Los descubrimientos de Karikó -húngaroestadounidense- y Weissman -estadounidense- “fueron fundamentales para desarrollar vacunas de ARNm eficaces contra la covid-19 durante la pandemia que comenzó a principios de 2020”, explicó la entidad sueca al anunciar el galardón.'
}
const persona = {
    nombre: 'Mónica',
    apellidos: 'Garza Vega',
    edad: 34,
}
console.log(persona.nombre)
console.log(FullStackDeveloper.arrayLenguajes)
const portatil = {
    marca: 'Apple',
}
console.log (portatil.marca)
console.log(typeof portatil.marca)
const concierto = {
    grupos : ['Evanescence', 'Bring Me The Horizon', 'My Chemical Romance'],
}
console.log (concierto.grupos)

const led = {
    lampara1 : 'rojo',
    lampara2: 'verde',
    lampara3: 'azul',
}
const RGB = Object.values(led)
console.log(RGB)

const O_Error = {
    codigo: 404
}
console.log (typeof O_Error.codigo)

const grupo = {
    integrantes : ['Lorena', 'Mónica', 'Toby', 'Euralio'],
}
console.log (grupo.integrantes[3])
const impresora = {
    tinta: ['rojo', 'verde', 'azul',]
}
const nivelesTinta = Object.values(impresora.tinta)
console.log (nivelesTinta)

const movil = {
    especificaciones: 'Ya no sé qué poner :)'
}
console.log (movil.especificaciones)

portatil.marca = 'MSI'
console.log (portatil.marca)
concierto.grupos.push("Guns N' Roses")
console.log (concierto.grupos)
concierto.date = new Date(2023, 3, 27)
console.log(concierto.date)
concierto.date = new Date(2023, 10, 3)
console.log(concierto.date)
grupo.integrantes.pop()
console.log(grupo.integrantes.length)