// Event Handler For Memory 
const memory8Button = document.getElementById('memory8-button');
const memory16Button = document.getElementById('memory16-button');
// function getMemory(){

// }
memory8Button.addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
})

memory16Button.addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
})

// Event Handler For Storage 
const storage256Button = document.getElementById('storage256-button');
const storage512Button = document.getElementById('storage512-button');
const storage1TBButton = document.getElementById('storage1TB-button');
// console.log(storage256Button, storage512Button, storage1TBButton);
storage256Button.addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
})
storage512Button.addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
})
storage1TBButton.addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
})

// Event Handler For Delivery Option 
const delivery25Button = document.getElementById('delivery25-button');
const delivery21Button = document.getElementById('delivery21-button');

delivery25Button.addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
})
delivery21Button.addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
})

// Total Cost
const memoryCost = document.getElementById('memory-cost');
const totalMemoryCost = parseInt(memoryCost.innerText);
const storageCost = document.getElementById('storage-cost');
const totalStorageCost = parseInt(storageCost.innerText);
const deliveryCost = document.getElementById('delivery-cost');
const totalDeliveryCost = deliveryCost.innerText;

const totalCost = document.getElementById('total-cost');

// totalCost.innerText = totalMemoryCost + totalStorageCost + totalDeliveryCost;





