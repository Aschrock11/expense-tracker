import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm.js";
import { useState } from "react";
const NewExpense = function (props) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
        console.log(`triggered and setIsEditing is now ${setIsEditing}`)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && <button
                onClick={startEditingHandler}>Add New Expense
            </button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />}


        </div>
    )

}
export default NewExpense;