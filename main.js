//	/products/search?q=Laptop

const fetchApi = async () => {
    let title = document.getElementById("buscar").value
    document.getElementById("buscar").value = ""
    const response = await fetch(`https://dummyjson.com/products/search?q=${title.toUpperCase()}`)
    const data = await response.json()
    console.log(data)
  // array.forEach(element => {
    
  // });
  data.products.map(element => {
      //const elemento = document.createElement("div")
      document.getElementById("cards").innerHTML +=`
      <div class="card" style="width: 18rem;">
      <img src="${element.thumbnail}" class="card-img-top imgs">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="${element.description}"</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Precio: ${element.price}</li>
        <li class="list-group-item">Rating: ${element.rating}</li>
        <li class="list-group-item">Categoria: ${element.category}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link btn botton">Agregar al carrito</a>
      </div>
    </div>`
  });
}
