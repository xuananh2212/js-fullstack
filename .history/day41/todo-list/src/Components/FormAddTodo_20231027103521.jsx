import React, { Component } from 'react'

export default class FormAddTodo extends Component {
     render() {
          return (
               <form action="" className='form-todos'>
                    <div className="form-group">
                         <input type="text" placeholder='thêm một việc làm mới' />
                         <button className='btn-add' onClick={handlerAdd()}>Thêm mới</button>
                    </div>
               </form>
          )
     }
}
