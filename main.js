console.log("Hello World")

// Declaración de Variables

let nombre = 'Juan'
let edad = 25
let ciudad = "Medellín"

// Uso de variables

console.log("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ".")

// Sobrescribir Variables

ciudad = "Bogotá"

console.log("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ".")

// numeros

let num1 = 10
let num2 = 5
let suma = num1 + num2
console.log(suma)

// strings

let frase1 = "Hola, "
let frase2 = "mundo!"
let saludo = frase1 + frase2
console.log(saludo)

// tipos de datos
let edad2 = 30
console.log(typeof edad2)

let mensaje = 'Hola mundo'
console.log(typeof mensaje)

mensaje = 100
console.log(typeof mensaje)

let esEstudiante = true
console.log(typeof esEstudiante)

let sinDefinir
console.log(typeof sinDefinir)

let nada = null
console.log(typeof nada)

let simbolo = Symbol("miSimbolo")
console.log(typeof simbolo)

// alert('mensaje')

// let valor = prompt('holla')
// console.log(valor)

const a = 5
console.log(a)
console.log(typeof a)
// a = 10 // TypeError

const b = 'hola'
console.log(b)


// hoisting
c = 19
console.log(c)

var c = 15
console.log(c)
c = 'hello'
console.log(c)

// d = 50 // ReferenceError
// console.log(d)

let d = 20
console.log(d)

// operadores basicos

let x = 10
let y = 2

console.log(x + y) // 12
console.log(x - y) // 8
console.log(x * y) // 20
console.log(x / y) // 5
console.log(x % y) // 0
console.log(8 * 2 + 5) // 21
console.log(5 + 2 * 8) // 21

// operador de incremento y decremento

let num = 0
num++ // num = num + 1
console.log(num) // 1
num--
console.log(num) // 0

// operador de asignación

let val = 10

val += 5;
console.log(val); // 15
val -= 2
console.log(val) // 13
val *= 3
console.log(val) // 39
val /= 13
console.log(val) // 3
val %= 2
console.log(val) // 1

// operadores de comparación

x = 5
y = '5'

let sonIguales = x == y
console.log(sonIguales)
sonIguales = x === y
console.log(sonIguales)
console.log(x != y)
console.log(x !== y)

// 2. Conversor de temperaturas

let temperaturaCelsius = 0; // Temperatura inicial en Celsius
let temperaturaFahrenheit = temperaturaCelsius * 9/5 + 32; // Convierte a Fahrenheit
console.log(temperaturaCelsius + " grados Celsius son " + temperaturaFahrenheit + " grados Fahrenheit.");

temperaturaFahrenheit = 100; // Temperatura inicial en Fahrenheit
temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9; // Convierte a Celsius
console.log(temperaturaFahrenheit + " grados Fahrenheit son " + temperaturaCelsius + " grados Celsius.");

// Strings - Cadena de caracteres

let cadena1 = "Hola"
let cadena2 = 'Mundo'
let cadenaFinal = cadena1 + " " + cadena2
console.log(cadenaFinal)

// longitud de la cadena
let miCadena = "Hola, Mundo! de la programación"
console.log(miCadena.length)

// convertir a mayusculas y minusculas
console.log(miCadena.toUpperCase())
console.log(miCadena.toLowerCase())

// acceso a caracteres especificos de la cadena
console.log(miCadena[6])
console.log(miCadena[11])
console.log(miCadena[miCadena.length - 1])

// buscar una letra especifica
console.log(miCadena[miCadena.indexOf('!')])

// encontrar subcadena
let subcadena = 'Carro'
if (miCadena.includes(subcadena)) {
    console.log('la cadena ' + subcadena + ' se encontró en la frase')
} else {
    console.log('la cadena ' + subcadena + ' no se encontró en la frase')
}

// reemplazar subcadena 
let subcadenaReemplazar = 'Mundo'
let nuevaSubcadena = 'Universo'
let nuevaCadena = miCadena.replace(subcadenaReemplazar, nuevaSubcadena)
console.log(nuevaCadena)

// dividir cadena
let texto = 'Javascript es un lenguaje de programación muy popular'
let palabras = texto.split(' ')
console.log(palabras)

// invertir una palabra
// ej si tengo la palabra "casa" quiero que el resultado sea "asac"
let palabra = 'casa'
console.log(palabra.split('').reverse().join(''))

// String literals
const miNombre = 'Juan'
let literal = `Mi nombre es ${miNombre} y tengo ${30 + 3} años`
console.log(literal)

let poema = `En un lugar de la Mancha,
de cuyo nombre no quiero acordarme,
no ha mucho tiempo que vivía un hidalgo...`;
console.log(poema);

let variable1 = 5;
let variable2 = 10;
console.log(`El resultado de sumar ${variable1} y ${variable2} es ${variable1 + variable2}`);

let cita = `Ella dijo: "Seguro", y añadió: 'No hay problema alguno'.`;
console.log(cita);

// if / else 

let miEdad = 15
if (miEdad >= 18) {
    console.log('Eres mayor de edad')
} else {
    console.log('Eres menor de edad')
}

// let num1 = 10;
// let num2 = 20;
// if (num1 > num2) {
//     console.log(`${num1} es mayor que ${num2}.`);
// } else if (num1 < num2) {
//     console.log(`${num1} es menor que ${num2}.`);
// } else {
//     console.log(`${num1} es igual a ${num2}.`);
// }

// verificar si un número es par o impar
let numero = 15
if (numero % 2 === 0) {
    console.log('El número es par')
} else {
    console.log('El número es impar')
}

// Conversión y Coerción
let cadena = "123"
console.log(Number(cadena)) 
console.log(typeof NaN) // Not a Number

let numeroConvertir = 456
console.log(String(numeroConvertir))

console.log(123 + "456") // Coerción

console.log(10 == "10") // true

console.log("5" + 3) // 53
console.log("5" - 2) // 3
console.log([1, 2, 3] == '1,2,3') // true

// Falsey

// 0
// null
// undefined
// ''
// NaN
// false

// Truthy
// todos los otros

var num3 = []
if (num3) {
    //
}
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(''))
console.log(Boolean(NaN))

console.log(Boolean([]))
console.log(Boolean({}))

// Operadores de igualdad
// ==, ===
// !=, !==

console.log(1 == "1")
console.log(1 === "1")
console.log('' == false) // true
console.log('' === false)
console.log(' ' == false)
console.log(Number(' ')) // true

// true -> 1
// false -> 0

console.log(1 !== '1') // true
console.log(1 !== 1) // false

// Operadores Logicos
// AND -> &&
// OR -> ||

console.log(true && true)
console.log(true && false)
console.log(true || false)
console.log(false || false)

// NOT -> !

console.log(!true)
console.log(!false)
console.log(!!false)

let mensajeAMostrar = ''
if (!mensajeAMostrar) {
    // ejecute algo
    // error
}
// siga con el programa

// precedencia operadores logicos 
console.log(false && false || true && true) // true
console.log(false && (false || true) && true) // false
console.log(false || true && true || false) // true

// operadores logicos con valores no boolean
console.log('Javascript' && 'ECMAScript') // 'ECMAScript'
console.log('' || 'ECMAScript') // 'ECMAScript'

const mensajeIngresado = 'Hola'
const mensajeFinal = mensajeIngresado || 'Mensaje por defecto'
console.log(mensajeFinal)

const str = 'abcdefgh'
console.log(str.slice(0, 4))

// const text = a.indexOf(b) === -1 ? a + b : b + a

const numtest = Number(1)

// Functions

// named functions

function miFuncionNombrada(param1, param2) {
    // codigo de la función
    console.log('miFuncionNombrada', param1, param2)
}

miFuncionNombrada(1, 2)

// unamed functions

const miFuncionAnonima = function (param1, param2) {
    // codigo de la función
    console.log('miFuncionAnonima', param1, param2)
}
console.log(typeof miFuncionAnonima)
miFuncionAnonima(3, 4)

// arrow function

const miFuncionArrow = (param1, param2) => {
    // codigo de la función
    console.log('miFuncionArrow', param1, param2)
}
miFuncionArrow(5, 6)

// Scope / Context

// tipos de Scope

// Global, Function, Block

const miVariable = 'hola' // global
function miFuncion() { // function
    // console.log(miVariable)
    const miVariable2 = 'mundo'
    console.log(miVariable2)
    const miVariable = 'hola de nuevo'
    console.log(miVariable)

    function funcion2() {

    }
}
miFuncion()
console.log(miVariable)
// console.log(miVariable2) // Uncaught ReferenceError: miVariable2 is not defined

if (true) { // block
    // block scope
    console.log(miVariable)
    const miVariable3 = 'test'
    const miVariable2 = 'test2'
    console.log(miVariable2)
}
// console.log(miVariable3) // Uncaught ReferenceError: miVariable3 is not defined

console.log(this)

const persona = {
    codigo: '111',
    nombre: 'Andrés',
    apellido: 'Gonzalez',
    id: '123456',
    birthYear: '1990',
    materias: [
        {
            id: '111-matematicas',
            descripcion: 'matematicas generales'
        },
        {
            id: '111-filosofia',
            descripcion: 'filosofia moderna'
        },
        {
            id: '111-fisica',
            descripcion: 'astro fisica'
        }
    ],
    calcularEdad: function () {
        console.log('this', this)
        return new Date().getFullYear() - this.birthYear
    },
    calcularEdadArrow: () => {
        console.log('this arrow', this)
        // return new Date().getFullYear() - this.birthYear
    },
    buscarMateriaPersona(materia) {
        return this.materias.find(itemMateria => itemMateria.id === `${this.codigo}-${materia}`)
        // return this.materias.find(function (itemMateria) {
        //     console.log(this)
        //     console.log(this.codigo)
        //     return itemMateria.id === `${this.codigo}-${materia}`
        // })
    }
}

console.log(persona)
console.log(persona.calcularEdad())
console.log(this) // -> window
console.log(persona.calcularEdadArrow())

// las funciones normales tiene su propio contexto
// funciones arrow heredan el contexto 

console.log(persona.buscarMateriaPersona('matematicas'))

function myFunction(a, b) {
    // const newArray = [];
    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] !== b) {
    //         newArray.push(a[i])
    //     }
    // }
    // return newArray;
    return a.filter(item => item !== b)
}

