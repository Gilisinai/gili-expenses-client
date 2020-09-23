import React, { Fragment } from 'react'
import Bar from './Bar'
function BarChart() {
    return (
        <Fragment>
            <div>Per Month</div>
            <div className='flex flex__center chart'>
                <Bar precent={23} name={'JAN'} />
                <Bar precent={50} name={'FEB'} />
                <Bar precent={88} name={'MRC'} />
                <Bar precent={56} name={'APR'} />
                <Bar precent={23} name={'MAY'} />
                <Bar precent={50} name={'JUN'} />
                <Bar precent={88} name={'JUL'} />
                <Bar precent={56} name={'AUG'} />
                <Bar precent={23} name={'SEP'} />
                <Bar precent={50} name={'OCT'} />
                <Bar precent={88} name={'NOV'} />
                <Bar precent={56} name={'DEC'} />
            </div>
        </Fragment>
    )
}

export default BarChart
