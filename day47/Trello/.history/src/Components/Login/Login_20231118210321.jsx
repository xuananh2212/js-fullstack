import React from 'react'
import styles from './Login.module.scss'

export default function Login() {
     return (
          <div className='container'>
               <form className=''>
                    <div className="form-group">
                         <input type="text" name='email' />
                    </div>
               </form>
          </div>
     )
}
