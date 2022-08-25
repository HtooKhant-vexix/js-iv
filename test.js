let select = document.querySelector("#select");
let form = document.querySelector("#f");
let num = document.querySelector("#num");
let tbody = document.querySelector("tbody");


let cfun =()=>{
    let f = items.find((e)=>{
        return e.id == select.value;
    });
    let sum = f.price * num.valueAsNumber;
    tbody.innerHTML += `
    <tr class="parents">
    <td>
    ${f.name}<br>
    <span onclick="del(event)" class="text-danger del">Delete</span>
    </td>
    <td class="text-end">${f.price}</td>
    <td class="text-end">${num.valueAsNumber}</td>
    <td class="text-end cos">${sum}</td>
    </tr>
    `;
    
}

function total(){  
    let totalCost = document.querySelector(".sum");  
    let costs = document.querySelectorAll(".cos");
    let ar = [...costs].reduce((pv,cv)=>{        
        return pv + Number(cv.innerText);
    },0);
    totalCost.innerText = ar;
};

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    cfun();
    num.value = null;
    total();
});

function del(event){
    event.target.parentElement.parentElement.remove();
    total();
};

document.querySelector(".print").addEventListener("click", ()=>{
    window.print();
});





