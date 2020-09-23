import React from 'react'
import userPhoto from '../../../resources/images/Photo.png'
import HorizontalBar from './HorizontalBar'

const UserInfo = ({color , lightColor}) => {
    
    return (
        <div>
            <div className='flex'>
                <div className='avatar'>
                    <img src={userPhoto} />
                </div>
                <div className='flex flex__col avatar__details'>
                    <div>name</div>
                    <div>place</div>
                </div>

            </div>
            <div className='flex flex__col'>
                <div className='flex flex__col'>

                    <HorizontalBar category='Groceries' amount={45} color={color} lightColor={lightColor} />
                    <HorizontalBar category='Bills' amount={30} color={color} lightColor={lightColor} />
                    <HorizontalBar category='Home' amount={10} color={color} lightColor={lightColor} />
                    
                </div>
            </div>
        </div>
    )
}

export default UserInfo
