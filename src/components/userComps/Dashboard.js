import React from 'react'
import UserUi from '../../core/UserUi'
import DashboardPieChart from './dashboardComps/PieChart'
import CircleChart from './dashboardComps/CircleChart'
import BarChart from './dashboardComps/BarChart'
import UserInfo from './dashboardComps/UserInfo'



function Dashboard() {
    return (
        <UserUi>
           
            <div className='dashboard'>
                <div className='dashboard__card dashboard__card-user--1'>
                    <UserInfo color={'#34B53A'} lightColor={'#E2FBD7'}/>
                </div>
                <div className='dashboard__card dashboard__card-user--2'>
                    <UserInfo color={'#FF3A29'} lightColor={'#FFE5D3'}/>
                </div>
                <div className='dashboard__card dashboard__card-user--3'>
                    <UserInfo color={'#4339F2'} lightColor={'#DAD7FE'}/>
                </div>
                <div className='dashboard__card dashboard__card-user--4'>
                    dashboard
                </div>
                <div className='dashboard__card dashboard__card-user--5'>
                    <BarChart />
                </div>
                <div className='dashboard__card dashboard__card-user--6'>

                    <CircleChart precent={0.4} color={'#34B53A'} lightColor={'#E2FBD7'} heading={'Groceries'} />
                </div>
                <div className='dashboard__card dashboard__card-user--7'>

                    <CircleChart precent={0.5} color={'#4339F2'} lightColor={'#DAD7FE'} heading={'Bills'} />
                </div>
                <div className='dashboard__card dashboard__card-user--8'>
                    <CircleChart precent={0.8} color={'#FF3A29'} lightColor={'#FFE5D3'} heading={'Home'} />
                </div>
                <div className='dashboard__card dashboard__card-user--9'>
                    <CircleChart precent={0.1} color={'#02A0FC'} lightColor={'#CCF8FE'} heading={'Other'} />
                </div>

            </div>
        </UserUi>
    )
}

export default Dashboard
