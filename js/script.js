function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product+'-count');
    const productCount = parseInt(productInput.value);
    let newProductCount = productCount;
    if (isIncrease == true) {
        newProductCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0) {
        newProductCount =productCount - 1;
    }

    productInput.value = newProductCount;
    let productTotal;
    if (product == "guitar") {
        productTotal = newProductCount * 153190;
    } else if(product == "strap"){
        productTotal = newProductCount * 4380;
    } else if(product == "processor"){
        productTotal = newProductCount * 87600;
    } else {
        productTotal = newProductCount * 8760;
    }
    document.getElementById(product+'-total').innerText = productTotal;
    handleCheckout();
}

function handleCheckout() {
    // const guitarInput = document.getElementById('guitar-count');
    // const guitarCount = parseInt(guitarInput.value);
    // const strapInput = document.getElementById('strap-count');
    // const strapCount = parseInt(strapInput.value);
    // const processorInput = document.getElementById('processor-count');
    // const processorCount = parseInt(processorInput.value);
    // const ampInput = document.getElementById('amp-count');
    // const ampCount = parseInt(ampInput.value);

    const guitarCount = getItems('guitar');
    const strapCount = getItems('strap');
    const processorCount = getItems('processor');
    const ampCount = getItems('amp');

    const subTotal = guitarCount * 153190 + strapCount * 4380 + processorCount * 87600 + ampCount * 8760;
    document.getElementById('sub-total').innerText = subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = subTotal + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

function getItems(product) {
    productInput = document.getElementById(product+'-count');
    return parseInt(productInput.value);
} 

function clickCheckout() {
    alert("Thanks for purchasing with us!!!");
    location.reload();
}