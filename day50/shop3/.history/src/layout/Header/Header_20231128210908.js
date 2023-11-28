import { Col, Row } from 'antd';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
export default function Header() {
     return (
          <header className={clsx(styles.header)}>
               <Row gutter={[16, 16]} >
                    <Col>
                         <div className={clsx(styles.logo)}>
                              <span>
                                   s
                              </span>
                              travel
                         </div>
                    </Col>
                    <Col>
                         <ul>
                              <li>
                                   <Link>Trang Chủ</Link>
                              </li>
                              <li>
                                   <Link>Thư Viện</Link>
                              </li>
                              <li>
                                   <Link>Đặt Hàng</Link>
                              </li>
                              <li>
                                   <Link>fasdf</Link>
                              </li>
                              <li>
                                   <Link>Trang</Link>
                              </li>
                              <li>
                                   <Link>Trang</Link>
                              </li>
                         </ul>

                    </Col>
                    <Col>

                    </Col>
               </Row>
          </header>
     )
}
