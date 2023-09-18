const producto1 = "Lenovo"
const producto2 = "Asus"
const producto3 = "Hp"
const producto4 = "Mac"
let ingresarNumero
let desea

alert("Tenemos los siguientes productos\n1. Lenovo\n2. Asus\n3. Hp\n4. Mac")

ingresarNumero = parseInt(prompt("Ingresar número del producto"))

while (ingresarNumero > 4) {

    alert("Por favor, ingresa un número válido")

    ingresarNumero = parseInt(prompt("Ingresar nuevo número del producto"))
}

if (ingresarNumero == 1) {
    alert("Gracias por elegir " + producto1)
    
}

else if (ingresarNumero == 2) {
    alert("Elegiste un " + producto2)
    
}

else if (ingresarNumero == 3) {
    alert("Gracias por elegir " + producto3)
    
}

else if (ingresarNumero == 4) {
    alert("Gracias por elegir " + producto4)
    
}

function calcularIva(producto, iva){

    resultado = producto * iva
    
    return resultado
}

desea = prompt("¿Desea calcular el precio con iva?")

if(desea == "si"){
    switch(ingresarNumero) {
        case 1:
        
        let precioFinal1 = calcularIva(250000,1.17)
        alert(precioFinal1)
        break

        case 2:

        let precioFinal2 = calcularIva(350000,1.17)
        alert(precioFinal2)
        break

        case 3:

        let precioFinal3 = calcularIva(450000,1.17)
        alert(precioFinal3)
        break

        case 4:

        let precioFinal4 = calcularIva(550000,1.17)
        alert(precioFinal4)
        break

        default:
        break
    }       
}

else if(desea == "no"){
    alert("Gracias Vuelva pronto")
}

