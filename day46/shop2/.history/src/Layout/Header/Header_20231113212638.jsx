import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import logo from '../../assets/imgs/logo/shop_logo_big.png';
import { BsCart3 } from "react-icons/bs";

export default function Header() {
     return (
          <header className={clsx(styles.header)}>
               <div className={clsx(styles.logoWrap)}
               >
                    <div className={clsx(styles.logo)}>
                         <img src={logo} alt="xuan anh shop" />
                    </div>
                    <span>Xuan Anh Shop</span>
               </div>
               <div className={clsx(styles.cartWrap)}>
                    <BsCart3 className={clsx(styles.cart)} />

               </div>
          </header>
     )
}
