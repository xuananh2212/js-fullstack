import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Profile({ message, setMessages }) {
     const { user, isAuthenticated } = useAuth0();
     console.log(user)
     useEffect(() => {
          setMessages({ ...message, email: user?.email || "example@email.com", fullName: user?.nickname || "example" })
     }, [])
     return (
          isAuthenticated && (
               <div className='infor-user'>
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
