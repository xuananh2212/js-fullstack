import { Col, Row } from 'antd';

export default function Footer() {
     return (
          <header className={clsx(styles.header)}>
               <div className='container'>
                    <Row gutter={[16, 16]} align="center" >
                         <Col xl={6}>
                              <ul>
                                   <li>
                                        <h2>Stravel</h2>

                                   </li>
                                   <li>
                                        Trải Qua 17 Năm Phát Triển Bền Vững, STravel Đã Ghi Dấu Ấn Của Mình Với Thông Điệp
                                        “Nâng Tầm Trải Nghiệm Từng Chuyến Đi”
                                   </li>
                              </ul>
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
