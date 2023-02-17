// create an object for each mobile
interface Mobile{
  make: string,
  model:string,
  year: number,
  color: string
};


const hawaii : Mobile = {
    make: "Hawaii",
    model: "P20 Pro",
    year: 2022,
    color: "black"
  };
  
  const oneplus : Mobile = {
    make: "Oneplus",
    model: "Oneplus 8 pro",
    year: 2021,
    color: "black"
  };

  let mobileList :Mobile[] = [hawaii,oneplus]

  // our list has size 2 and if we want to access the 3 object in list then it throws index out of bound error
  //console.log(mobileList[2]);

  console.log(mobileList);
  
  

 