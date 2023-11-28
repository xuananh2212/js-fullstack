import React from 'react'

export default function Footer() {
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
                                        <Link href={"/"}>Đánh giá</Link>
                                   </li>
                                   <li>
                                        <Link href={"/"}>Liên Hệ</Link>
                                   </li>
                              </ul>
                         </nav>

                    </Col>
                    <Col xl={5}>
                         <div className={styles.groupIcon}>
                              <MdLightMode className={styles.icon} />
                              <FaSearch className={styles.icon} />
                              <FaUser className={styles.icon} />
                         </div>

                    </Col>
               </Row>
          </header>
     )
}
