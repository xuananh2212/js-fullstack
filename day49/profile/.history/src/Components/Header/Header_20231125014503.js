'use client'
import clsx from "clsx";
import styles from './Header.module.scss';
import Link from "next/link";
import React from "react";
import Img from "next/image";
import { Image } from "@nextui-org/react";
import imgLogo from '../../../public/assets/imgs/logo.png';
import i18n from "i18next";
import { useTranslation } from 'react-i18next'
import keyWord from '../../../public/assets/keyword/keyword.json'
import { NextUIProvider } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { GrLanguage } from "react-icons/gr";
export default function Header() {
     const { t } = useTranslation();
     return (
          <header className={clsx(styles.header)}>
               <div className="container">
                    <div className={styles.headerWrap}>
                         <div className={clsx(styles.headerLeft)}>
                              <Link
                                   href='/'
                                   className={clsx(styles.headerLogo)}
                              >
                                   <Img
                                        width={50}
                                        src={imgLogo}
                                        alt="logo"
                                   />
                                   <span>
                                        {t(keyWord.fullName)}
                                   </span>

                              </Link>
                         </div>
                         <ul className={clsx(styles.headerRight)}>
                              <li>
                                   <Image
                                        width={30}
                                        height={30}
                                        src='https://fullstack-nodejs.fullstack.edu.vn/assets/f8_icon.png'
                                        alt="logo"
                                   />
                              </li>

                              <li>
                                   <Image
                                        width={30}
                                        src='https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-facebook-icon-social-media-by-vexels.png'
                                        alt="logo"
                                   />

                              </li>

                              <li>
                                   <Image
                                        width={30}
                                        src='https://tse3.mm.bing.net/th?id=OIP.eoZPB2gfGH-1ckaL_JSZdwHaHg&pid=Api&P=0&h=220'
                                        alt="logo"
                                   />

                              </li>

                              <li>

                              </li>

                              <li>
                                   <NextUIProvider>
                                        <Dropdown>
                                             <DropdownTrigger>
                                                  <Button
                                                       variant="bordered"
                                                  >
                                                       <GrLanguage />
                                                       <span>Ngôn Ngữ</span>
                                                  </Button>
                                             </DropdownTrigger>
                                             <DropdownMenu
                                                  aria-label="Action event example"
                                             // onAction={(key) => alert(key)}
                                             >
                                                  <DropdownItem
                                                       className={clsx(styles.language)}
                                                       key="vi"
                                                  >
                                                       Viet Nam
                                                  </DropdownItem>
                                                  <DropdownItem
                                                       className={clsx(styles.language)}
                                                       key="kor"
                                                  >
                                                       Korea

                                                  </DropdownItem>
                                                  <DropdownItem
                                                       className={clsx(styles.language)}
                                                       key="en"
                                                  >
                                                       English

                                                  </DropdownItem>
                                             </DropdownMenu>
                                        </Dropdown>
                                   </NextUIProvider>

                              </li>
                         </ul>


                    </div>
               </div>

          </header>
     )
}
