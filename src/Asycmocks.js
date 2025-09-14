const misProductos = [
    {id: "1", nombre: "Almendras- 1kg", precio: 2500, img:"../public/img/almendras.jpg", idCat: "frutos-secos", stock:10},
    {id: "2", nombre: "Nueces- 1kg", precio: 1700, img:"../public/img/nueces.jpg", idCat: "frutos-secos", stock:10},
    {id: "3", nombre: "Avellanas- 500g", precio: 2000, img:"../public/img/avellanas.jpg", idCat: "frutos-secos", stock:10},
    {id: "4", nombre: "Semillas de Girasol- 500g", precio: 1300, img:"../public/img/girasol.jpg", idCat: "semillas", stock:10},
    {id: "5", nombre: "Semillas de Chía- 1kg", precio: 2100, img:"../public/img/chia.jpg", idCat: "semillas", stock:10},
    {id: "6", nombre: "Semillas de Lino- 500g", precio: 1800, img:"../public/img/lino.jpg", idCat: "semillas", stock:10},
    {id: "7", nombre: "Garbanzo- 1kg", precio: 2400, img:"../public/img/garbanzo.jpg", idCat: "legumbres", stock:10},
    {id: "8", nombre: "Lenteja- 1kg", precio: 1600, img:"../public/img/lenteja.jpg", idCat: "legumbres", stock:10},
    {id: "9", nombre: "Poroto- 1kg", precio: 2600, img:"../public/img/poroto.jpg", idCat: "legumbres", stock:10},
]

export const getProductos = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve (misProductos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item=> item.id === id)
            resolve (producto)
        }, 100)
    })
}

export const getProductoPorCategoria =(idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter (item => item.idCat === idCategoria)
            resolve (productosCategoria)
        }, 100);
    })
}