let sessaoListFigure = document.getElementsByClassName('productGroup')

let encarteGeek = [
    {
        id: 0,
        nome: "Relógio",
        preco: "R$50,00",
        imagem: 'assets/img/painting/clock.jpg',
        tipo: "pintura"
    },
    {
        id: 1,
        nome: "Gamepad",
        preco: "R$250,00",
        imagem: 'assets/img/painting/gamepad.jpg',
        tipo: "pintura"
    },
    {
        id: 2,
        nome: "Personagem",
        preco: "R$100,00",
        imagem: 'assets/img/painting/personagem.jpg',
        tipo: "pintura"
    },
    {
        id: 3,
        nome: "Anime Woman",
        preço: "R$700.00",
        imagem: 'assets/img/actions/animewoman.jpg',
        tipo: "actionFigure"
    },
    {
        id: 4,
        nome: "Dragon Ball",
        preco: "R$1400,00",
        imagem: 'assets/img/actions/dragonballpersonagem.jpg',
        tipo: 'actionFigure'
    },
    {
        id: 5,
        nome: "Baby Yoda",
        preco: "R$800,00",
        imagem: 'assets/img/actions/starwarspersonagem.jpg',
        tipo: "actionFigure"
    }
]

function productInventory(product) {
    let liCreator = document.createElement('li')
    let productImgDiv = document.createElement('div')
    let productImgTag = document.createElement('img')
    let productDescription = document.createElement('div')
    let productTitle = document.createElement('h3')
    let productPrice = document.createElement('p')

    

        for (let i = 0; i < sessaoListFigure.length; i++) {

            if (product.tipo == sessaoListFigure[i].id) {
                productImgTag.src = `${product.imagem}`
                productTitle.innerText = `${product.nome}`
                productPrice.innerText = `${product.preco}`

                liCreator.classList.add("productCard")

                productImgTag.classList.add("productPhotoInside")
                productImgDiv.classList.add("productPhotos")

                productDescription.classList.add("productDescription")
                productTitle.classList.add("productTitle")
                productPrice.classList.add("productPrice")


                productImgDiv.appendChild(productImgTag)
                productDescription.appendChild(productTitle)
                productDescription.appendChild(productPrice)

                sessaoListFigure[i].appendChild(liCreator)
                liCreator.appendChild(productImgDiv)
                liCreator.appendChild(productDescription)
            }

        }
    
}
productInventory(encarteGeek)
// // console.log(encarteGeek[0])
// console.log(productInventory(encarteGeek))
// console.log(productInventory(encarteGeek[0]))
// console.log(productInventory(encarteGeek[1]))
// console.log(productInventory(encarteGeek[2]))
// console.log(productInventory(encarteGeek[3]))
// console.log(productInventory(encarteGeek[4]))
// console.log(productInventory(encarteGeek[5]))

