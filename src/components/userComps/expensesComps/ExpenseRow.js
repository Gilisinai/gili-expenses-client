import React from 'react'
import Photo from '../../../resources/images/Photo.png'


const ExpenseRow = () => {
    return (
        <div className='flex flex__space-between table__row'>
           
            <div className='table__user flex'>
                

                <img src={Photo} className='table__user-img'/>
                <div>
                    Gili Sinai
                </div>
            </div>
            <div className='table__category'>
                Groceries
            </div>
            <div className='table__details'>
                23 Sep 2020
            </div>
            <div className='table__details'>
                02:52PM
            </div>
            <div className='table__amount'>
                $100
            </div>
        </div>
    )
}

export default ExpenseRow
