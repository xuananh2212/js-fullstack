"use client"
import {
     Button,
     DatePicker,
     Form,
     Input

} from 'antd';
export default function FormPay() {
     return (
          <div>
               <Form>
                    <Form.Item label="email">
                         <Input placeholder='email....' />
                    </Form.Item>
                    <Form.Item label="DatePicker">
                         <DatePicker />
                    </Form.Item>
                    <Form.Item>
                         <Button>Đặt Hàng</Button>
                    </Form.Item>
               </Form>
          </div>
     )
}
