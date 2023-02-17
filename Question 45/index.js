"use strict";
function car_info(car) {
    return car;
}
let myCarObj = {
    manufacturer: "Toyota",
    model: "Carolla",
    "year": 2020,
    "color": "blue"
};
const myCar = car_info(myCarObj);
console.log(myCar); // { manufacturer: 'Toyota', model: 'Corolla', year: 2019, color: 'blue' }
