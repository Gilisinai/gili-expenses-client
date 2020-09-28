import React from 'react'
import UserUi from '../../core/UserUi'
import ExpensesRow from './expensesComps/ExpenseRow'

const ExpensesTable = () => {
    return (
        <UserUi>
            <div className='dashboard__card dashboard__card-expenses'>
                <ExpensesRow />
                <ExpensesRow />
                <ExpensesRow />
                <ExpensesRow />
                <ExpensesRow />
                <ExpensesRow />
                <ExpensesRow />
                <ExpensesRow />
            </div>
        </UserUi>
    )
}

export default ExpensesTable
