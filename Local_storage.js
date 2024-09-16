//  localStorage data is not loss 
// const nameElemnet = document.querySelector('.name-tag')
// nameElemnet.innerText = localStorage.myName
// console.log(nameElemnet);



// const nameElement = document.querySelector('.name-tag')
// const nameInput = document.querySelector('.name')

// // nameElement.innerText = localStorage.myName;
// nameElement.innerText = localStorage.getItem('myName');


//  const result = nameElement.addEventListener('input',(e)=>{
//         // localStorage.myName = e.target.value;
//         // nameElement.innerText = localStorage.myName;
//         localStorage.setItem('myName',e.target.value) 
//  })



// localStorage.setItem('name','harry')

let key = prompt("Enter Key ")
let value = prompt("Enter value ")

localStorage.setItem(key,value)

console.log(` The key is ${key} :  and value is ${localStorage.getItem(key)} ` );

if(key == "red" || key == "yellow"){
    localStorage.removeItem(key)
}

// localStorage.removeItem(key)

if(key == 0 || value==0){
    localStorage.clear
}




