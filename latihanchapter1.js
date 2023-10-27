//No 1 --> switch case menentukan nilai siswa 
let nilai = window.prompt("Inputkan nilai anda : ")

function grading(nilai){
    let grade = ""
    switch (true) {
        case (nilai == 100):
            grade = "A"
            break;
        case (nilai >= 80 && nilai < 100):
            grade = "B"
            break;
        case (nilai >= 70 && nilai < 80):
            grade = "C"
            break;
        case (nilai >= 50 && nilai < 70):
            grade = "D"
            break;
        case (nilai < 50 && nilai > 0):
            grade = "E"
            break;
        default:
            grade = "Invalid Input!"
            break;
    }
    console.log("Nilai anda : ", grade)
}

grading(nilai)


//No 2 --> buat segitiga siku terbalik, loop
let n = 5
let row = '\n'
for (let i = n; i >= 0; i--){
    for (let j = 0; j <= i; j++){
        row += "*"
    }
    row += '\n'
}
console.log(row)

//No 3 --> menu kalkulator
const calculator = (operan1, operan2, operator) => {
    let hasil = 0
    if (operator == "*")
        hasil = operan1 * operan2
    else if (operator == "+")
        hasil = operan1 + operan2
    else if (operator == "-")
        hasil = operan1 - operan2
    else if (operator == "/") {
        hasil = operan1 / operan2
    }
    else {
        console.log("Input salah satu operator berikut * / + -")
    }
    
    if (hasil != 0){
        console.log(operan1,  operator, operan2, hasil)
    }
}

calculator(2,5,"+")

//No 4 --> class cylinder
class Cylinder{
    constructor(h, d){
        this.height = h;
        this.diameter = d;
        this.radius = d/2  // hitung radius;
        
    }
    volume(){
        let vol = 3.14 * (this.radius**2) * this.height
        return vol
    }
    surfaceArea(){ //luas permukaan
        let l = 2 * 3.14 * this.radius * this.height * (this.radius + this.height)
        return l
    }
}

let cylA = new Cylinder(10,5)
console.log("Radius : ", cylA.radius, 
            "Volume : ", cylA.volume(),
            "Luas Permukaan : ", cylA.surfaceArea())