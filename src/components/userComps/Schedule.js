import React from 'react'
import UserUi from '../../core/UserUi'
import Scheduler from './scheduleComps/Calendar'
import GoogleCalendar from './scheduleComps/GoogleCalendar'

const Schedule = () => {
    return (
        <UserUi>
            <GoogleCalendar />
        </UserUi>
    )
}

export default Schedule
