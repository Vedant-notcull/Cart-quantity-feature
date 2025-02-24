let quantity = 0;
let left = 0;



function addtocart(number) {
  
  if (quantity < 10 && (quantity + number) <= 10) {
    quantity += number;
  }
  else if (quantity < 10 && quantity + number > 10) {
    quantity = `only ${10 - quantity}  max..could be added `
  }
  else { quantity = 'The cart is full' }
  console.log(quantity)
}



function clearcart() {
  quantity = 0;
  console.log(`the cart has been cleared`)
}

function showcart() {
  console.log(`Quantity : ${quantity}`)
}
