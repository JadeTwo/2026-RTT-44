interface Payable {
    // method
    calculateSalary(): number;
}

class FullTimeEmployee implements Payable {
    
    salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    calculateSalary(): number {
        return this.salary;
    }
}

class PartTimeEmployee implements Payable {
    
    hourlyRate: number;
    hoursWorked: number;

    constructor(hourlyRate: number, hoursWorked: number) {
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}


// employee must be of type Payable
function printSalary(employee: Payable): void {
    console.log("Salary is: " + employee.calculateSalary());
}

// both classes here implement the Payable interface
const fullTime = new FullTimeEmployee(5000);
const partTime = new PartTimeEmployee(25, 80);

// pass either one of the objects from these classes to the function
printSalary(fullTime);
printSalary(partTime);