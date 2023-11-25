import clsx from "clsx";
import styles from './Header.module.scss';
import Link from "next/link";
import React from "react";
import Image from "next/image";
import imgLogo from '../../../public/assets/imgs/logo.png';

export default function Header() {
     return (
          <header>
               <div>
                    <Link href='/'>
                         <div className={clsx(styles.headerLogo)}>
                              <Image
                                   src={imgLogo}
                                   alt="logo"

                              />
                         </div>
                    </Link>

               </div>

          </header>
     )
}
