var plusButton=document.getElementsByClassName("plus")
console.log(plusButton)
for( let i=0; i<plusButton.length;i++){
plusButton[i].addEventListener("click",function(){
 plusButton[i].nextElementSibling.innerHTML ++;
 totalPrice(); 
})
}


var minusButton=document.getElementsByClassName("minus")
for(let i=0;i<minusButton.length;i++){
   minusButton[i].addEventListener("click",function(){
     if(minusButton[i].previousElementSibling.innerHTML >0){
    minusButton[i].previousElementSibling.innerHTML --
     }
     totalPrice();
  })
}

var trash=Array.from(document.getElementsByClassName("trash"))
console.log(trash)
for(let i=0;i<trash.length;i++){
  trash[i].addEventListener("click",function(){
    trash[i].parentNode.remove();
    totalPrice();
  })
}

let hearts = document.getElementsByClassName("heart");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function() {
    // Inside event listener function, `this` refers to the element clicked
    this.style.color = "red";
    totalPrice();
  });
}

function totalPrice() {
  // Get the product price
  let productPrice = document.getElementsByClassName('prx');
  // Get the product quantity
  let productQuantity = document.getElementsByClassName('quantity');
  // Initilize the sum
  let sum = 0;
  for (let i = 0; i < productPrice.length; i++) {
    sum += productPrice[i].innerText * productQuantity[i].innerText;
  }
  document.getElementById('prix-total').innerText = sum;
}
