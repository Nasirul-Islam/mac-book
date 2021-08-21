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

// Event Handler For Memory 
function getMemoryPrice(isplus) {
    if (isplus == true) {
        memoryCost.innerText = 180;
    }
    else {
        memoryCost.innerText = 0;
    }
    const totalMemoryCost = parseInt(bestCost.innerText) + parseInt(memoryCost.innerText);
    totalCost.innerText = totalMemoryCost;
    return totalMemoryCost;
}

memory8Button.addEventListener('click', function () {
    getMemoryPrice(false)
})
memory16Button.addEventListener('click', function () {
    getMemoryPrice(true)
})

const abc =


    // Event Handler For Storage 
    function getStoragePrice(plus) {
        if (plus == 0) {
            storageCost.innerText = 0;
        }
        else if (plus == 100) {
            storageCost.innerText = 100;
        }
        else if (plus == 180) {
            storageCost.innerText = 180;
        }
        const totalStorageCost = parseInt(bestCost.innerText) + parseInt(storageCost.innerText);
        totalCost.innerText = totalStorageCost;
    }

storage256Button.addEventListener('click', function () {
    getStoragePrice(0)
})
storage512Button.addEventListener('click', function () {
    getStoragePrice(100)
})
storage1TBButton.addEventListener('click', function () {
    getStoragePrice(180)
})

// Event Handler For Delivery Option 
function getDeliveryPrice(isadd) {
    if (isadd == 0) {
        deliveryCost.innerText = 0;
    }
    else if (isadd == 20) {
        deliveryCost.innerText = 20;
    }
    const totalDeliveryCost = parseInt(bestCost.innerText) + parseInt(deliveryCost.innerText);
    totalCost.innerText = totalDeliveryCost;
}

delivery25Button.addEventListener('click', function () {
    getDeliveryPrice(0)
})
delivery21Button.addEventListener('click', function () {
    getDeliveryPrice(20)
})

// Total Cost
function updateTotal() {

}


