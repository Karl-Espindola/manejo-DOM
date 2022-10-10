///////////////////  EJERCICIO 1 //////////////////////
////////////////////////////////////////////////////////


//Función que le da valores iniciales a los inputs
function valorInicial(){
    let colorSelect=colores.value;
    let colorTexto=colorSelect.text
    let hexaColor=colores.value;
    let posicion=colores.selectedIndex;

    input1.value=posicion;
    input2.value=colorTexto;
    input3.value=hexaColor;

    inputColor.value=hexaColor;
}

//Función que muestra los valores cuando cambia la opcione de la lista
function mostrarValores(){
    let colorSelect=this.options[colores.selectedIndex];
    let colorTexto=colorSelect.text
    let hexaColor=colores.value;
    let posicion=colores.selectedIndex;

    input1.value=posicion;
    input2.value=colorTexto;
    input3.value=hexaColor;
    inputColor.value=hexaColor;
    

}

//Se capturan los inputs
let colores=document.getElementById("listaColores");
let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let input3=document.getElementById("input3");
let inputColor=document.getElementById("inputColor");

colores.addEventListener("change",mostrarValores);

valorInicial(); //se llama para inicializar el valor de los inputs al cargar la página 


///////////////////  EJERCICIO 2 //////////////////////
////////////////////////////////////////////////////////



///////////////////  EJERCICIO 3 //////////////////////
////////////////////////////////////////////////////////
function validar(){ 
    let texto=caja.value;
    let patron=/^607[0-9]{7}/;

    if(texto.length<=10){

        if(patron.test(texto)){
            alert("ok")
        }
        else{
            alert(":(")
        }
    }
    else{
        alert(":(")
    }
}

///////////////////  EJERCICIO 4 //////////////////////
////////////////////////////////////////////////////////

function alerta(){
    let texto=caja_2.value;
    alert("Dice: "+texto);    
}

let caja_2=document.getElementById("in2");

///////////////////  EJERCICIO 5 //////////////////////
////////////////////////////////////////////////////////

function caracteresRestantes(){
    let cadena=caja_3.value;
    let max_caracteres=10;
    let cont=cadena.length+1;
    let restante=0;
    console.log(cont);
    if(cont<=10){
        restante=max_caracteres-cont;
        numRestante.innerText=restante;
    }

    else if(cont>=10 && restante==0 ){ //
        caja_3.style.border="1px solid red";
        caja_3.disabled=true;
    }
}

let caja=document.getElementById("texto");
let ok=document.getElementById("valid");
let ok_2=document.getElementById("valid2");
let numRestante=document.getElementById("numRestante");
let caja_3=document.getElementById("in3");

ok_2.addEventListener("click",alerta)
caja_3.addEventListener("keypress",caracteresRestantes);
ok.addEventListener("click",function(){
    validar();
})

///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////



///////////////////  EJERCICIO 6 //////////////////////
////////////////////////////////////////////////////////

let imagenes=[];

//Funcion que cambia la imagen del recuadro principal, modificando la ruta de la imagen
function ver_en_recuadro(x){
    img_grande.src="img/"+x+".jpg"
}

//Se crean todos los elementos que se introduciran en el html
let section=document.getElementById("section");
let galeria=document.createElement("div");
let h1=document.createElement("h1");
let cont_img=document.createElement("div");
let img_grande=document.createElement("img")
let miniaturas=document.createElement("div");


//Se le agregan las clases y propiedades a los elementos creados
galeria.className="contenedor-galeria centrar-flex-column";
h1.className="centrar";
cont_img.className="contenedor-img centrar-flex";
img_grande.src="img/3.jpg";
img_grande.style.height="335px"
miniaturas.className="contenedor-miniatura";


let titulo=document.createTextNode("Galeria");
h1.appendChild(titulo);

//Introduciomos los elementos creados en el html
section.appendChild(galeria);
galeria.appendChild(h1);
galeria.appendChild(cont_img);
cont_img.appendChild(img_grande);
galeria.appendChild(miniaturas);





for(let i=0; i<4; i++){
    imagenes[i]=document.createElement("img");
    imagenes[i].id="img"+(i+1);
    imagenes[i].src="img/"+(i+1)+".jpg";
    imagenes[i].name="img"+(i+1);
    
    //Se introducen en el html cada imagen creada 
    miniaturas.appendChild(imagenes[i]);
    
    //Se capturan las imagenes miniatura y se guardan en un arreglo
    imagenes[i]=document.getElementById("img"+(i+1));
    
    //Se pone a la escucha del evento click cada imagen del arreglo y se envia como parametro la ruta
    imagenes[i].addEventListener("click",()=>{
        ver_en_recuadro((i+1));
    });
    
}



///////////////////  EJERCICIO 7 //////////////////////
////////////////////////////////////////////////////////
function crearElemento(){
    elemento=document.createElement("p");
    contenido=document.createTextNode("Haz creado un elemento");
    elemento.appendChild(contenido);
    elemento.id="ele";
    padre.appendChild(elemento);
}
function clonar(){
    // let ele=document.getElementById("padre");
    console.log(padre);
    let copia=padre.cloneNode(true);
    document.getElementById("copia").appendChild(copia)
}
function borrar(){
    let ele=document.getElementById("ele");
    ele.parentNode.removeChild(ele);
}

let elemento;
let contenido;
let padre=document.getElementById("padre")
let crear=document.getElementById("crear");
crear.addEventListener("click",crearElemento);

let eliminar=document.getElementById("eliminar");
eliminar.addEventListener("click", borrar)

let duplicar=document.getElementById("duplicar");
duplicar.addEventListener("click",clonar);

///////////////////  EJERCICIO 8 //////////////////////
////////////////////////////////////////////////////////

let listaElementos = document.querySelector("#elementos");

// mostrar un elemento de la lista en particular
// console.log(listaElementos.children[2]);
// listaElementos.children[2].style.backgroundColor = "green";

//--Enviar el evento submit
let form = document.querySelector("#frmLista");
form.addEventListener("submit", fnAgregarElemento);
//--Enviar Eliminar evento
listaElementos.addEventListener("click", fnEliminarElemento);

// Listado de funciones
function fnAgregarElemento(evento){
    evento.preventDefault();
    // capturar el valor de la caja de texto
    let newElement = document.getElementById("txtElemento").value;
//    
    // crear un nuevo elemento de lista li
    let li = document.createElement("li");
    // crear un nuevo elemento de botón
    let btnDelete = document.createElement("button");
//    
    // agregar elementos a las clases
    li.className = "list-group-item";
    btnDelete.className = "btn btn-light btn-outline-danger btn-sm float-end delete"

    // agregar el nodo de textoNode    
    li.appendChild(document.createTextNode(newElement));
    btnDelete.appendChild(document.createTextNode("X"));

    listaElementos.appendChild(li);
    li.appendChild(btnDelete);
}

function fnEliminarElemento(evento){
    // comprobar los elementos de la clase 'delete'
    if(evento.target.classList.contains("delete")){
        // mostrar en pantalla mensaje de confirmación
        if(confirm("¿Seguro de eliminar Elemento?")){
            let li = evento.target.parentElement;
            listaElementos.removeChild(li);
        }
    }

}










