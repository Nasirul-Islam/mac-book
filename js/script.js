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
memory8Button.addEventListener('click', function () {
    memoryCost.innerText = 0;
    const totalMemoryCost = parseInt(bestCost.innerText) + parseInt(memoryCost.innerText);
    totalCost.innerText = totalMemoryCost;
})
memory16Button.addEventListener('click', function () {
    memoryCost.innerText = 180;
    const totalMemoryCost = parseInt(bestCost.innerText) + parseInt(memoryCost.innerText);
    totalCost.innerText = totalMemoryCost;
})

// Event Handler For Storage 
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
delivery25Button.addEventListener('click', function () {
    deliveryCost.innerText = 0;
})
delivery21Button.addEventListener('click', function () {
    deliveryCost.innerText = 20;
})

// Total Cost
// function updateTotal() {
//     const bestCostSum = Number(bestCost.innerText);
//     const memoryCostSum = Number(memoryCost.innerText);
//     const totalMemoryCost = bestCostSum + memoryCostSum;
//     totalCost.innerText = totalMemoryCost;
// }

// const productTotal = document.getElementById(totalId)
// productTotal.innerText = productNumberValue * price

