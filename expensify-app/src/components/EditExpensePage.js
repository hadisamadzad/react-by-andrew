import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../actions/expenses';

const EditExpensePage = (props) => (
    <div>
        <h1>Edit Expense: {props.expense.description}</h1>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense))
                props.history.push('/')
            }} />
    </div>
)

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage)