let date = document.getElementById("date");
let date2 = document.getElementById("date2");
let incomeName = document.getElementById("income");
let incomeAmount = document.getElementById("incomeAmount");
let expenseName = document.getElementById("expense");
let expenseAmount = document.getElementById("expenseAmount");
let incomeTable = document.getElementById("incomeTable");
let expenseTable = document.getElementById("expenseTable");
let total = document.getElementById("total");

class Budget {
  constructor() {
    this.income = [];
    this.expenses = [];
  }
  // add income method that will add user inputs to the array
  addIncome(date, description, amount) {
    this.income.push({ date: date, description: description, amount: amount });
  }
  // add expense method that will add user expenses to the array
  addExpense(date, description, amount) {
    this.expenses.push({
      date: date,
      description: description,
      amount: amount,
    });
  }
  // method to calculate total balance of income
  getTotalIncome() {
    let totalIncomeAmount = 0;
    this.income.forEach((element) => {
      totalIncomeAmount = totalIncomeAmount + parseFloat(element["amount"]);
    });
    return totalIncomeAmount;
  }
  // method to calculate the total balance of expenses
  getTotalExpense() {
    let totalExpenseAmount = 0;
    this.expenses.forEach((element) => {
      totalExpenseAmount = totalExpenseAmount + parseFloat(element["amount"]);
    });
    return totalExpenseAmount;
  }
  // method that will calculate the total balance
  getTotalBalance() {
    let a = this.getTotalIncome() - this.getTotalExpense();
    return a;
  }
}

const budget = new Budget(); // create a budget instance

function addIncomeClick() {
  let name = incomeName.value;
  let amount = incomeAmount.value;
  let currentDate = date.value;
  // if there is not a date, name, or amount entered, there will be an error message
  if (!currentDate || !name || !amount) {
    alert("Please fill out all fields.");
    return;
  }
  // if user inputs a negative amount, there will be an error message
  if (Math.sign(amount) == -1) {
    alert("Amount cannot be negative.");
    return;
  }
  // displays what the user has inputted onto the html
  document.getElementById("incomeTable").innerHTML += `
    <div class="income-title">
    <h4>${currentDate}</h4>
    <h4>${name}</h4>
    <h4>${amount}</h4>
    </div>
            `;
  budget.addIncome(date, name, amount);
  // this clears the input once user clicks the button to submit entry
  date.value = "";
  incomeName.value = "";
  incomeAmount.value = "";
  // if total balance is positive, it will be green. if total balance is negative, it will turn red.
  if (Math.sign(budget.getTotalBalance()) == -1) {
    document.getElementById("total").className = "red";
  } else {
    document.getElementById("total").className = "green";
  }
  document.getElementById("total").innerText = "$" + budget.getTotalBalance();
}

function addExpenseClick() {
  let name = expenseName.value;
  let amount = expenseAmount.value;
  let currentDate = date2.value;
  if (!currentDate || !name || !amount) {
    alert("Please fill out all fields.");
    return;
  }
  if (Math.sign(amount) == -1) {
    alert("Amount cannot be negative.");
    return;
  }
  document.getElementById("expenseTable").innerHTML += `
    <div class="expense-title">
    <h4>${currentDate}</h4>
    <h4>${name}</h4>
    <h4>${amount}</h4>
    </div>
            `;
  budget.addExpense(date, name, amount);
  date2.value = "";
  expenseName.value = "";
  expenseAmount.value = "";
  if (Math.sign(budget.getTotalBalance()) == -1) {
    document.getElementById("total").className = "red";
  } else {
    document.getElementById("total").className = "green";
  }
  document.getElementById("total").innerText = "$" + budget.getTotalBalance();
}
