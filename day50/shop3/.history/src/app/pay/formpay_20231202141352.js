"use client"
import {
     Button,
     DatePicker,
     Form,
     Input,
     Select,

} from 'antd';
export default function FormPay() {
     const handleSubmit = (data) => {
          console.log(data)
     }
     return (
          <div style={{ width: "60%", margin: " 60px auto" }}>
               <Form
                    onFinish={handleSubmit}
               >
                    <Form.Item label="email">
                         <Input placeholder='email....' />
                    </Form.Item>
                    <Form.Item label="Thanh toán">
                         <Select>
                              <Select.Option value="0">Momo</Select.Option>
                              <Select.Option value="1">Chuyển khoản</Select.Option>
                              <Select.Option value="2">thẻ Visa </Select.Option>
                              <Select.Option value="3">Tiền Mặt </Select.Option>
                         </Select>
                    </Form.Item>
                    <Form.Item label="nội dung thanh toán">
                         <Input placeholder='email....' />
                    </Form.Item>
                    <Form.Item label="Thời gian">
                         <DatePicker />
                    </Form.Item>
                    <Form.Item >
                         <Button
                              htmlType="submit"
                         >Đặt Hàng</Button>
                    </Form.Item>
               </Form>
          </div>
     )
}
