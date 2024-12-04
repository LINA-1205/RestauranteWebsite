//VARIABLES GLOBALES

const d = document;
let nameInput = d.querySelector("#productos-select");
let priceInput = d.querySelector("#productos-select");
let stockInput = d.querySelector("#stock-pro");
let descriptionInput = d.querySelector("#descripcion-pro");
let imagenInput = d.querySelector("#imagen-pro");
let btncreate = d.querySelector("#btn-create");


//evento al boton
btncreate.addEventListener("click", ()=>{
    getDataProduct();
});



//FUNCION PARA VALIDAR LOS DATOS DEL FORMULARIO Y OBTENER LA INFORMACION DEL PRODUCTO

let getDataProduct = ()=>{
let product;
    //validar datos
    if(nameInput.value && priceInput.value && descriptionInput.value && stockInput.value &&
     imagenInput.src 

    ){
        product={
            nombre:nameInput.value,
            descripcion: descriptionInput.value,
            precio:priceInput.value,
            stock:stockInput.value,
            imagen:imagen.src
        }
    nameInput.value ="",
    descriptionInput.value="",
    priceInput.value="",
    stockInput.value=10,
    imagen.src = "https://m.media-amazon.com/images/I/61XV8PihCwL._SY250_.jpg"
    console.log(product);
    }else{
        alert("Todos los datos son obligatorios")
    }
    return product;
}

