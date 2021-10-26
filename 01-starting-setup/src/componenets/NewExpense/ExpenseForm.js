import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [eneteredAmount, setEnteredAMount] = useState("");
    const [eneteredDate, setEnteredDate] = useState("");

//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enterdDate: "",
//   });

  const titleChangeHandler = (event) => {
     setEnteredTitle(event.target.value);

    //    setUserInput({
    //        ...userInput,
    //        enteredTitle: event.target.value,

    //    })

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangehandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setEnteredAMount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enterdDate: event.target.value,
    // });
     setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
      event.preventDefault();

      const expenseData ={
          title: enteredTitle,
          amount :eneteredAmount,
          date : new Date(eneteredDate),
      };
      //console.log(expenseData);
      props.onSaveExpensedata(expenseData);
      setEnteredTitle('');
      setEnteredAMount('');
      setEnteredDate('');

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={eneteredAmount}
            onChange={amountChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={eneteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
