import { Col, Row } from 'antd';
import styles from './Header.module.scss';
import { FaUser } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import clsx from 'clsx';
import Link from 'next/link';
export default function Header() {
     return (
          <header className={clsx(styles.header)}>
               <Row gutter={[16, 16]} >
                    <Col >
                         <div className={clsx(styles.logo)}>
                              <span>
                                   s
                              </span>
                              travel
                         </div>
                    </Col>
                    <Col>
                         <nav>
                              <ul>
                                   <li>
                                        <Link href={"/"}>Trang Chủ</Link>
                                   </li>
                                   <li>
                                        <Link href={"/"}>Đặt Lịch</Link>
                                   </li>
                                   <li>
                                        <Link href={"/"}>Ưu Đãi</Link>
                                   </li>
                                   <li>
                                        <Link href={"/"}>Dịch Vụ</Link>
                                   </li>
                                   <li>
                                        <Link href={"/"}>Thư Viện</Link>
                                   </li>
                                   <li>
                                        <Link href={"/"}>Đánh Gía</Link>
                                   </li>
                                   <li>
                                        <Link href={"/"}>Liên Hệ</Link>
                                   </li>
                              </ul>
                         </nav>

                    </Col>
                    <Col>
                         <div className={styles.groupIcon}>
                              <MdLightMode />
                              <FaSearch />
                              <FaUser />
                         </div>

                    </Col>
               </Row>
          </header>
     )
}
