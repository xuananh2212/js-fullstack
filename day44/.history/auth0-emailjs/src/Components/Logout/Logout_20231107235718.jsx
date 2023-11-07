
import { useAuth0 } from '@auth0/auth0-react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import "./Logout.css"
import Profile from '../Profile/Profile';
import Loading from '../Loading/Loading';
export default function Logout() {
     const { logout, isAuthenticated } = useAuth0();
     const [messages, setMessages] = useState({
          email: "",
          content: "",
          fullName: "",
     });
     const form = useRef();
     const handleChangeInput = (e) => {
          setMessages({ ...messages, email: e.target.value })
     }
     const handleChangeTextarea = (e) => {
          setMessages({ ...messages, content: e.target.value })
     }
     const handleSubmit = (e) => {
          <Loading loading={true} />
          e.preventDefault();
          const serviceId = 'service_lpb5dl2';
          const templateId = 'template_mx5wl3p';
          const publicKey = 'PU4YyGOSuGoncsYTt';
          emailjs.sendForm(serviceId, templateId, form.current, publicKey)
               .then((result) => {
                    console.log(result.text);
                    setMessages({
                         email: "",
                         content: "",
                         fullName: "",
                    })
                    toast.success("gửi email thành công!")
               }, (error) => {
                    console.log(error.text);
               });
          <Loading loading={false} />


     }
     return (
          isAuthenticated && (
               <div style={{ padding: 10, border: "1px solid #333", borderRadius: 12 }}>
                    <div className='log-out'>
                         <Profile messages={messages} setMessages={setMessages} />
                         <form ref={form} className='form-sendEmail' onSubmit={handleSubmit}>
                              <div className="form-group">
                                   <label htmlFor="email">Email:</label>
                                   <input
                                        type="text"
                                        value={messages.email}
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
                                        value={messages.content}
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
