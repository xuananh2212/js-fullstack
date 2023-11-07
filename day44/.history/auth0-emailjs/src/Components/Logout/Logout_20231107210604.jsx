
import { useAuth0 } from '@auth0/auth0-react'

import "./Logout.css"
import Profile from '../Profile/Profile';
export default function Logout() {
     const { logout, isAuthenticated } = useAuth0();
     return (
          isAuthenticated && (
               <div className='log-out'>
                    <Profile />
                    <form className='form-email'>
                         <div className="form-group">

                         </div>
                         <div className="form-group">
                              <button
                                   className='btn btn-logout'
                                   onClick={() => logout()}
                              >Đăng Xuất</button>
                         </div>

                    </form>
               </div>
          )

     )
}
