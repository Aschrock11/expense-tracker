import { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css"
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter.js"
import ExpensesChart from "./ExpensesChart.js";

function Expenses({ item }) {
    const [year, setYear] = useState('2020')
    const filterYearHandler = (selectedYear) => {
        setYear(selectedYear)
    }
    const filteredExpenses = item.filter(expense => {
        return expense.date.getFullYear().toString() === year
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter newYear={year} onFilterChange={filterYearHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />))
                }


            </Card>
        </div>
    )


}

export default Expenses;