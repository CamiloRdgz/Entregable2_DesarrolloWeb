//Creacion de los 4 Arrays
let num
let sum
//Rellena el array con Mr. o Mrs. de forma aleatoria
let profesores = []
for (let i = 0; i <= 10; i++) {
    num = Math.floor(Math.random() * 2 + 1)
    if (num == 1) {
        profesores.push("Mr. " + i)
    } else if (num == 2) {
        profesores.push("Mrs. " + i)
    }
}

//Rellena el array con Masculino o Femenino de forma aleatoria
let genero = []
for (let j = 0; j <= 10; j++) {
    num = Math.floor(Math.random() * 2 + 1)
    if (num == 1) {
        genero.push("Masculino")
    } else if (num == 2) {
        genero.push("Femenino")
    }
}

//Rellena el array con notas academicas aleatorias
let notas = []
for (let h = 0; h <= 10; h++) {
    num = Math.random() * 5
    num = num.toFixed(1) //Lo convertimos a que muestre solo un decimal
    notas.push(num)
}

//Array de paises
let paises = ["Albania","Armenia","Algeria","Bahrein","Belgica","Belize","Cambodia","Comoros","Colombia","Cuba","Dinamarca","Ucrania","Zimbabwe","Zambia"]

console.log("Arrays creados")
console.log(profesores)
console.log(genero)
console.log(notas)
console.log(paises)



//Funciones por cada array
console.log("Usando metodos de array")

//Retorna la posicion solo si el numero aleatorio generado es par
let random = genero.filter(puntero => {
    if((Math.floor(Math.random() * 100) % 2) == 0) {
        return puntero
    }
})
console.log(random)

//Devuelve los paises cuya longitud sean mayores o igual a 7 letras
let longitudPais = paises.filter(longi => {
    longi = longi.length
    if (longi >= 7) {
        return longi
    }
})
console.log(longitudPais)

//Devuelve el promedio de todas las notas
let reducido = notas.reduce((acumulador, nota_actual) => {
    acumulador = parseFloat(acumulador)
    nota_actual = parseFloat(nota_actual)
    
    return acumulador += nota_actual
});
console.log((reducido / notas.length).toFixed(2));

//Devuelve todos los profesores de genero masculino
let generos = profesores.filter(generoProfe => {
    if (generoProfe.startsWith("Mr.")) {
        return generoProfe
    }
})
console.log(generos)