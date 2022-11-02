const objData = {
    name: 'Pratap Das',
    mob: 7000000000,
    email: 'contact.pratap.das@gmail.com'
};
const jsonData = JSON.stringify(objData); //stringify=>convert obj to json
console.log(jsonData);

const myObj = JSON.parse(jsonData); //parse=> convert json to obj 
console.log(myObj);




//JSON file CRUD
const fs = require('fs');
const obj = {
    name: 'Pratap Das',
    mob: 7000000000,
    email: 'contact.pratap.das@gmail.com'
};
const objToJson = JSON.stringify(obj);
//JSON file Create
// fs.writeFile('data.json', objToJson, (err)=>{
//     console.log('Save JSON Data');
// });

//JSON file read
// fs.readFile('data.json', 'utf-8', (err, data)=>{
//     console.log(data);
// });

// or

fs.readFile('data.json', 'utf-8', (err, data) => {
    const myObj = JSON.parse(data); //parse=> convert json to obj 
    console.log(myObj);
    const jsonData = JSON.stringify(myObj); //stringify=>convert obj to json
    console.log(jsonData);
});