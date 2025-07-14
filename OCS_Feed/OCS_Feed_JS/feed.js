// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready);
// } else {
//     ready();
// }



// function ready() {
//     var removeCartItemButtons = document.getElementsByClassName('remove-button');
//     for (var i = 0; i < removeCartItemButtons.length; i++) {
//         var button = removeCartItemButtons[i];
//         button.addEventListener('click', removeCartItem);
//     }

//     var quantityInputs = document.getElementsByClassName('cart-quantity');
//     for (var i = 0; i < quantityInputs.length; i++) {
//         var input = quantityInputs[i];
//         input.addEventListener('change', quantityChanged);
//     }

//     var addToCartButtons = document.getElementsByClassName('product_cart');
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var button = addToCartButtons[i];
//         button.addEventListener('click', addToCartClicked);
//     }

//     document.getElementsByClassName('buy-now-quan-button')[0].addEventListener('click', purchaseClicked);
// }




// function purchaseClicked() {
//     alert('Thank you for your purchase!');
//     var cartItems = document.getElementsByClassName('cart-items')[0];
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild);
//     }
//     updateCartTotal();
// }

// function removeCartItem(event) {
//     var buttonClicked = event.target;
//     buttonClicked.closest('.cart-row').remove();
//     updateCartTotal();
// }

// // function quantityChanged(event) {
// //     var input = event.target;
// //     if (isNaN(input.value) || input.value <= 0) {
// //         input.value = 1;
// //     }
// //     updateCartTotal();
// // }

// // function addToCartClicked(event) {
// //     var button = event.target;
// //     var shopItem = button.closest('.top_trends_image_div');
// //     var title = button.getAttribute('data-name');
// //     var price = button.getAttribute('data-price');
// //     var imageSrc = button.getAttribute('data-image');

// //     addItemToCart(title, price, imageSrc);
// //     updateCartTotal();
// // }



// // function addItemToCart(title, price, imageSrc) {
// //     var cartRow = document.createElement('div');
// //     cartRow.classList.add('cart-row');
// //     var cartItems = document.getElementsByClassName('cart-items')[0];
// //     var cartItemNames = cartItems.getElementsByClassName('cart-item-title');

// //     for (var i = 0; i < cartItemNames.length; i++) {
// //         if (cartItemNames[i].innerText === title) {
// //             alert('This item is already in the cart');
// //             return;
// //         }
// //     }

// //     var cartRowContents = `
// //         <div class="cart-item cart-column">
// //             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
// //             <span class="cart-item-title">${title}</span>
// //         </div>
// //         <span class="cart-price cart-column">₱${price}</span>
// //         <div class="cart-quantity cart-column">
// //             <input class="cart-quantity" type="number" value="1">
// //             <button class="remove_button" type="button">REMOVE</button>
// //         </div>`;

// //     cartRow.innerHTML = cartRowContents;
// //     cartItems.append(cartRow);
    
// //     cartRow.getElementsByClassName('remove-button')[0].addEventListener('click', removeCartItem);
// //     cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
// // }




// // function updateCartTotal() {
// //     var cartItemContainer = document.getElementsByClassName('cart-items')[0];
// //     var cartRows = cartItemContainer.getElementsByClassName('cart-row');
// //     var total = 0;

// //     for (var i = 0; i < cartRows.length; i++) {
// //         var cartRow = cartRows[i];
// //         var priceElement = cartRow.getElementsByClassName('cart-price')[0];
// //         var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0];
// //         var price = parseFloat(priceElement.innerText.replace('₱', ''));
// //         var quantity = quantityElement.value;
// //         total += price * quantity;
// //     }

// //     total = Math.round(total * 100) / 100;
// //     document.getElementsByClassName('cart-total')[0].innerText = '₱' + total;
// // }




const recom_slider = document.querySelector(".recom_div_slider_wrapper");
const recom_prev_button = document.getElementById("recoms_preva");
const recom_next_button = document.getElementById("recoms_nexta");

let recom_curr_index = 0;
// let interval;


function update_recom_slider_position() {
    const recom_slide_width = recom_slider.children[0].offsetWidth;
    recom_slider.style.transform = `translateX(-${recom_curr_index * recom_slide_width}px)`;
}

function update_recom_buttons() {
    recom_prev_button.disabled = recom_curr_index === 0;
    recom_next_button.disabled = recom_curr_index === recom_slider.children.length - 1;
}

function nextSlide() {
    if (recom_curr_index < recom_slider.children.length - 1) {
        recom_curr_index++;
    } else {
        recom_curr_index = 0; 
    }
    update_recom_slider_position();
    update_recom_buttons();
}


// Start auto-slide every 10 seconds
// function startAutoSlide() {
//     interval = setInterval(nextSlide, 5000);
// }

// Reset auto-slide when manually interacting
// function resetAutoSlide() {
//     clearInterval(interval);
//     startAutoSlide();
// }




// Event Listeners
recom_prev_button.addEventListener("click", () => {
    if (recom_curr_index > 0) {
        recom_curr_index--;
        update_recom_slider_position();
        update_recom_buttons();
        // resetAutoSlide();
    }
});

recom_next_button.addEventListener("click", () => {
    if (recom_curr_index < recom_slider.children.length - 1) {
        recom_curr_index++;
        update_recom_slider_position();
        update_recom_buttons();
        // resetAutoSlide();
    }
});

// Ensure correct position on resize
window.addEventListener("resize", update_recom_slider_position);

// Initialize

// startAutoSlide();















// SET A SLIDER FUNCTIONS ================ ============== ============
const seta_slider = document.getElementById("seta_slider_wrapper");
const seta_prevButton = document.getElementById("preva");
const seta_nextButton = document.getElementById("nexta");

let seta_curr_index = 0;

function update_seta_slider_position() {
    const seta_slideWidth = seta_slider.children[0].offsetWidth;
    seta_slider.style.transform = `translateX(-${seta_curr_index * seta_slideWidth}px)`;
}

function update_seta_buttons() {
    seta_prevButton.disabled = seta_curr_index === 0;
    seta_nextButton.disabled = seta_curr_index === seta_slider.children.length - 1;
}

seta_prevButton.addEventListener("click", () => {
    if (seta_curr_index > 0) {
        seta_curr_index--;
        update_seta_slider_position();
        update_seta_buttons();
    }
});

seta_nextButton.addEventListener("click", () => {
    if (seta_curr_index < seta_slider.children.length - 1) {
        seta_curr_index++;
        update_seta_slider_position();
        update_seta_buttons();
    }
});

window.addEventListener('resize', update_seta_slider_position);
update_seta_buttons();
