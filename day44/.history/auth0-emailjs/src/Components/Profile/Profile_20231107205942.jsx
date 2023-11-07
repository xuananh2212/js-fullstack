import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Profile() {
     const { user, isAuthenticated } = useAuth0();
     return (
          isAuthenticated && (
               <div className='infor'>
                    <h2>Thông Tin cá Nhân</h2>
                    <div className='infor-content'>
                         {user?.picture &&
                              <div className='img-inner'>
                                   <img src={user.picture} alt={user?.name} />
                              </div>}
                         <ul>
                              {Object.keys(user).map((object, index) => <li key={index}>{<span className=''>{object}</span>}: {user[object]}</li>)}
                         </ul>
                    </div>
               </div>
          )
     )
}
