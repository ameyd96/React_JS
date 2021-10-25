import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  // const month = props.date.toLocaleString('en-US',{ month: 'long'});
  // const day = props.date.toLocaleString('en-US',{day: '2-digit'});
  // const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
