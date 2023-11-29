import React from 'react'
import {
     Button,
     Cascader,
     DatePicker,
     Form,
     Input,
     InputNumber,
     Radio,
     Select,
     Switch,
     TreeSelect,
} from 'antd';
export default function FormPay() {
     return (
          <Form>

               <Form.Item label="DatePicker">
                    <DatePicker />
               </Form.Item>
               <Form.Item label="InputNumber">
                    <InputNumber />
               </Form.Item>
               <Form.Item label="Switch" valuePropName="checked">
                    <Switch />
               </Form.Item>
               <Form.Item label="Button">
                    <Button>Button</Button>
               </Form.Item>
          </Form>


     )
}
