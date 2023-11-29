"use client"
import {
     Button,
     DatePicker,
     Form,

} from 'antd';
export default function FormPay() {
     return (
          <div>
               <Form style={{ backgroundColor: "black", color: "#ffff" }}>
                    <Form.Item label="DatePicker">
                         <DatePicker />
                    </Form.Item>
                    <Form.Item label="Button">
                         <Button>Button</Button>
                    </Form.Item>
               </Form>
          </div>
     )
}
