// Add event listeners to plus buttons
var plusButtons = document.getElementsByClassName("plus");
for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click", function() {
        let quantityElement = plusButtons[i].nextElementSibling;
        quantityElement.innerHTML = parseInt(quantityElement.innerHTML) + 1;
        totalPrice();
    });
}

// Add event listeners to minus buttons
var minusButtons = document.getElementsByClassName("minus");
for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click", function() {
        let quantityElement = minusButtons[i].previousElementSibling;
        if (parseInt(quantityElement.innerHTML) > 0) {
            quantityElement.innerHTML = parseInt(quantityElement.innerHTML) - 1;
        }
        totalPrice();
    });
}

// Add event listeners to trash buttons
var trashButtons = document.getElementsByClassName("trash");
for (let i = 0; i < trashButtons.length; i++) {
    trashButtons[i].addEventListener("click", function() {
        trashButtons[i].parentNode.remove();
        totalPrice();
    });
}

// Add event listeners to heart buttons
var heartButtons = document.getElementsByClassName("heart");
for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener("click", function() {
        this.style.color = "red";
    });
}

// Calculate total price
function totalPrice() {
    let productPrices = document.getElementsByClassName('prx');
    let productQuantities = document.querySelectorAll('.plus ~ p, .minus ~ p'); // Select quantity p tags
    let sum = 0;

    for (let i = 0; i < productPrices.length; i++) {
        let price = parseFloat(productPrices[i].innerText.replace('$', ''));
        let quantity = parseInt(productQuantities[i].innerText);
        sum += price * quantity;
    }

    document.getElementById('prix-total').innerText = sum;
}
