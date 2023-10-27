//ASYNCHRONOUS

// //PERCOBAAN 1
// const fs = require("fs")
// const option = { encoding: "utf-8"}

// const callback = (err, data) => {
//     console.log("Aku muncul kedua")
//     if (err) return console.error("Error: ", err.message)
//     console.log("Isi File: ", data)
// }

// fs.readFile("contoh.txt", option, callback)

// console.log("Aku muncul pertama")


//PERCOBAAN KEDUA
const fs = require("fs")
const option = { encoding: "utf-8"}

console.log("Aku muncul pertama")
const data = fs.readFileSync("contoh.txt", option)
console.log("Isi File : ", data)

console.log("Aku muncul ketiga")

//PROMISE
function isPasswordCorrect(password){
    const promise=new Promise((resolve,reject)=>{
        console.log('Password:',password)
        if(password!='123456'){
            return reject("Wrong Password!");
        }
        resolve("Password is Correct");
    });
    return promise
}
isPasswordCorrect('123456')
.then(resolve=>console.log(resolve))
.catch(reject=>console.error(reject))

isPasswordCorrect('123455')
.then(resolve=>console.log(resolve))
.catch(reject=>console.error(reject))
