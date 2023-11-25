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
                              <Img
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
                                   src='https://images.search.yahoo.com/images/view;_ylt=AwrjfBFp62BlV584qz.JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzI0OTVlM2VjYTliMjJmNWVjZmJlYTJlNmE4YmQwZDE3BGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dicon%2Bgithub%26type%3DE210US105G91646%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1335&h=1353&imgurl=pngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG80.png&rurl=https%3A%2F%2Fpngimg.com%2Fdownload%2F73412&size=68.8KB&p=icon+github&oid=2495e3eca9b22f5ecfbea2e6a8bd0d17&fr2=piv-web&fr=mcafee&tt=GitHub+logo+PNG&b=0&ni=21&no=2&ts=&tab=organic&sigr=Z86Uq0F5E6M9&sigb=RLvIf9fTk_lO&sigi=Ctty.LCY5K8b&sigt=dhkVmdivtArs&.crumb=FGCAokp9HwD&fr=mcafee&fr2=piv-web&type=E210US105G91646'
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
                                   // onAction={(key) => alert(key)}
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
