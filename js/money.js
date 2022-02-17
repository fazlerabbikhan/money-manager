function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const amount = parseFloat(inputText);
    return amount;
}

// handling calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeAmount = getInput('income-input');
    const foodCost = getInput('food-input');
    const rentCost = getInput('rent-input');
    const clothesCost = getInput('clothes-input');

    // calculate expenses
    const newTotalExpenses = foodCost + rentCost + clothesCost;

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = newTotalExpenses;

    console.log(newTotalExpenses);

    // calculate balance
    const newBalance = incomeAmount - newTotalExpenses;

    const balance = document.getElementById('balance');
    balance.innerText = newBalance;

    console.log(newBalance);
})

// handling save button
document.getElementById('save-button').addEventListener('click', function () {
    const savePercentage = getInput('save-input');
    const incomeAmount = getInput('income-input');

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);

    // calculate saving amount
    const newSavingAmount = incomeAmount * savePercentage / 100;

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = newSavingAmount;

    console.log(newSavingAmount);

    // calculate remaining balance
    const newRemainingBalance = balanceAmount - newSavingAmount;

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = newRemainingBalance;

    console.log(newRemainingBalance);
})