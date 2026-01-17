const products = [
  {
    "id": 1,
    "name": "Мужские кроссовки Nike Air",
    "imageUrl": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "price": 200,
    "finalPrice": 150,
    "isHot": true,
    "isSale": false
  },
  {
    "id": 2,
    "name": "Мужская кожаная куртка",
    "imageUrl": "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    "price": 350,
    "finalPrice": 280,
    "isHot": false,
    "isSale": true
  },
  {
    "id": 3,
    "name": "Мужские джинсы Levi's",
    "imageUrl": "https://images.unsplash.com/photo-1542272604-787c3835535d",
    "price": 120,
    "finalPrice": 120,
    "isHot": true,
    "isSale": false
  },
  {
    "id": 4,
    "name": "Мужская футболка поло",
    "imageUrl": "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
    "price": 80,
    "finalPrice": 60,
    "isHot": false,
    "isSale": true
  },
  {
    "id": 5,
    "name": "Мужские часы Casio",
    "imageUrl": "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    "price": 450,
    "finalPrice": 450,
    "isHot": true,
    "isSale": false
  },
  {
    "id": 6,
    "name": "Мужской рюкзак для ноутбука",
    "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    "price": 95,
    "finalPrice": 75,
    "isHot": false,
    "isSale": true
  },
  {
    "id": 7,
    "name": "Мужские ботинки Timberland",
    "imageUrl": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
    "price": 280,
    "finalPrice": 280,
    "isHot": true,
    "isSale": false
  },
  {
    "id": 8,
    "name": "Мужской свитер шерстяной",
    "imageUrl": "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    "price": 150,
    "finalPrice": 120,
    "isHot": false,
    "isSale": true
  },
  {
    "id": 9,
    "name": "Мужской костюм классический",
    "imageUrl": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35",
    "price": 600,
    "finalPrice": 600,
    "isHot": false,
    "isSale": false
  },
  {
    "id": 10,
    "name": "Мужские солнцезащитные очки Ray-Ban",
    "imageUrl": "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    "price": 180,
    "finalPrice": 135,
    "isHot": true,
    "isSale": true
  },
  {
    "id": 11,
    "name": "Мужская спортивная куртка",
    "imageUrl": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    "price": 220,
    "finalPrice": 220,
    "isHot": true,
    "isSale": false
  },
  {
    "id": 12,
    "name": "Мужской кожаный ремень",
    "imageUrl": "https://images.unsplash.com/photo-1624222247344-700c2311c00b",
    "price": 65,
    "finalPrice": 50,
    "isHot": false,
    "isSale": true
  }
]
//1) ищем контейнер для карточек
const container = document.querySelector(".products .container")
//2) очищаем его
container.innerHTML =""

//3) перебираем все карточки
products.forEach(card => {
    container.innerHTML += `
    <div class="products-card">
         ${card.isSale ? `
            <div class="sale">
              <h4>sale</h4>
            </div>
            ` : ""}
            <div class="hot">
              <h4>hot</h4>
            </div>
            <div class="img-box">
              <img src="${card.imageUrl}" alt="">
            </div>
            <div class="title">
              <h3>Sweatshirt</h3>
              <h4>$45.00 - <span class="last-word">$60.00</span></h4>
            </div>
          </div>
    `
})
