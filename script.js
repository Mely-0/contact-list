let lista={
    1:"melany martinez",
    2:"loraine navarro",
    3:"franco muños",
    4:"luis hernandez"
}
let i = 5 ;
let aviso = ""
let contactosMostrar = "";

let opciones_usuario = parseInt(prompt("1)añadir contacto \n 2)aliminar un contacto \n 3) mostrar un contacto"))


if (opciones_usuario == 1 ){
        do {
        let newcontacto = prompt("añada un nuevo contacto");

    añadir(newcontacto)
        aviso = prompt("deseas continuar ? si/no")
        } while (aviso == "si");
        }else if (opciones_usuario == 2){
        let borra = (parseInt(prompt("digite que contacto desea eliminar")));
        borrar(borra)
        }else if (opciones_usuario == 3){
        mostrar(lista)
        }
    
    function añadir (newcont){
        lista[i] = newcont;
        i++; 
    }
    console.log(lista)

    function borrar (borra){
    delete lista [borra]
    }
    function mostrar (lista){
    let items = Object.keys(lista)

    for (let i = 1; i <= items.length ; i++) {
    contactosMostrar += "\n"+lista[i]
    }

    alert(contactosMostrar);

}