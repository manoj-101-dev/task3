
// Question 1
let obj1={name:"Person 1",age:5}
let obj2={age:5,name:"Person 1"}
console.log(JSON.stringify(obj1)==JSON.stringify(obj2))



// Question 2 and 3

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("Get","https://restcountries.com/v3.1/all" );
xhr.send();
xhr.onload = function (){
    const info = JSON.parse(xhr.response);
    console.log(info);
    console.log(xhr.status);
    for(let i = 0; i<info.length; i++){
        console.log(`
        flag : ${info[i].flag}
        Country Name : ${info[i].name.common}
        Region : ${info[i].region}
        Sub Region : ${info[i].subregion}
        Populations : ${info[i].population}`)

    }
};



