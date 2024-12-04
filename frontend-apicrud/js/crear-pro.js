//VARIABLES GLOBALES

const d = document;
let nameInput = d.querySelector("#productos-select");
let priceInput = d.querySelector("#productos-select");
let stockInput = d.querySelector("#stock-pro");
let descriptionInput = d.querySelector("#descripcion-pro");
let imagenInput = d.querySelector("#imagen-pro");
let btncreate = d.querySelector("#btn-create");
let productUpdate;


//evento al boton
btncreate.addEventListener("click", () => {
    let producto = getDataProduct();
    sendDataProduct(producto);
});



//FUNCION PARA VALIDAR LOS DATOS DEL FORMULARIO Y OBTENER LA INFORMACION DEL PRODUCTO

let getDataProduct = () => {
    let product;
    //validar datos
    if (nameInput.value && priceInput.value && descriptionInput.value && stockInput.value &&
        imagenInput.src

    ) {
        product = {
            nombre: nameInput.value,
            descripcion: descriptionInput.value,
            precio: priceInput.value,
            stock: stockInput.value,
            imagen: imagenInput.src
        }
        nameInput.value = "",
            descriptionInput.value = "",
            priceInput.value = "",
            stockInput.value = 10,
            imagenInput.src = "https://m.media-amazon.com/images/I/61XV8PihCwL._SY250_.jpg"
        console.log(product);
    } else {
        alert("Todos los datos son obligatorios")
    }
    return product;
}

//FUNCION PARA ENVIAR LOS DATOS DEL FORMULARIO A LA BASE DE DATOS
let sendDataProduct = async (pro) => {
    let url = "http://localhost/backend-apiCrud/productos";
    try {
        let respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pro)
        })
        //CONOCER LA RESPUESTA DEL SERVIDOR
        console.log(respuesta);
        if(respuesta.status==406){
            alert("Error, los datos no fueron enviados");
        }else{
            let mensaje = await respuesta.json();
            console.log(mensaje);
            alert(mensaje.message);
            location.href ="../listado-pro.html"
        }
    } catch (error) {
        console.log(error);
    }
}
