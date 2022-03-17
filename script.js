
let contador = 0;
let total = 0.0;
let counts = {};
let pedidos = [{
    "name": "Veggie Burger",
    "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "price": 86.29,
    "image": "https://images.unsplash.com/photo-1543339462-88f4850abc5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1177&q=80"
},
{
    "name": "Veggie Burger",
    "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "price": 86.29,
    "image": "https://images.unsplash.com/photo-1543339462-88f4850abc5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1177&q=80"
},
{
    "name": "Mushroom Burger",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "price": 21.7,
    "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/5/8/0/FN_Melissa-DArabian-Burger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371616351111.jpeg"
},
{
    "name": "Duck Breast Burger",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "price": 56.35,
    "image": "https://food-images.files.bbci.co.uk/food/recipes/duck_burger_and_chips_40267_16x9.jpg"
},
{
    "name": "Shrimp Burger",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    "price": 68.2,
    "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Flighten-up-america%2Fshrimp-burger-ck-x.jpg%3Fitok%3Dxa2xhW1p"
}];

function getJSON(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open("GET", url);
      req.onload = () => resolve(req.responseText);
      req.onerror = () => reject(req.statusText);
      req.send();
    })
}
//URLS de interes
let urlEventos = "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

let datos;

//Lectura de URLs
function mostrarDatos(tipoDato){
    getJSON(urlEventos).then(response => {
        let myEvents = response;
        datos = JSON.parse(myEvents);
        document.getElementById("Title").innerHTML = tipoDato;
        document.getElementById("divCards").innerHTML = `
        <hr>
        <div class="row">
            <div id = "cards" class="row row-cols-1 row-cols-md-4 g-4">
          
            </div>
        </div>
        `;

        for (var i = 0; i < datos.length; i++) {
            if(datos[i].name == tipoDato){

                for (var j = 0; j < datos[i].products.length; j++) {
                    let url = datos[i].products[j].image;
                    let nombre = datos[i].products[j].name;

                    let descripcion = datos[i].products[j].description;
                    let precio = datos[i].products[j].price;

                    document.getElementById("cards").innerHTML = document.getElementById("cards").innerHTML + 
                    `
                    <div class="col">
                        <div class="card h-100">
                        <img src="${url}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${nombre}</h5>
                                <p class="card-text">${descripcion}</p>
                                <p class="card-text-price">$${precio}</p>
                                <button class="botonCarta" onclick = "agregarAlCarrito()" type="button">Add to cart</button>
                        </div>
                        </div>
                    </div>
                    `;
                }
            }
        }
    })
}

function aumentarContador(){

    document.getElementById("carrito").innerHTML = ` 
    <img id = "fotoCarrito"src="/Parcial1_1/img/carrito.png">
    <p> ${++contador} items</p>
    `;
}

function agregarAlCarrito(){
    aumentarContador();
}

function abrirCarrito() {
    document.getElementById("Title").innerHTML = "ORDER DETAIL";
    document.getElementById("divCards").innerHTML = `
    <hr>
    <table id="tablaPedidos" class="table table-striped" align = "center" border="1px">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty.</th>
                        <th>Description</th>
                        <th>Unit price</th>
                        <th>Amount</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
    <div class="row">
        <div class = "col-12 col-lg-5">
        <p id = "total">$${total}</p>
        </div>
        <div class = "col-0 col-sm-0 col-md-0 col-lg-5"></div>
        <div class = "col-12 col-lg-2">
        <button class="botonCancel" onclick = "cancelarPedido()" type="button">Cancel</button>
        <button class="botonConfirm" onclick = "confirmarPedido()" type="button">Confirm order </button>
        </div>
    </div>
    `;

    for (const ped of pedidos) {
        counts[ped.name] = counts[ped.name] ? counts[ped.name] + 1 : 1;
    } 


    let pedidosFilt = [...new Map(pedidos.map(item =>
        [item["name"], item])).values()];
    var table = document.getElementById("tablaPedidos").getElementsByTagName('tbody')[0];
    for( var i = 0 ; i < pedidosFilt.length ; i++){
        total = total +  parseFloat(pedidosFilt[i].price)*parseInt(counts[pedidosFilt[i].name]).toFixed(2);
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = i+1;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = counts[pedidosFilt[i].name];
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = pedidosFilt[i].name;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = pedidosFilt[i].price;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = parseFloat(pedidosFilt[i].price)*parseInt(counts[pedidosFilt[i].name]).toFixed(2);
        cell6 = newRow.insertCell(5);
        cell6.innerHTML =   `<button class="botonTabla" onclick = "modFila(this, 0)" type="button">+</button>
                            <button class="botonTabla" onclick = "modFila(this, 1)" type="button">-</button>`;
    }
    mostrarTotal();
}


function modFila(td, val) {
    if( val == 0)
    {
        selectedRow = td.parentElement.parentElement;
        selectedRow.cells[1].innerHTML = parseInt(selectedRow.cells[1].innerHTML) + 1;
        counts[selectedRow.cells[2].innerHTML] = counts[selectedRow.cells[2].innerHTML] + 1;
        selectedRow.cells[4].innerHTML = parseFloat(selectedRow.cells[3].innerHTML)*parseInt(selectedRow.cells[1].innerHTML).toFixed(2);
        total = total + parseFloat(selectedRow.cells[3].innerHTML).toFixed(2);
    }
    else{
        selectedRow = td.parentElement.parentElement;
        selectedRow.cells[1].innerHTML = parseInt(selectedRow.cells[1].innerHTML) - 1;
        counts[selectedRow.cells[2].innerHTML] = counts[selectedRow.cells[2].innerHTML] - 1;
        if(counts[selectedRow.cells[2].innerHTML] == 0)
        {
            delete counts[selectedRow.cells[2].innerHTML];
            selectedRow.innerHTML = '';
        }
        selectedRow.cells[4].innerHTML = parseFloat(selectedRow.cells[3].innerHTML)*parseInt(selectedRow.cells[1].innerHTML).toFixed(2);
        total = total - parseFloat(selectedRow.cells[3].innerHTML).toFixed(2);
    }
    mostrarTotal();
}

function mostrarTotal() {
    document.getElementById("total").innerHTML = " ";
    document.getElementById("total").innerHTML = "$ "+total;
}

function confirmarPedido() {
    let resultado = [];
    let pedidosFilt = [...new Map(pedidos.map(item =>
        [item["name"], item])).values()];
    for( var i = 0 ; i < pedidosFilt.length ; i++){
        let objeto = {
            "item": i,
            "quantity": counts[pedidosFilt[i].name],
            "description" : pedidosFilt[i].name,
            "unitPrice" : pedidosFilt[i].price
        };
        resultado.push(objeto);
    }
    console.log(resultado);

}