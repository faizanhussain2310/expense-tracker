import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    //console.log(expenseData);
    setIsEditing(false);
    props.onAddExpense(expenseData);
  };

  const checkHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let expression = <button onClick={checkHandler}>Add To Expense</button>;
  if (isEditing) {
    expression = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }
  return <div className="new-expense">{expression}</div>;
};
export default NewExpense;
