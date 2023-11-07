
import { useAuth0 } from '@auth0/auth0-react'

import "./Logout.css"
import Profile from '../Profile/Profile';
export default function Logout() {
     const { logout, isAuthenticated } = useAuth0();
     return (
          isAuthenticated && (
               <div className='log-out'>
                    <Profile />
                    <div className=''>
                         <form className='form-email'>
                              <div className="form-group">
                                   <input type="text" />
                                   <textarea name="" id="" cols="30" rows="10"></textarea>

                              </div>
                         </form>
                         <div className="form-group">
                              <button
                                   className='btn btn-logout'
                                   onClick={() => logout()}
                              >Đăng Xuất</button>
                         </div>
                    </div>
               </div>
          )

     )
}
