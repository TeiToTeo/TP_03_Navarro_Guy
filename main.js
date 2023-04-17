//	/products/search?q=Laptop

const fetchApi = async () => {
    let title = document.getElementById("buscar").value
    document.getElementById("buscar").value = ""
    const response = await fetch(`https://dummyjson.com/products/search?q=${title}`)
    const data = await response.json()
    console.log(data)
    document.getElementById("api-data").value = JSON.stringify(data)
}