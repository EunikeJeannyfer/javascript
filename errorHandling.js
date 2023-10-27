
// class CustomError extends Error{
//     constructor(message){
//         super(message)
//         // this.name = "CustomError"        
//         this.name = "this.name"

//         this.object = {
//             status: "Error",
//             code : code,
//             message: message
//         }  
//     }
// }


// try {
//     throw new CustomError("Ini contoh error kustom")
// } catch (error) {
//     if (error instanceof CustomError){
//         //INFO : KARENA OBJEK MAKA PANGGILNYA HRS ERROR.MESSAGE
//         // console.log("Menangkap CustomError: ", error.message)

//         //SEDANGKAN YG INI AKAN NAMPILIN THIS OBJECT + MESSAGE
//         console.log("CustomError: ", error)
//     }
//     else{
//         // console.error("Menangkap error: ", error.message)
//         console.error("error: ", error)
//     }
// }

//EXERCISE 

function takeOff(altitude){
    if (altitude > 10000){
        throw new Error ("Ketinggian terlalu tinggi")
    }
    if (altitude < 0){
        throw new Error ("Ketinggian tidak valid")
    }
    
    return `Pesawat lepas landas menuju ketinggian ${altitude} meter`
}

function flightSimulation (altitude){
    try{
        console.log(takeOff(altitude))
    } 
    catch (error){
        console.error(error.message)
    }
}

flightSimulation(12000)
flightSimulation(-500)
flightSimulation(8000)
