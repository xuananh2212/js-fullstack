"use client"
import {
     Button,
     DatePicker,
     Form,
     Input,
     Select,

} from 'antd';
export default function FormPay() {
     return (
          <div>
               <Form>
                    <Form.Item label="email">
                         <Input placeholder='email....' />
                    </Form.Item>
                    <Form.Item label="Thanh toán">
                         <Input placeholder='email....' />
                    </Form.Item>
                    <Form.Item label="Select">
                         <Select>
                              <Select.Option value="demo">Demo</Select.Option>
                         </Select>
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
