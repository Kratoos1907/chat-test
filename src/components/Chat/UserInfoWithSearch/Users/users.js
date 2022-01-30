import React from 'react';
import User from './user';

export default function ChatUsers({usersData}) {
    
    return(
        <div>
            {usersData.map(user => {
                return <User user_data={user} key={user.name}/>
            })}
        </div>
    )
}