import React from 'react'
import "./Login.css"
import { useAuth0 } from '@auth0/auth0-react'
export default function Login() {
     const { loginWithRedirect, isAuthenticated } = useAuth0();
     return (
          !isAuthenticated && (
               <div className='login'>
                    <h2 className='heading-lv2'>Cảm ơn bạn đã sử dụng dịch vụ của <span className='text-name'>Xuan Anh</span></h2>
                    <p>Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi tại đây!</p>
                    <button
                         className='btn btn-login'
                         onClick={() => loginWithRedirect()}
                    >Đăng Nhập</button>
               </div>
          )

     )
}
