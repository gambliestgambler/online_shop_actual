let products = [
  {
    id: 1,
    name: "кроссовки Nike Air",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    price: 200,
    finalPrice: 150,
    isHot: true,
    isSale: false,
  },
  {
    id: 2,
    name: "кожаная куртка",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    price: 350,
    finalPrice: 280,
    isHot: false,
    isSale: true,
  },
  {
    id: 3,
    name: "джинсы Levi's",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    price: 120,
    finalPrice: 120,
    isHot: true,
    isSale: false,
  },
  {
    id: 4,
    name: "футболка поло",
    imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
    price: 80,
    finalPrice: 60,
    isHot: false,
    isSale: true,
  },
  {
    id: 5,
    name: "часы Casio",
    imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    price: 450,
    finalPrice: 450,
    isHot: true,
    isSale: false,
  },
  {
    id: 6,
    name: "рюкзак для ноутбука",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    price: 95,
    finalPrice: 75,
    isHot: false,
    isSale: true,
  },
  {
    id: 7,
    name: "ботинки Timberland",
    imageUrl: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
    price: 280,
    finalPrice: 280,
    isHot: true,
    isSale: false,
  },
  {
    id: 8,
    name: "свитер шерстяной",
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    price: 150,
    finalPrice: 120,
    isHot: false,
    isSale: true,
  },
  {
    id: 9,
    name: "костюм классический",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35",
    price: 600,
    finalPrice: 600,
    isHot: false,
    isSale: false,
  },
  {
    id: 10,
    name: "солнцезащитные очки Ray-Ban",
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    price: 180,
    finalPrice: 135,
    isHot: true,
    isSale: true,
  },
  {
    id: 11,
    name: "спортивная куртка",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    price: 220,
    finalPrice: 220,
    isHot: true,
    isSale: false,
  },
  {
    id: 12,
    name: "кожаный ремень",
    imageUrl: "https://images.unsplash.com/photo-1624222247344-700c2311c00b",
    price: 65,
    finalPrice: 50,
    isHot: false,
    isSale: true,
  },
];

function setCards(array) {
  //1) ищем контейнер для карточек
  const container = document.querySelector(".products .container");
  //2) очищаем его
  container.innerHTML = "";

  //3) перебираем все карточки
  array.forEach((card) => {
    container.innerHTML += `
    <div class="products-card">
         ${
           card.isSale
             ? `
            <div class="sale">
              <h4>sale</h4>
            </div>
            `
             : ""
         }

            ${
              card.isHot
                ? `
              <div class="hot">
              <h4>hot</h4>
              </div>
              `
                : ``
            }

            <div class="img-box">
              <img src="${card.imageUrl}" alt="">
            </div>
            <div class="title">
              <h3>Sweatshirt</h3>
              ${
                card.isSale
                  ? `
              <h4>$${card.finalPrice} - <span class="last-word">$${card.price}</span></h4>
               `
                  : `
               <h4>$${card.finalPrice}</h4>
               `
              }
            </div>
          </div>
    `;
  });
}
// вызов функции
setCards(products);


function filterCards(filterType, btn){
  const buttons = document.querySelectorAll(".filter button");
  buttons.forEach(item => item.classList.remove("selected"))
  btn.classList.add("selected")

  let tempCards = [];
  if(filterType == "sale"){
    // возращаем все товары со скидкой 
    tempCards = products.filter(item => item.isSale)
  }
  else if(filterType == "hot"){
    tempCards = products.filter(item => item.isHot)
  }
  else{
    // если фильтров нет - то возращаем все товары
    tempCards = products
  }

  //переразмещаем карточки
  setCards(tempCards)
}

function sortCards(select){
  const sortType = select.value;

  let tempCards = [...products];
  if(sortType == "price-up"){
    tempCards.sort((a, b) => a.finalPrice - b.finalPrice);
  }
  else if(sortType == "price-down"){
    tempCards.sort((a, b) => b.finalPrice - a.finalPrice);
  }
  else if(sortType == "name-a"){
    tempCards.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if(sortType == "name-z"){
    tempCards.sort((a, b) => b.name.localeCompare(a.name));
  }
  
  setCards(tempCards);
}

// Функция для инициализации кликов по кружкам цветов
function initColorCircles() {
  // Находим все кружки для выбора цвета в секции цветов
  const colorCircles = document.querySelectorAll('.product .product-details .text .settings .color .circle');
  
  colorCircles.forEach((circle, index) => {
    circle.addEventListener('click', function() {
      // Удаляем класс active со всех кружков этой группы
      colorCircles.forEach(c => c.classList.remove('active'));
      
      // Добавляем класс active к нажатому кружку
      this.classList.add('active');
      
      // Получаем цвет кружка
      const computedStyle = window.getComputedStyle(this);
      const backgroundColor = computedStyle.backgroundColor;
      
      // Определяем название цвета по индексу
      const colorNames = ['Серый', 'Оранжевый', 'Зелёный', 'Синий'];
      const colorName = colorNames[index] || 'Неизвестный цвет';
      
      // Выводим информацию в консоль
      console.log(`Выбран цвет: ${colorName} (${backgroundColor})`);
      
      // Показываем сообщение пользователю
      alert(`Вы выбрали цвет: ${colorName}`);
    });
  });
}

// Вызываем функцию когда страница загружена
document.addEventListener('DOMContentLoaded', initColorCircles);