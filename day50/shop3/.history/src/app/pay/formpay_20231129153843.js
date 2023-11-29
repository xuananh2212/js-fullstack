"use client"
import {
     Button,
     DatePicker,
     Form,

} from 'antd';
export default function FormPay() {
     return (
          <div>
               <Form>
                    <Form.Item label="email">
                         <DatePicker />
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
