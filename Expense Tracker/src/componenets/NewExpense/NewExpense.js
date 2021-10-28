import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
const [isEditing,setIsEditing] = useState(false);

  const saveExpensedataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditinghandler =() => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditinghandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpensedata={saveExpensedataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
