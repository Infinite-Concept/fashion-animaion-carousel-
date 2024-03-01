const productData = [
    {
        index: '01',
        name: "yellow tracksuit",
        image: "img1.jpg",
        des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae id sed illum commodi molestias doloribus itaque voluptatem possimus sapiente omnis perspiciatis, eos suscipit? Excepturi, consectetur! "
    },
    {
        index: '02',
        name: "designer outfit",
        image: "img2.jpg",
        des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae id sed illum commodi molestias doloribus itaque voluptatem possimus sapiente omnis perspiciatis, eos suscipit? Excepturi, consectetur! "
    },
    {
        index: '03',
        name: "chilling mood",
        image: "img3.jpg",
        des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae id sed illum commodi molestias doloribus itaque voluptatem possimus sapiente omnis perspiciatis, eos suscipit? Excepturi, consectetur! "
    }
]

const nxtBtn = document.querySelector('.next_btn')

let smImgContainer = document.querySelector(".sm_product_img_container")
let smImg = document.querySelector(".sm_product_img")
let productIndex = document.querySelector(".product_index")
let smProductDes = document.querySelector(".sm_product_des")

let ProductImgContainer = document.querySelector(".product_img_container")
let productImg = document.querySelector('.product_img')
let backdrop = document.querySelector(".backdrop_img")

let productDetail = document.querySelector(".product_details")
let productName = document.querySelector(".product_name")
let productDes = document.querySelector(".product_des")

let currentProduct = 0

nxtBtn.addEventListener("click", () => {

    if(currentProduct >=productData.length -1){
        currentProduct = 0;
    }else{
        currentProduct++;
    }

    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80)

    smImgContainer.classList.add("slide")
    ProductImgContainer.classList.add('slide')
    backdrop.classList.add("fade")
    productDetail.classList.add('fade')

    setTimeout(() => {
        productName.innerHTML = productData[currentProduct].name;
        productDes.innerHTML = productData[currentProduct].des
        smImg.src = productImg.src = backdrop.src = `assets/${productData[currentProduct].image}`
    }, 500)

    setTimeout(() => {
        smImgContainer.classList.remove("slide")
        ProductImgContainer.classList.remove('slide')
        backdrop.classList.remove("fade")
        productDetail.classList.remove('fade')
    }, 1000)



})