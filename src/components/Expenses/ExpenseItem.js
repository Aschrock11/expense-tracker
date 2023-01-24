// import { useCallback } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './EpenseDate.js'
import Card from '../UI/Card.js'
function ExpenseItem(props) {


    return (
        <Card className='expense-item'>
            <div className='expense-item__description'>
                <ExpenseDate date={props.date} />
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>);
}
export default ExpenseItem;


