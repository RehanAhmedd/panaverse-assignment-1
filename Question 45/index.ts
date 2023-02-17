interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // additional properties can have any key and value
}

function car_info(car: Car): Car {
  return car;
}

let myCarObj: Car = {
  manufacturer: "Toyota",
  model: "Carolla",
  "year": 2020,
  "color": "blue"
}

const myCar = car_info(myCarObj);
console.log(myCar); // { manufacturer: 'Toyota', model: 'Corolla', year: 2019, color: 'blue' }
