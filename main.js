//	/products/search?q=Laptop

const fetchApi = async () => {
    let title = document.getElementById("buscar").value
    document.getElementById("buscar").value = ""
    const response = await fetch(`https://dummyjson.com/products/search?q=${title}`)
    const data = await response.json()
    console.log(data)
  data.products.map(element => {
      document.getElementById("cards").innerHTML +=`
      <div class="card">
      <img src="${element.thumbnail}" class="card-img-top imgs">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p>${element.description}</p>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">Precio: ${element.price}</li>
          <li class="list-group-item">Rating: ${element.rating}</li>
          <li class="list-group-item">Categoria: ${element.category}</li>
        </ul>
        
        <button class="button-card card-link btn botton" data-bs-toggle="modal" data-bs-target="#modal-detalles" onclick="abrirModal(${element.id})">Ver en detalle</button>
        <button class="button-card card-link btn botton">Agregar al carrito</button>
      </div>
    </div>`
  });
}