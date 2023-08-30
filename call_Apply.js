const normalPerson = {
    firstName: "sogir",
    lastName: "Uddin",
    selary: 17000,
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
    cBill: function(amount) {
        this.selary =  this.selary - amount;
        return this.selary;
    }, 
}

normalPerson.cBill(5000);
console.log(normalPerson);