const transactionsUl = document.querySelector ('#transactions')

const dummyTransactions = [
    { id:1, name: 'Bolo de brigadeiro', amount: -20 },
    { id:2, name: 'Salário', amount: 300 },
    { id:3, name: 'Torta de frango', amount: -10 },
    { id:4, name: 'Violão', amount: 150 },
]

const addTransactionsIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `
    ${transaction.name} <span>${operator} R$ ${amountWithoutOperator} </span></span><button class="delete-btn">x</button>
    `
    transactionsUl.append(li)

}

const updateBalanceValues = () => {
    const transactionsAmount = dummyTransactions
        .map(transactions => transactions.amount)
    const total = transactionsAmount
        .reduce((accumulator, transactions) => accumulator + transactions,0)
        .toFixed(2)
    const income = transactionsAmount
        .filter(value => value > 0)
        .reduce ((acumulator, value)=> acumulator + value, 0)
        .toFixed(2) 
    const expense = transactionsAmount
        .filter(value => value < 0)
        .reduce ((accumulator, value)=> accumulator + value, 0)
        .toFixed(2)

    console.log(expense)
}
const init = () => {
     dummyTransactions.forEach (addTransactionsIntoDOM)
     updateBalanceValues()
 }

 init ()