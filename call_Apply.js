const normalPerson = {
    firstName: "soggier",
    lastName: "Undine",
    salary: 17000,
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
    cBill: function(amount) {
        this.salary =  this.salary - amount;
        return this.salary;
    }, 
}

const vipParson = {
    firstName: "Coudhury",
    lastName: "Saheb",
    salary: 50000,
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
}

const minister = {
    firstName: "Imran",
    lastName: "Khan",
    salary: 80000,
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
}

// const vipCBill = normalPerson.cBill.bind(vipParson);
// vipCBill(5000);
// vipCBill(7000)
// console.log(vipParson);

// const ministerBill = normalPerson.cBill.bind(minister);
// ministerBill(50000);
// console.log(minister);

normalPerson.cBill.call(vipParson, 5000)
console.log(vipParson.salary);

normalPerson.cBill.apply(minister, [70000]);
console.log(minister.salary);