import React from 'react'
import UserUi from '../../core/UserUi'
import ExpensesRow from './expensesComps/ExpenseRow'

const ExpensesTable = () => {
    return (
        <UserUi>
            <div className='dashboard__card'>
                <ExpensesRow />
            </div>
        </UserUi>
    )
}

export default ExpensesTable
