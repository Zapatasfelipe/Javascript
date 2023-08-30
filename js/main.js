// renta, monto a solicitar, plazo
let montoCliente;
let montoCuotas;
const ipc = 1.16;
let totalPago;
let interes;

while (true) {
    var rut = parseInt(prompt("Ingrese su RUT sin guión y con dígito verificador"));

    if (rut >= 70000000 && rut <= 199999999) {
        break; 
        
    } else {
        alert("El RUT ingresado no aplica para un credito. Por favor, ingrese un RUT válido.");
        
    }
}

let monto = parseInt(prompt("Ingrese el monto a solicitar en $ pesos chilenos"));

while (monto < 10000 || monto > 100000) {
    alert("El monto debe estar entre $10.000 y $100.000");
    monto = parseInt(prompt("Ingrese el monto a solicitar en $ pesos chilenos"));
}

let cuotas = parseInt(prompt("ingrese la cantidad de cuotas: "))
while (cuotas < 2 || cuotas > 48) {
    alert("solo puedes elegir entre 2 a 48 cuotas");
    cuotas = parseInt(prompt("ingrese la cantidad de cuotas: "))
}

if (cuotas >= 2 && cuotas <= 12) {
    interes = 1.1;
} else if (cuotas >= 13 && cuotas <= 24) {
    interes = 1.2;
} else if (cuotas >= 45 && cuotas <= 48) {
    interes = 1.3;
}
console.log(interes);
let cliente = prompt("¿Es cliente del banco?").toLocaleUpperCase()

while(cliente !== "SI" && cliente !== "NO") {
    alert("Solo debes escribir 'si' o 'no' si eres cliente.");
    cliente = prompt("¿Es cliente del banco?").toUpperCase();
}

console.log(cliente);

if(cliente == "SI"){
    montoCliente = 1.076; 
    clienteinteres = "al ser cliente tiene un 7,6% de interes"
}else{
    montoCliente = 1.138;
    clienteinteres = "al no ser cliente tiene un 13,8% de interes"
}
console.log(montoCliente)

totalPago = parseInt(((montoCliente*monto)*ipc)*interes)
console.log(totalPago)

alert("El Monto total de su credito es: $"+totalPago)
montoCuotas = parseInt(totalPago/cuotas)
alert("El monto de su credito $"+ totalPago+ " en "+cuotas+" cuotas, quedaria en $"+montoCuotas+" pesos mensuales, con un interes de "+interes+"%")
alert("con un ipc actual "+ipc+" "+clienteinteres)

console.log(totalPago)


