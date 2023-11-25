'use client'
import clsx from "clsx";
import styles from './Header.module.scss';
import Link from "next/link";
import React from "react";
import Image from "next/image";
import imgLogo from '../../../public/assets/imgs/logo.png';
import i18n from "i18next";
import { useTranslation } from 'react-i18next'
import keyWord from '../../../public/assets/keyword/keyword.json'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
export default function Header() {
     const { t } = useTranslation();
     return (
          <header className={clsx(styles.header)}>
               <div className="container">
                    <div className={clsx(styles.headerLeft)}>
                         <Link
                              href='/'
                              className={clsx(styles.headerLogo)}
                         >
                              <Image
                                   width={30}
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
                                   src={imgLogo}
                                   alt="logo"
                              />
                         </li>

                         <li>
                              <Image
                                   width={30}
                                   src={imgLogo}
                                   alt="logo"
                              />

                         </li>

                         <li>
                              <Image
                                   width={30}
                                   src={imgLogo}
                                   alt="logo"
                              />

                         </li>

                         <li>

                         </li>

                         <li>
                              <Dropdown>
                                   <DropdownTrigger>
                                        <Button
                                             variant="bordered"
                                        >
                                             Open Menu
                                        </Button>
                                   </DropdownTrigger>
                                   <DropdownMenu
                                        aria-label="Action event example"
                                        onAction={(key) => alert(key)}
                                   >
                                        <DropdownItem key="new">New file</DropdownItem>
                                        <DropdownItem key="copy">Copy link</DropdownItem>
                                        <DropdownItem key="edit">Edit file</DropdownItem>
                                        <DropdownItem key="delete" className="text-danger" color="danger">
                                             Delete file
                                        </DropdownItem>
                                   </DropdownMenu>
                              </Dropdown>

                         </li>
                    </ul>


               </div>

          </header>
     )
}
