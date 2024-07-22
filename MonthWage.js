
function monthlyWage(dailyWage, hours) {
    const workingDays = 20;
    const wage = dailyWage * workingDays * hours;
    return wage;
}

const dailyWage = 20;
const hours = 8;
const monthlyWages = monthlyWage(dailyWage, hours);
console.log(`Monthly wage: ${monthlyWages}`);