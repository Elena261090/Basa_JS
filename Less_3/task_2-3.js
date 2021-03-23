// 2. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var basket = [
    {
        title: "Постельное бельё «Этель: Love Forever»",
        price: 1595,
        sostav: "Поплин, Хлопок 100%",
        count: 2
    },
    {
        title: "Одеяло Холлофайбер стэп",
        price: 605,
        sostav: "Полиэстер 100%, Холлофайбер",
        count: 5
    },
    {
        title: "Плед 'LoveLife'",
        price: 750,
        sostav: "Полиэстер 100%",
        count: 3
    },
    {
        title: "Подушка-валик",
        price: 350,
        sostav: "Хлопок 100%",
        count: 4
    },
]

function countBasketPrice(mas){
    var sumBasket = 0;
    for(var item of mas){
        sumBasket += (item.price * item.count)
    }
    return sumBasket
}

console.log(countBasketPrice(basket));




