
function monthlyWage(dailyWage, hours) {
    const workingDays = 20;
    const totalHours = hours * workingDays;
    let wage = 0;

    if(totalHours >= 100 && workingDays >= 20) {
        
        wage = dailyWage * totalHours;
    }

    return wage;
}

const dailyWage = 20;
const hours = 8;
const monthlyWages = monthlyWage(dailyWage, hours);
console.log(`Monthly wage: ${monthlyWages}`);

