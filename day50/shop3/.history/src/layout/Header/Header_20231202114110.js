import { Col, Row } from 'antd';
import styles from './Header.module.scss';
import { FaUser } from "react-icons/fa";
import ThemeSwitcher from '@/app/ThemeSwitcher';
import clsx from 'clsx';
import Link from 'next/link';
import Search from '@/Components/Search/Search';
export default function Header() {
     return (
          <header className={clsx(styles.header)}>
               <Row gutter={[16, 16]} align="center" >
                    <Col xl={5}>
                         <div className={clsx(styles.logo)}>
                              <span>
                                   s
                              </span>
                              travel
                         </div>
                    </Col>
                    <Col xl={14}>
                         <nav>
                              <ul className={styles.navLink}>
                                   <li>
                                        <Link href={"/"}>Trang Chủ</Link>
                                   </li>
                                   <li>
                                        <Link href={"/pay"}>Thanh Toán</Link>
                                   </li>
                                   <li>
                                        <Link href={"/library"}>Thư Viện</Link>
                                   </li>
                              </ul>
                         </nav>

                    </Col>
                    <Col xl={5}>
                         <div className={styles.groupIcon}>
                              <ThemeSwitcher />
                              <Search />
                              <Link href="/api/auth/signin"> <FaUser className={styles.icon} /></Link>
                         </div>

                    </Col>
               </Row>
          </header>
     )
}
