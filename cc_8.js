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