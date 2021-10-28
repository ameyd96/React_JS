import React, {useState} from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    //const [title,setTitle] = useState(props.title);


  // const month = props.date.toLocaleString('en-US',{ month: 'long'});
  // const day = props.date.toLocaleString('en-US',{day: '2-digit'});
  // const year = props.date.getFullYear();

    // const clickedHandler = ()=>{
    //   setTitle('Updated');
    //   console.log('clicked...')
    // }
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      {/* <button onClick={clickedHandler}>Change title</button> */}
    </Card>
    </li>
  );
};

export default ExpenseItem;
