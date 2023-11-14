import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import logo from '../../assets/imgs/logo/shop_logo_big.png';

export default function Header() {
     return (
          <header className={styles.header}>
               <div className={styles.logo}
               >

                    <span>Xuan Anh Shop</span>

               </div>
          </header>
     )
}
