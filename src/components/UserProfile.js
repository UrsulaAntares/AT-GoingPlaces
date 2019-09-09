import React from 'react'

const UserProfile = (props) => {
    //don't forget to use the props and desctructure -- but you need more interesting props than name. Serialize some trips!
    return(
        <div  className="comp user">{props.username}'s UserProfile</div>
    )
    
} 

export default UserProfile