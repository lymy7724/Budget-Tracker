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

  addIncome(date, description, amount) {
    this.income.push({ date: date, description: description, amount: amount });
  }

  addExpense(date, description, amount) {
    this.expenses.push({
      date: date,
      description: description,
      amount: amount,
    });
  }

  getTotalIncome() {
    let totalIncomeAmount = 0;
    this.income.forEach((element) => {
      totalIncomeAmount = totalIncomeAmount + parseFloat(element["amount"]);
    });
    return totalIncomeAmount;
  }

  getTotalExpense() {
    let totalExpenseAmount = 0;
    this.expenses.forEach((element) => {
      totalExpenseAmount = totalExpenseAmount + parseFloat(element["amount"]);
    });
    return totalExpenseAmount;
  }

  getTotalBalance() {
    let a = this.getTotalIncome() - this.getTotalExpense();
    console.log(this.getTotalIncome());
    console.log(this.getTotalExpense());
    return a;
  }
}

const budget = new Budget(); // create a budget instance

function addIncomeClick() {
  let name = incomeName.value;
  let amount = incomeAmount.value;
  let currentDate = date.value;
  if (!currentDate || !name || !amount) {
    alert("Please fill out all fields.");
    return;
  }
  if (Math.sign(amount) == -1) {
    alert("Amount cannot be negative.");
    return;
  }
  document.getElementById("incomeTable").innerHTML += `
    <div class="income-title">
    <h4>${currentDate}</h4>
    <h4>${name}</h4>
    <h4>${amount}</h4>
    </div>
            `;
  budget.addIncome(date, name, amount);
  date.value = "";
  incomeName.value = "";
  incomeAmount.value = "";
  document.getElementById("total").innerText = budget.getTotalBalance();
  console.log("the total income is " + budget.getTotalIncome());
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
  document.getElementById("total").innerText = budget.getTotalBalance();
  console.log("the total expense is " + budget.getTotalExpense());
}
