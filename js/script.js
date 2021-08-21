// Event Handler For Memory 
const memory8Button = document.getElementById('memory8-button');
const memory16Button = document.getElementById('memory16-button');
const memoryCost = document.getElementById('memory-cost');

memory8Button.addEventListener('click', function () {
    memoryCost.innerText = 0;
})

memory16Button.addEventListener('click', function () {
    memoryCost.innerText = 180;
    updateTotal()
})

// Event Handler For Storage 
const storage256Button = document.getElementById('storage256-button');
const storage512Button = document.getElementById('storage512-button');
const storage1TBButton = document.getElementById('storage1TB-button');
const storageCost = document.getElementById('storage-cost');

storage256Button.addEventListener('click', function () {
    storageCost.innerText = 0;
})

storage512Button.addEventListener('click', function () {
    storageCost.innerText = 100;
    updateTotal()
})

storage1TBButton.addEventListener('click', function () {
    storageCost.innerText = 180;
    updateTotal()
})

// Event Handler For Delivery Option 
const delivery25Button = document.getElementById('delivery25-button');
const delivery21Button = document.getElementById('delivery21-button');
const deliveryCost = document.getElementById('delivery-cost');

delivery25Button.addEventListener('click', function () {
    deliveryCost.innerText = 0;
})

delivery21Button.addEventListener('click', function () {
    deliveryCost.innerText = 20;
})

// Total Cost
const bestCost = document.getElementById('best-cost');
const totalCost = document.getElementById('total-cost');
// console.log(bestCost)



function updateTotal() {
    const bestCostSum = Number(bestCost.innerText);
    const memoryCostSum = Number(memoryCost.innerText);
    const totalMemoryCost = bestCostSum + memoryCostSum;
    totalCost.innerText = totalMemoryCost;
    // const price = document.getElementById(price + '-)
}


