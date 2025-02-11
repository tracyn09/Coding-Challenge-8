//Task 1
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
    console.log(`Net Salary: $${netSalary}`)
}
//Test Case
calculateSalary(5000, 500, 0.1)

//Task 2
function calculateDiscount(price, discountRate) {
    let finalPrice = price - (price * discountRate)
    console.log(`Final Price: $${finalPrice}`)
}
//Test Case
calculateDiscount(100, 0.2)

//Task 3
const calculateServiceFee = (amount, serviceType) => {
    let fee = 0
    if (serviceType === "Premium") fee = amount * 0.15;
    else if (serviceType === "Standard") fee = amount * 0.10;
    else if (serviceType === "Basic") fee = amount * 0.05
    console.log(`Service Fee: $${fee}`)
}
//Test Data
calculateServiceFee(200, "Premium")

//Task 4
function calculateRentalCost(days, carType, insurance = false) {
    let costs = 0 
    if (carType === "Economy") costs = 40 * days
    else if (carType === "Standard") costs = 60 * days
    else if (carType === "Luxury") costs = 100 * days
    
    if (insurance) costs += (20 * days)
    console.log(`Total Rental Cost: $${costs}`)
}
//Test Case
calculateRentalCost(3, "Economy", true)