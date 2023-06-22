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

for (const mostrarProducto of productosArray) {
     mostrarProducto.imprimeDatos();
}


/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la tabla de generaciones.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.


class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }
    mostrarGeneracion(){
        //este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
        if (this.anioNacimiento >= 1994 && this.anioNacimiento < 2011) {
            console.log(`Perteneces a la generacion Z y el rasgo caracteristico de esta generacion es la irreverencia :P .`);
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento < 1994){
            console.log(`Perteneces a la generacion Y (millenials) y el rasgo caracteristico de esta generacion es la frustracion :( .`);
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento < 1981){
            console.log(`Perteneces a la generacion X y el rasgo caracteristico de esta generacion es la obsesion por el exito ;) .`);
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento < 1969){
            console.log(`Perteneces a la generacion Baby Boom el rasgo caracteristico de esta generacion es la ambicion ($_$) .`);
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento < 1949){
            console.log(`Perteneces a la Silent Genereation (los ninios de la posguerra) y el rasgo caracteristico de esta generacion es la austeridad :| .`);
        }
    }
    esMayorDeEdad(){
        //indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
        if (this.edad >= 18) {
            console.log("Sos mayor de edad");
        }
    }
    mostrarDatos(){
        console.log(`El nombre de la persona ingresada es ${this.nombre}, su edad es ${this.edad}, de DNI ${this.dni}, sexo ${this.sexo}, con un peso de ${this.peso}kg, ${this.altura}m de altura y nació en el año ${this.anioNacimiento}.`);
    }
    generaDNI(){
        this.dni = Math.floor(Math.random()*100000000);
    }
}

const cande = new Persona("Candela", 26, 31218444, "F", 58, 149, 1930);




/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.



class Libro {
    constructor(isbn, titulo, autor, numPag){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPag = numPag;
    }
    set ponerIsbn(valor){
        this.isbn = valor;
    }
    get verIsbn(){
        return this.isbn;
    }
    set ponerTitulo(valor){
        this.titulo = valor;
    }
    get verTitulo (){
        return this.titulo;
    }
    set ponerAutor(valor){
        this.autor = valor;
    }
    get verAutor(){
        return this.autor;
    }
    set ponerNumPag(valor){
        this.numPag = valor;
    }
    get verNumPag(){
        return this.numPag;
    }
    mostrarLibro(){
        console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene paginas ${this.numPag}`);
    }
}

const libro1 = new Libro()
libro1.ponerIsbn = 9780345426260;
libro1.ponerTitulo = "El Psicoanalista";
libro1.ponerAutor = "John Katzenbach";
libro1.ponerNumPag = 435;

const libro2 = new Libro()
libro2.ponerIsbn = 9783140464079;
libro2.ponerTitulo = "El Principito";
libro2.ponerAutor = "Antoine de Saint-Exupéry";
libro2.ponerNumPag = 128;


function cantidadPaginas(){
        if (libro1.numPag > libro2.numPag) {
            console.log(`${libro1.titulo} tiene mayor cantidad de hojas.`);
        } else{
            console.log(`${libro2.titulo} tiene mayor cantidad de hojas.`);
        }
}

*/