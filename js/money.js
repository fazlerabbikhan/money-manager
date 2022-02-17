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

    if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
        // calculate expenses
        const newTotalExpenses = foodCost + rentCost + clothesCost;

        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = newTotalExpenses;

        console.log(newTotalExpenses);

        if (incomeAmount > newTotalExpenses) {
            // calculate balance
            const newBalance = incomeAmount - newTotalExpenses;

            const balance = document.getElementById('balance');
            balance.innerText = newBalance;

            console.log(newBalance);
        }
        else if (incomeAmount == newTotalExpenses) {
            const balance = document.getElementById('balance');
            balance.innerText = '00';
        }
        else if (incomeAmount < newTotalExpenses) {
            const balance = document.getElementById('balance');
            balance.innerText = 'Income must be bigger than total expenses!';
        }
        else {
            const balance = document.getElementById('balance');
            balance.innerText = '';
        }
    }
    else {
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = 'Please fill all fields with positive numbers!';

        const balance = document.getElementById('balance');
        balance.innerText = '';
    }
})

// handling save button
document.getElementById('save-button').addEventListener('click', function () {
    const savePercentage = getInput('save-input');
    const incomeAmount = getInput('income-input');

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);

    if (incomeAmount > 0) {
        // calculate saving amount
        const newSavingAmount = incomeAmount * savePercentage / 100;

        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = newSavingAmount;

        console.log(newSavingAmount);

        if (balanceAmount > newSavingAmount) {
            // calculate remaining balance
            const newRemainingBalance = balanceAmount - newSavingAmount;

            const remainingBalance = document.getElementById('remaining-balance');
            remainingBalance.innerText = newRemainingBalance;

            console.log(newRemainingBalance);
        }
        else if (balanceAmount == newSavingAmount) {
            const remainingBalance = document.getElementById('remaining-balance');
            remainingBalance.innerText = '00';
        }
        else if (balanceAmount < newSavingAmount) {
            const remainingBalance = document.getElementById('remaining-balance');
            remainingBalance.innerText = 'Balance must be bigger than saving amount!';
        }
        else {
            const remainingBalance = document.getElementById('remaining-balance');
            remainingBalance.innerText = '';
        }
    }
    else {
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = 'Please give income amount!';

        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = '';
    }
})