console.log(myFunction([1,2,3], 2))

function myFunction2(a) {
    // let count = 0;
    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] < 0) {
    //         count++;
    //     }
    // }
    // return count;

    return a.filter(x => x < 0).length;
}

console.log(myFunction2([1,-2,2,-4, -3]))

function myFunction3(arr) {
    console.log(arr)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        console.log(arr)
    }

    return arr
}
console.log(myFunction3(['b', 'c', 'e', 'z', 'd', 'a'])) // ['a', 'b', 'c', 'd']

console.log('a' < 'b') // true
console.log('d' < 'b') // false

function mySortFunction(arr) {
    return arr.sort((a, b) => a - b)
}

console.log(mySortFunction([4,2,3,1]))

function myFunctionLongestString(arr) {
    let indexLongest = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[indexLongest].length < arr[i].length) {
            indexLongest = i;
        }
    }
    return arr[indexLongest];
}
console.log(myFunctionLongestString(['I', 'need', 'candy']))

function myFunction(arrays) {
   // return 
}
myFunction([[1, 2, 3], [4, 5, 6]])

function myFunction(...arrays) {
    // return 
}
myFunction([1, 2, 3], [4, 5, 6], [7, 8, 9])

let personaObj = {
    nombre: 'Juan', // key: value
    apellido: 'Mendez',
    anioNacimiento: 1995,
    estatura: 180,
    colorOjos: 'Cafe',
    direccion: {
        direccion: 'Calle 123 # 12 - 34',
        complemento: 'Ap 12'
    },
    telefonos: ['123123123', '13123123123'],
    'prop-2': 20,
    calcularEdad() {
        return Date.now().getFullYear() - this.anioNacimiento;
    }
}

console.log(personaObj.nombre)
console.log(personaObj['apellido'])

personaObj.calcularEdad()

Object.keys(personaObj) // ['nombre', 'apellido', 'anioNacimiento', ....]
Object.values(personaObj) // ['Juan', 'Mendez', 1995, ...]

const objA = {
    nombre: 'Luis',
    apellido: 'Castro'
}
const objB = {
    edad: 21,
    estatura: 180
}
const objC = {
    ...objA
}
const obj = {
    nombre: 'Luis',
    apellido: 'Castro',
    edad: 21,
    estatura: 180
}

function myFunction(a, b) {
    return Object.entries(a).reduce((acc, [key, val]) => {
        return { ...acc, [key]: val * b };
    }, {});
 }

 