const cargoHold = [
    "oxygen tanks",
    "space suits",
    "parrot",
    "instruction manual",
    "meal packs",
    "slinky",
    "security blanket"
  ];

const index = cargoHold.indexOf('slinky');
if (index !== -1) {
    cargoHold[index] = 'space tether';
}
console.log(cargoHold);

cargoHold.pop();
console.log(cargoHold);

cargoHold.shift();
console.log(cargoHold);

cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold);

console.log(`${cargoHold.length} items in the cargo hold
Details: ${cargoHold}`);