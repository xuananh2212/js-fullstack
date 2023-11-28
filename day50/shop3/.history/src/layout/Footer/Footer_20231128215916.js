import { Col, Row } from 'antd';

export default function Footer() {
     return (
          <header className={clsx(styles.header)}>
               <div className='container'>
                    <Row gutter={[16, 16]} align="center" >
                         <Col xl={6}>
                         </Col>
                         <Col xl={6}>
                         </Col>
                         <Col xl={6}>
                         </Col>
                         <Col xl={6}>
                         </Col>
                    </Row>
               </div>
          </header>
     )
}
