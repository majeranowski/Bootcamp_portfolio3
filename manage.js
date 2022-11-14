//creating parent class 
class Employees {
    constructor(name, typeOfEmployment, target, actualSales) {
        this.name = name;
        this.typeOfEmployment = typeOfEmployment;
        this.target = target;
        this.actualSales = actualSales;
    }
};

//creating sublasses with super calss Employees
class Salaried extends Employees {
    constructor(name, typeOfEmployment, target, actualSales, salary) {
        super(name, typeOfEmployment, target, actualSales);
        this.salary = salary;
    }
    //method with logic if monthly target was exceeded
    payout() {
        if (this.actualSales > this.target) {
            console.log(`${this.name}, who is ${this.typeOfEmployment} employee, recives this mount £` + (Number(this.salary) + Number(this.salary * 10/100)));
        } else {
            console.log(`${this.name}, who is ${this.typeOfEmployment} employee, recives this mount £ ${this.salary}`)
        };
    }
};

class Hourly extends Employees {
    constructor(name, typeOfEmployment, target, actualSales, hours, ratePerHour) {
        super(name, typeOfEmployment, target, actualSales);
        this.hours = hours;
        this.ratePerHour = ratePerHour;
    }
    //method with logic if monthly target was exceeded
    payout() {
        let salary = Number(this.hours) * Number(this.ratePerHour);
        let salaryIncreased = Number(this.hours) * (Number(this.ratePerHour) + Number(this.ratePerHour) * 50/100);
        if (this.actualSales > this.target) {
            console.log(`${this.name}, who is ${this.typeOfEmployment} employee, recives this mount £` + salaryIncreased);
        } else {
            console.log(`${this.name}, who is ${this.typeOfEmployment} employee, recives this mount £` + salary);
        };

    }
};

class Hybrid extends Employees {
    constructor(name, typeOfEmployment, target, actualSales, salary, hours, ratePerHour) {
        super(name, typeOfEmployment, target, actualSales);
        this.salary = salary;
        this.hours = hours;
        this.ratePerHour = ratePerHour;
    }
    //method with logic if monthly target was exceeded
    payout() {
        let bonusPay = Number(this.hours) * Number(this.ratePerHour);
        let bonusPayTarget = Number(this.hours) * (Number(this.ratePerHour) + Number(this.ratePerHour) * 20/100);
        if (this.actualSales > this.target) {
            console.log(`${this.name}, who is ${this.typeOfEmployment} employee, recives this mount £` + (Number(this.salary) + bonusPayTarget));
        } else {
            console.log(`${this.name}, who is ${this.typeOfEmployment} employee, recives this mount £` + (Number(this.salary) + bonusPay));
        };
    };
}
//Creating Salaried employees
let John = new Salaried ("John", "salaried", 1000, 800, 1200);
let Angela = new Salaried ("Angela", "salaried", 800, 1000, 1000);
//Creating Hourly employees
let Mark = new Hourly ("Mark", "hourly", 1000, 900, 160, 11);
let Diana = new Hourly ("Diana", "hourly", 800, 1000, 160, 10);
//Creating Hybrid employees
let Steven = new Hybrid ("Steven", "hybrid", 1000, 1000, 1500, 10, 10);
let Deborah = new Hybrid("Deborah", "hybrid", 800, 1000, 1200, 10, 12)

//calling payout methods on all the employees
console.log("Salaried:");
John.payout();
Angela.payout();

console.log("Hourly:");
Mark.payout();
Diana.payout();

console.log("Hybrid:");
Steven.payout();
Deborah.payout();