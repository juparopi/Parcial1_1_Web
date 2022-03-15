
let contador = 0;
let datosPrueba = [
    {
        "nombre" : "burguer1",
        "descripcion": "Es una gran hamburguesa",
        "precio" : 10,
        "tipo":"Burguer",
        "img":"https://www.cocinayvino.com/wp-content/uploads/2018/02/64513894_ml-e1519846538696-1200x675.jpg"
    },
    {
        "nombre" : "burguer2",
        "descripcion": "Es una gran hamburguesa",
        "precio" : 10,
        "tipo":"Burguer",
        "img":"https://www.cocinayvino.com/wp-content/uploads/2018/02/64513894_ml-e1519846538696-1200x675.jpg"
    },
    {
        "nombre" : "burguer3",
        "descripcion": "Es una gran hamburguesa",
        "precio" : 10,
        "tipo":"Burguer",
        "img":"https://www.cocinayvino.com/wp-content/uploads/2018/02/64513894_ml-e1519846538696-1200x675.jpg"
    },
    {
        "nombre" : "burguer4",
        "descripcion": "Es una gran hamburguesa",
        "precio" : 10,
        "tipo":"Burguer",
        "img":"https://www.cocinayvino.com/wp-content/uploads/2018/02/64513894_ml-e1519846538696-1200x675.jpg"
    },
    {
        "nombre" : "burguer5",
        "descripcion": "Es una gran hamburguesa",
        "precio" : 10,
        "tipo":"Burguer",
        "img":"https://www.cocinayvino.com/wp-content/uploads/2018/02/64513894_ml-e1519846538696-1200x675.jpg"
    },
    {
        "nombre" : "tacos1",
        "descripcion": "Es un gran taco",
        "precio" : 10,
        "tipo":"Tacos",
        "img":"https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214906/RIG-2312-2-tacos-300x300.jpg"
    },
    {
        "nombre" : "tacos2",
        "descripcion": "Es un gran taco",
        "precio" : 10,
        "tipo":"Tacos",
        "img":"https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214906/RIG-2312-2-tacos-300x300.jpg"
    },
    {
        "nombre" : "tacos3",
        "descripcion": "Es un gran taco",
        "precio" : 10,
        "tipo":"Tacos",
        "img":"https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214906/RIG-2312-2-tacos-300x300.jpg"
    },
    {
        "nombre" : "salad1",
        "descripcion": "Es una gran ensalada",
        "precio" : 10,
        "tipo":"Salad",
        "img":"https://www.pcrm.org/sites/default/files/2019-12/Untitled%20%283%29_1.jpg"
    },
    {
        "nombre" : "salad2",
        "descripcion": "Es una gran ensalada",
        "precio" : 10,
        "tipo":"Salad",
        "img":"https://www.pcrm.org/sites/default/files/2019-12/Untitled%20%283%29_1.jpg"
    },
    {
        "nombre" : "desert1",
        "descripcion": "Es un gran postre",
        "precio" : 10,
        "tipo":"Desert",
        "img": "https://recetastips.com/wp-content/uploads/2021/07/Receta-de-Postre-Napoleon.jpg"
    }
]

function mostrarDatos(tipoDato){
    document.getElementById("Title").innerHTML = tipoDato;
    document.getElementById("divCards").innerHTML = "<hr>";
    for (var i = 0; i < tipoDato.length; i++) {
        if(tipoDato[i].tipo == tipoDato){

        }
     }
}

function aumentarContador(){
    document.getElementById("carrito").innerHTML = contador++;
}
