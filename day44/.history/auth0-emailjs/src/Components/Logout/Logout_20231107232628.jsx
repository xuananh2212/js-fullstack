
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import "./Logout.css"
import Profile from '../Profile/Profile';
export default function Logout() {
     const { logout, isAuthenticated } = useAuth0();
     const [message, setMessages] = useState({
          email: "",
          content: "",
          fullName: "",
     });
     const handleChangeInput = (e) => {
          setMessages({ ...message, email: e.target.value })
     }
     const handleChangeTextarea = (e) => {
          setMessages({ ...message, content: e.target.value })
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          const serviceId = 'service_lpb5dl2';
          const templateId = 'template_mx5wl3p';
          const publicKey = 'PU4YyGOSuGoncsYTt';
          console.log(message);
          emailjs.sendForm(serviceId, templateId, MessageEvent)
               .then((result) => {
                    console.log(result.text);
                    setMessages({
                         email: "",
                         content: "",
                         fullName: "",
                    })
               }, (error) => {
                    console.log(error.text);
               });


     }
     return (
          isAuthenticated && (
               <div style={{ padding: 10, border: "1px solid #333", borderRadius: 12 }}>
                    <div className='log-out'>
                         <Profile message={message} setMessages={setMessages} />
                         <form className='form-sendEmail' onSubmit={handleSubmit}>
                              <div className="form-group">
                                   <label htmlFor="email">Email:</label>
                                   <input
                                        type="text"
                                        value={message.email}
                                        id='email'
                                        name='email'
                                        onChange={handleChangeInput}

                                   />

                              </div>
                              <div className="form-group">
                                   <label htmlFor="content">Content:</label>
                                   <textarea
                                        name="content"
                                        id="content"
                                        cols="30"
                                        rows="10"
                                        value={message.content}
                                        onChange={handleChangeTextarea}
                                   >

                                   </textarea>

                              </div>
                              <div className="form-group">
                                   <button
                                        className='btn btn-send'
                                        type='submit'

                                   >gửi</button>
                              </div>
                         </form>
                    </div>
                    <button
                         className='btn btn-logout'
                         onClick={() => logout()}
                    >Đăng Xuất</button>
               </div>

          )

     )
}
