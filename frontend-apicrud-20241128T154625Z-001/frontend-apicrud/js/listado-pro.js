//VARIABLES GLOBALES
const d = document;
let tablePro = d.querySelector("#listado-pro > tbody");

console.log(tablePro);

//evento praa detectar cuando se recargue la pagina
d.addEventListener("DOMContentLoaded", ()=>{
    getDataTable()
})


//funcion para realizar la peticion a la API y mostrsr los datos en la tabla
let getDataTable =()=>{
    let url = "http://localhost/backend-apiCrud/productos";
    fetch(url, {
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    }).then((d)=>d.json())
    .then((datos)=>{
        datos.forEach((pro,i)=> {
            let fila = d.createElement("tr");
            fila.innerHTML=`
            <td> ${i}</td>
            <td> ${pro.nombre}</td>
            <td> ${pro.descripcion}</td>
            <td> ${pro.precio}</td>
            <td> ${pro.stock}</td>
            <td> <img src="${pro.imagen}" width="80px"> </td>
            <td> 
                <span class="btn btn-warning">✍️</span>
                <span class="btn btn-danger">✖️</span>
            </td>
            `;
            tablePro.appendChild(fila);
        });
    })
    .catch((error)=>console.log(error))
}