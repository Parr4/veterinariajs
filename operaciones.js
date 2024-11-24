const fs = require("fs")


const operacion = process.argv[2]


const nombre = process.argv[3] 
const edad = process.argv[4] 
const animal = process.argv[5] 
const color = process.argv[6] 
const enfermedad = process.argv[7] 

console.log(operacion)


const registrar = () =>{
    const lista = fs.readFileSync("citas.json", "utf-8");
    console.log("lista ", lista)
    let listaParse = JSON.parse(lista);
    console.log("listaparse: " , listaParse)
    listaParse.push({nombre: nombre, edad: edad, animal: animal, color:color, enfermedad:enfermedad})
    console.log("listaparse 2:", listaParse)
    fs.writeFileSync("citas.json", JSON.stringify(listaParse))
}
const leer = () => {
    const texto = fs.readFileSync("citas.json", "utf-8")
    const textoParse = JSON.parse(texto)
    console.log(textoParse)
}



if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
}
if(operacion === "leer"){
    leer()
}

module.exports = {registrar, leer}