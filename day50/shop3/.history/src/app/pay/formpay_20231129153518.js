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
          <div>
               <Form>
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
