
class Employee {
    calculateWage(wage, days, hours) {
        const totalWage = wage * days * hours;
        return totalWage;
    }
}

const companyA = new Employee();
const companyAWage = 10; 
const companyADays = 20;
const companyAHours = 8;
const wageA = companyA.calculateWage(companyAWage, companyADays, companyAHours);
console.log(`Company A wage per month: ${wageA}`);

const companyB = new Employee();
const companyBWage = 12;
const companyBDays = 22;
const companyBHours = 7;
const wageB = companyB.calculateWage(companyBWage, companyBDays, companyBHours);
console.log(`Company B wage per month: ${wageB}`);