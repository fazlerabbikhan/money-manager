// handling calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;

    const foodInput = document.getElementById('food-input');
    const foodCost = foodInput.value;

    const rentInput = document.getElementById('rent-input');
    const rentCost = rentInput.value;

    const clothesInput = document.getElementById('clothes-input');
    const clothesCost = clothesInput.value;

    // calculate expenses
    const newTotalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);

    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesText = totalExpenses.innerText;

    totalExpenses.innerText = newTotalExpenses;

    console.log(newTotalExpenses);

    // calculate balance
    const newBalance = parseFloat(incomeAmount) - newTotalExpenses;

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;

    balance.innerText = newBalance;

    console.log(newBalance);
})

// handling save button
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const savePercentage = saveInput.value;

    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;

    // calculate saving amount
    const newSavingAmount = parseFloat(incomeAmount) * parseFloat(savePercentage) / 100;

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = savingAmount.innerText;

    savingAmount.innerText = newSavingAmount;

    console.log(newSavingAmount);

    // calculate remaining balance
    const newRemainingBalance = parseFloat(balanceText) - newSavingAmount;

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = remainingBalance.innerText;

    remainingBalance.innerText = newRemainingBalance;

    console.log(newRemainingBalance);
})