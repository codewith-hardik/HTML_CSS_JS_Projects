let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense(event) {
    event.preventDefault();

    const date = document.getElementById('expense-date').value;
    const category = document.getElementById('expense-category').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const description = document.getElementById('expense-description').value;

    const expense = { date, category, amount, description };
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    renderExpenses();
    updateSummary();
    document.getElementById('expense-form').reset();
}

function renderExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.date}</td>
            <td>${expense.category}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>${expense.description}</td>
            <td>
                <button onclick="editExpense(${index})">Edit</button>
                <button onclick="deleteExpense(${index})">Delete</button>
            </td>
        `;
        expenseList.appendChild(row);
    });
}

function updateSummary() {
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
}

document.getElementById('expense-form').addEventListener('submit', addExpense);
renderExpenses();
updateSummary();
