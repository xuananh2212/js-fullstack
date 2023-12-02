import { Col, Row } from 'antd';
import styles from './Header.module.scss';
import ThemeSwitcher from '../../app/ThemeSwitcher';
import clsx from 'clsx';
import ResgisterLogin from '../../Components/RegisterLogin/RegisterLogin'
import Link from 'next/link';
import Search from '../../Components/Search/Search';
import { options } from "../../app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
export default async function Header() {
     const session = await getServerSession(options);
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

                              {
                                   session ? (<ResgisterLogin />) : (
                                        <Link href="/api/auth/signin"><button>Đăng nhập/Đăng kí</button></Link>
                                   )
                              }
                         </div>

                    </Col>
               </Row>
          </header>
     )
}
