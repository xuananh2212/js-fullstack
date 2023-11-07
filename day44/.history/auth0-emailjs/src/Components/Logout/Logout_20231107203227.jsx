import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
export default function Logout() {
     const { logout, isAuthenticated } = useAuth0();
     return (
          isAuthenticated && (
               <div>
                    <h2>Cảm ơn bạn đã sử dụng dịch vụ của <span>Xuan Anh</span></h2>
                    <p>Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi tại đây!</p>
                    <button
                         className='btn btn-login'
                         onClick={() => logout()}
                    >Đăng Xuất</button>
               </div>
          )

     )
}
