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
    if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
        const newTotalExpenses = foodCost + rentCost + clothesCost;

        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = newTotalExpenses;

        console.log(newTotalExpenses);

        // calculate balance
        if (incomeAmount > newTotalExpenses) {
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

    // calculate saving amount
    if (incomeAmount > 0 && savePercentage > 0) {
        const newSavingAmount = incomeAmount * savePercentage / 100;

        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = newSavingAmount;

        console.log(newSavingAmount);

        // calculate remaining balance
        if (balanceAmount > newSavingAmount) {
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
            const savingAmount = document.getElementById('saving-amount');
            savingAmount.innerText = 'You cannot save more than your balance!';

            const remainingBalance = document.getElementById('remaining-balance');
            remainingBalance.innerText = '';
        }
    }
    else {
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = 'Please give income amount along with a positive percentage for saving!';

        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = '';
    }
})