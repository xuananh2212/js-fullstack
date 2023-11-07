import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Profile() {
     const { user, isAuthenticated } = useAuth0();
     return (
          isAuthenticated && (
               <div>
                    <h2>Thông Tin cá Nhân</h2>
                    {user?.picture &&
                         <div className='img-inner'>
                              <img src={user.picture} alt={user?.name} />
                         </div>}
                    <ul>
                         {Object.keys(user).map((object, index) => <li key={index}>{object}: {user[object]}</li>)}
                    </ul>
               </div>
          )
     )
}
