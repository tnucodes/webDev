
const basket = ['apples','oranges','grapes'];

const detailBasket = {
    apples : 5,
    oranges : 10,
    grapes : 20
}

// for 
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]); 
}

// forEach
basket.forEach(item => {
    console.log(item);
})

// for of
// used for iterating - arrays, strings
for(item of basket)
{
    console.log(item);
}

// for in
// enumerating - objects 
for(item in detailBasket)
{
    console.log(item);
}