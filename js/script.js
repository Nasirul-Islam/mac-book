// All ID is here
const memory8Button = document.getElementById('memory8-button');
const memory16Button = document.getElementById('memory16-button');

const storage256Button = document.getElementById('storage256-button');
const storage512Button = document.getElementById('storage512-button');
const storage1TBButton = document.getElementById('storage1TB-button');

const delivery25Button = document.getElementById('delivery25-button');
const delivery21Button = document.getElementById('delivery21-button');

const bestCost = document.getElementById('best-cost');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalCost = document.getElementById('total-cost');

const pomoInput = document.getElementById('pomo-input');
const pomoButton = document.getElementById('pomo-button');
const discount = document.getElementById('discount');

// Event Handler For Memory 
function getMemoryPrice() {
    const totalMemoryCost = parseInt(bestCost.innerText) + parseInt(memoryCost.innerText);
    totalCost.innerText = totalMemoryCost;
    return totalMemoryCost;

}
memory8Button.addEventListener('click', function () {
    memoryCost.innerText = 0;
    getMemoryPrice()
    updateTotalPrice()
})
memory16Button.addEventListener('click', function () {
    memoryCost.innerText = 180;
    getMemoryPrice()
    updateTotalPrice()
})

// Event Handler For Storage 
function getStoragePrice() {
    const totalStorageCost = parseInt(bestCost.innerText) + parseInt(storageCost.innerText);
    totalCost.innerText = totalStorageCost;
    return totalStorageCost;

}

storage256Button.addEventListener('click', function () {
    storageCost.innerText = 0;
    getStoragePrice()
    updateTotalPrice()
})
storage512Button.addEventListener('click', function () {
    storageCost.innerText = 100;
    getStoragePrice()
    updateTotalPrice()
})
storage1TBButton.addEventListener('click', function () {
    storageCost.innerText = 180;
    getStoragePrice()
    updateTotalPrice()
})

// Event Handler For Delivery Option
function getDeliveryPrice() {
    const totalDeliveryCost = parseInt(bestCost.innerText) + parseInt(deliveryCost.innerText);
    totalCost.innerText = totalDeliveryCost;
    return totalDeliveryCost;

}

delivery25Button.addEventListener('click', function () {
    deliveryCost.innerText = 0;
    getDeliveryPrice()
    updateTotalPrice()
})
delivery21Button.addEventListener('click', function () {
    deliveryCost.innerText = 20;
    // getDeliveryPrice()
    updateTotalPrice()
})

// TOtal price
function updateTotalPrice() {
    const bestPrice = parseInt(bestCost.innerText);
    const memoryPrice = parseInt(memoryCost.innerText);
    const storagePrice = parseInt(storageCost.innerText);
    const deliveryPrice = parseInt(deliveryCost.innerText);
    const totalprice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    totalCost.innerText = totalprice;
    discount.innerText = totalprice;
    return totalprice;
}

// Pomo Code
pomoButton.addEventListener('click', function () {
    if (pomoInput.value == 'stevekaku') {
        function percentage(num, per) {
            return (num / 100) * per;
        }
        discount.innerText = percentage(parseInt(discount.innerText), 80);
    }
    pomoInput.value = '';
})


