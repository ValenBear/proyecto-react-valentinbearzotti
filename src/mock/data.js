const listProductos = [
    {   
        id: "1", 
        nombre:"Nike Golf", 
        marca:"Nike",
        descripcion:"parte inferior", 
        descripcion2:"pantalon", 
        precio:9890, 
        stock:10,
        imagen:"https://i.postimg.cc/rmVhrbZn/pantalon1.jpg",
    },
    {
        id: "2", 
        nombre:"Adidas Big Trefoil Pant", 
        marca:"Adidas",
        descripcion:"parte inferior", 
        descripcion2:"pantalon" , 
        precio:9890, 
        stock:5,
        imagen:"https://i.postimg.cc/8CBKsD4f/pantalon2.jpg",
    },
    {
        id: "3", 
        nombre:"Adidas Big Trefoil Tee", 
        marca:"Adidas",
        descripcion:"parte superior", 
        descripcion2:"remera", 
        precio:8890, 
        stock:6,
        imagen:"https://i.postimg.cc/nzS1QLDr/remera5.jpg",
    },
    {
        id: "4", 
        nombre:"Michigan x Nike Tee", 
        marca:"Nike",
        descripcion:"parte superior", 
        descripcion2:"remera", 
        precio:10890, 
        stock:14,
        imagen:"https://i.postimg.cc/mkcy3GYw/remera6.jpg",
    },
    {
        id: "5", 
        nombre:"Nike Vtg Puffer Jacket", 
        marca:"Nike",
        descripcion:"parte superior", 
        descripcion2:"campera", 
        precio:77990, 
        stock:13,
        imagen:"https://i.postimg.cc/C5tJ9KhX/campera3.jpg",
    },
    {
        id: "6", 
        nombre:"Champion Spell Out Hoddie", 
        marca:"Champion",
        descripcion:"parte superior", 
        descripcion2:"buzo", 
        precio:12490, 
        stock:9,
        imagen:"https://i.postimg.cc/wxbW1wX2/buzo4.jpg",
    },
    {
        id: "7", 
        nombre:"Nike Hoodie Alabama", 
        marca:"Nike",
        descripcion:"parte superior", 
        descripcion2:"buzo", 
        precio:11890, 
        stock:15,
        imagen:"https://i.postimg.cc/28s2w3XB/buzo3.jpg",
    },
    {
        id: "8", 
        nombre:"Helly Hansen Puffer Jacket", 
        marca:"Otros",
        descripcion:"parte superior", 
        descripcion2:"campera", 
        precio:64890, 
        stock:10,
        imagen:"https://i.postimg.cc/NFLpNXcR/campera1.jpg",
    },
    {
        id: "9", 
        nombre:"Nike Big Swoosh", 
        marca:"Nike",
        descripcion:"parte superior", 
        descripcion2:"buzo", 
        precio:9490, 
        stock:7,
        imagen:"https://i.postimg.cc/d0KNqD2K/buzo2.jpg",
    },
    {
        id: "10", 
        nombre:"Nike Tee EDD", 
        marca:"Nike",
        descripcion:"parte superior", 
        descripcion2:"remera", 
        precio:8890, 
        stock:2,
        imagen:"https://i.postimg.cc/7LD9Fd4H/remera3.jpg",
    },
    {
        id: "11", 
        nombre:"Champion Crewneck", 
        marca:"Champion",
        descripcion:"parte superior", 
        descripcion2:"remera", 
        precio:9990, 
        stock:9,
        imagen:"https://i.postimg.cc/Tw39wbhB/remera4.jpg",
    },
    {
        id: "12", 
        nombre:"The Nike Tee Flw", 
        marca:"Nike",
        descripcion:"parte superior", 
        descripcion2:"remera", 
        precio:9990, 
        stock:6,
        imagen:"https://i.postimg.cc/4xpwFZr2/remera1.jpg",
    },
    {
        id: "13", 
        nombre:"Polo Ralph Lauren Hoddie Big Logo", 
        marca:"Polo Ralph Lauren",
        descripcion:"parte superior", 
        descripcion2:"buzo", 
        precio:14490, 
        stock:3,
        imagen:"https://i.postimg.cc/zv1G7CWc/buzo1.jpg",
    },
    {
        id: "14", 
        nombre:"Hybrid Poetic Justice Tupac T-Shirt", 
        marca:"Otros",
        descripcion:"parte superior", 
        descripcion2:"remera", 
        precio:9890, 
        stock:11,
        imagen:"https://i.postimg.cc/LsTD2D4z/remera2.jpg",
    },
    {
        id: "15", 
        nombre:"The North Face 700 Puffer Vest", 
        marca:"The North Face",
        descripcion:"parte superior", 
        descripcion2:"chaleco", 
        precio:54490, 
        stock:5,
        imagen:"https://i.postimg.cc/Kvk0BtQ2/chaleco1.jpg",
    },
    {
        id: "16", 
        nombre:"The North Face 700 Hyvent Puffer Jacket", 
        marca:"The North Face",
        descripcion:"parte superior", 
        descripcion2:"campera", 
        precio:96490, 
        stock:1,
        imagen:"https://i.postimg.cc/G2XXJQZc/campera2.jpg",
    },
    {
        id: "17", 
        nombre:"Adidas Originals Autumn", 
        marca:"Adidas",
        descripcion:"parte inferior", 
        descripcion2:"pantalon", 
        precio:9640, 
        stock:4,
        imagen:"https://i.postimg.cc/76mTQ8kW/Whats-App-Image-2023-07-24-at-15-15-18.jpg",
    },
    {
        id: "18", 
        nombre:"Ellesse Puffer Vest", 
        marca:"Otros",
        descripcion:"parte superior", 
        descripcion2:"chaleco", 
        precio:40960, 
        stock:5,
        imagen:"https://i.postimg.cc/mr39C16R/Whats-App-Image-2023-07-24-at-15-15-18-1.jpg",
    },
    {
        id: "19", 
        nombre:"The North Face 700 Orange Puffer Vest", 
        marca:"The North Face",
        descripcion:"parte superior", 
        descripcion2:"chaleco", 
        precio:61450, 
        stock:2,
        imagen:"https://i.postimg.cc/bvfbZ9g3/Whats-App-Image-2023-07-24-at-15-15-18-2.jpg",
    },
    {
        id: "20", 
        nombre:"The North Face Puffer Summit Series", 
        marca:"The North Face",
        descripcion:"parte superior", 
        descripcion2:"campera", 
        precio:85450, 
        stock:10,
        imagen:"https://i.postimg.cc/QNfpf5Nd/Whats-App-Image-2023-07-24-at-15-15-19.jpg",
    },
    {
        id: "21", 
        nombre:"Adidas Torision ZX500", 
        marca:"Adidas",
        descripcion:"calzado", 
        descripcion2:"zapatilla", 
        precio:41050, 
        stock:3,
        imagen:"https://i.postimg.cc/9Q7ZXndD/Whats-App-Image-2023-07-24-at-15-15-19-1.jpg",
    },
    {
        id: "22", 
        nombre:"Puma X Ney Jacket", 
        marca:"Otros",
        descripcion:"parte superior", 
        descripcion2:"campera", 
        precio:30550, 
        stock:10,
        imagen:"https://i.postimg.cc/MKX1NTXb/Whats-App-Image-2023-07-24-at-15-15-19-2.jpg",
    },
    {
        id: "23", 
        nombre:"Adidas Trefoil", 
        marca:"Adidas",
        descripcion:"parte superior", 
        descripcion2:"campera", 
        precio:40600, 
        stock:8,
        imagen:"https://i.postimg.cc/NfVRccHh/Whats-App-Image-2023-07-24-at-15-15-19-3.jpg",
    },
    {
        id: "24", 
        nombre:"Adidas Adi-2000", 
        marca:"Adidas",
        descripcion:"calzado", 
        descripcion2:"zapatilla", 
        precio:35090, 
        stock:4,
        imagen:"https://i.postimg.cc/brVkdXVt/Whats-App-Image-2023-07-24-at-15-15-19-4.jpg",
    },
    {
        id: "25", 
        nombre:"Tommy Hilfiger Pilot Athletics", 
        marca:"Tommy Hilfiger",
        descripcion:"parte superior", 
        descripcion2:"campera", 
        precio:55560, 
        stock:5,
        imagen:"https://i.postimg.cc/tJ4FXRkb/Whats-App-Image-2023-07-24-at-15-15-19-5.jpg",
    },
    {
        id: "26", 
        nombre:"Polo Ralph Lauren Harrington Jacket 2021", 
        marca:"Polo Ralph Lauren",
        descripcion:"parte superior", 
        descripcion2:"campera", 
        precio:50750, 
        stock:1,
        imagen:"https://i.postimg.cc/C1NjTnjJ/Whats-App-Image-2023-07-24-at-15-15-19-6.jpg",
    },
    {
        id: "27", 
        nombre:"Nike Air Max Plus TN Sunset", 
        marca:"Nike",
        descripcion:"calzado", 
        descripcion2:"zapatilla", 
        precio:80900, 
        stock:3,
        imagen:"https://i.postimg.cc/vBMWNt6c/Whats-App-Image-2023-07-24-at-15-15-21.jpg",
    },
    {
        id: "28", 
        nombre:"Nike Air Swoosh Money", 
        marca:"Nike",
        descripcion:"parte inferior", 
        descripcion2:"pantalon", 
        precio:10900, 
        stock:3,
        imagen:"https://i.postimg.cc/QxMqDmY7/Whats-App-Image-2023-07-24-at-15-15-21-1.jpg",
    },
    {
        id: "29", 
        nombre:"Nike x Stussy", 
        marca:"Nike",
        descripcion:"calzado", 
        descripcion2:"zapatilla", 
        precio:75900, 
        stock:3,
        imagen:"https://i.postimg.cc/fbYcCryG/Whats-App-Image-2023-07-24-at-15-15-21-2.jpg",
    },
    {
        id: "30", 
        nombre:"Nike Benassu", 
        marca:"Nike",
        descripcion:"calzado", 
        descripcion2:"otros", 
        precio:20450, 
        stock:5,
        imagen:"https://i.postimg.cc/qvPc8TJc/Whats-App-Image-2023-07-24-at-15-15-21-3.jpg",
    },
    {
        id: "31", 
        nombre:"Nike Air Max 9 II", 
        marca:"Nike",
        descripcion:"calzado", 
        descripcion2:"zapatilla", 
        precio:95450, 
        stock:11,
        imagen:"https://i.postimg.cc/BnLcL60Q/Whats-App-Image-2023-07-24-at-15-15-21-4.jpg",
    },
    {
        id: "32", 
        nombre:"Nike Air Max Tn Triple", 
        marca:"Nike",
        descripcion:"calzado", 
        descripcion2:"zapatilla", 
        precio:102350, 
        stock:2,
        imagen:"https://i.postimg.cc/YqyzCFTs/Whats-App-Image-2023-07-24-at-15-15-21-5.jpg",
    },
    {
        id: "33", 
        nombre:"Adidas Trefoil 90s", 
        marca:"Adidas",
        descripcion:"parte inferior", 
        descripcion2:"pantalon", 
        precio:9500, 
        stock:15,
        imagen:"https://i.postimg.cc/ZnwF3vn0/Whats-App-Image-2023-07-24-at-15-15-21-6.jpg",
    },
    {
        id: "34", 
        nombre:"Tommy Hilfiger Spell Out", 
        marca:"Tommy Hilfiger",
        descripcion:"parte superior", 
        descripcion2:"campera", 
        precio:59300, 
        stock:4,
        imagen:"https://i.postimg.cc/yx1ykyVw/Whats-App-Image-2023-07-24-at-15-15-21-8.jpg",
    },
    {
        id: "35", 
        nombre:"Adidas R.Y.V.", 
        marca:"Adidas",
        descripcion:"parte inferior", 
        descripcion2:"pantalon", 
        precio:59300, 
        stock:4,
        imagen:"https://i.postimg.cc/xCyPf4Sv/Whats-App-Image-2023-07-24-at-15-15-21-9.jpg",
    },
    {
        id: "36", 
        nombre:"Tommy Hilfiger Sport Sws", 
        marca:"Tommy Hilfiger",
        descripcion:"parte inferior", 
        descripcion2:"bermuda", 
        precio:35650, 
        stock:7,
        imagen:"https://i.postimg.cc/QCVCVFTX/Whats-App-Image-2023-07-24-at-21-33-05.jpg",
    },
];

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
          if(error){
              reject(console.log("No hay data, intente mas tarde"))
          }else{
              resolve(listProductos)
          }
        },2000)
    })
}

export const getItem = (id) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(listProductos.find((item)=> item.id === id))
        },2000)
    })
}
