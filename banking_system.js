//CHALLENGE CHAPTER 2

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
    }).format(number);
}


class User{
    //ENCAPSULATION
    _accountNumber
    constructor(name, account){
        if(this.constructor === User){
            throw new Error("Cannot instantiate from Abstract Class")
        }
        this.name = name
        this._accountNumber = account
    }

    getAccountDetail(){
        console.log(
            "Nama " + this.name, 
            "Account Number " + this._accountNumber 
        )
    }
}

//INHERITANCE
class BankAccount extends User{
    constructor(name, account, saldo){
        super(name,account)
        this.saldo = saldo
    }

    deposit(tambah){
        
        if (isNaN(tambah) || tambah === ''){
            throw new Error("Invalid Input!")
        } 
        else{
            tambah = parseInt(tambah)
            this.saldo = this.saldo + tambah
            document.getElementById("saldo").innerHTML = "Jumlah saldo anda saat ini : " + rupiah(this.saldo)
        }
    }
    
    withdraw(kurang){
       
        if (isNaN(kurang) || kurang === ''){
            throw new Error("Invalid Input!") 
        } 
        else{
            if (kurang != null){
                kurang = parseInt(kurang)
    
                if(kurang < this.saldo){
                    this.saldo = this.saldo - kurang
                    document.getElementById("saldo").innerHTML = "Jumlah saldo anda saat ini : " + rupiah(this.saldo)
                }
                else{
                    throw new Error("Maaf saldo kurang")
                }
            }
        }
    }

    getAccountDetail(){
        console.log(
            "Nama " + this.name, 
            "Account Number " + this._accountNumber,
            "Saldo " + this.saldo
        )
    }
}

const bank = new BankAccount("Jeanny",123457244828, 200000)

document.getElementById('buttonTambah').addEventListener('click', function() {
    try {
        let amount = prompt ("Input saldo yang ingin ditambahkan :",)
        bank.deposit(amount)
    }
    catch(error){
        alert(error.message)
    }
});

document.getElementById('buttonKurang').addEventListener('click', function() {
    try {
        let amount = prompt ("Input saldo yang ingin ditambahkan :",)
        bank.withdraw(amount)
    }
    catch(error){
        alert(error.message)
    }
});

//CEK POLYMORPHISM
bank.getAccountDetail()

//ERROR karena kelas Abstract
const user = new User("Lala", 123456789123)

