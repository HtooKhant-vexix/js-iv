let items = [
    {
        id: 1,
        name: "orange",
        price: 500
    },
    {
        id: 2,
        name: "apple",
        price: 600
    },
    {
        id: 3,
        name: "banana",
        price: 700
    },
    {
        id: 4,
        name: "mango",
        price: 800
    },
    {
        id: 5,
        name: "pineapple",
        price: 900
    }
];


let loop = items.map((e)=>{
    select.innerHTML += `<option value="${e.id}">${e.name}</option>`;
  }) 

  
