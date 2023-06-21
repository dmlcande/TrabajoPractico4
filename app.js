"use strict";

/* Crear objetos.

1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
Output:

objeto.encender();                  auto encendido
objeto.apagar()                   El auto se apagó



let auto = {
    color: "amarillo",
    marca: "chevy",
    modelo: "camaro",
    encender: function (){
        console.log("auto encendido");
    },
    apagar: function (){
        console.log("El auto se apago");
    },
}


/* Modelando clases

2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta.

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.



class Usuario {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(platita) {
        this.saldo += platita;
    }
    extraer(platita){
        this.saldo -= platita;
    }
    informar(){
        console.log(`El estado de la cuenta bancaria de ${this.titular} es: ${this.saldo}`);
    }
}

const cuenta = new Usuario("Alex", 0);
console.log(cuenta);

cuenta.informar();
cuenta.ingresar(100);
cuenta.informar();
cuenta.extraer(80);
cuenta.informar();


/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área


class Rectangulo {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    cambiarAltura(altura){
        this.alto = altura;
    }
    cambiarBase(base){
        this.ancho = base;
    }
    mostrar(){
        console.log(`Las propiedades de este rectangulo son: altura de ${this.alto} cm - ancho de ${this.ancho} cm.`);
    }
    perimetro(){
         return 2*(this.alto + this.ancho);
    }
    area(){
        return this.alto * this.ancho;
    }
}

let rectangulo1 = new Rectangulo(2, 4);

rectangulo1.cambiarAltura(20);
rectangulo1.cambiarBase(10);
rectangulo1.mostrar();

rectangulo1.perimetro();
console.log(`El perimetro de este rectangulo es: ${rectangulo1.perimetro()} cm.`);

rectangulo1.area();
console.log(`El area de este rectangulo es: ${rectangulo1.area()} cm.`);



/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimeDatos(){
        console.log(`Las propiedades de este producto son: ${this.nombre}, codigo ${this.codigo}, USD$${this.precio}.`);
    }
}

let producto1 = new Producto ("M102-85", "Iphone 11", 500);
let producto2 = new Producto ("M212-75", "Iphone 12", 700);
let producto3 = new Producto ("M300-05", "Iphone 13", 850);

let productosArray = [producto1, producto2, producto3];

producto1.imprimeDatos();
producto2.imprimeDatos();
producto3.imprimeDatos();