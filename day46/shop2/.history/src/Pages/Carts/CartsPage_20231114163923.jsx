import React from 'react';
import styles from './CartsPage.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RiEmotionUnhappyFill } from "react-icons/ri";

import Header from '../../Layout/Header/Header';
import Cart from '../../Components/Cart/Cart';
export default function Cart() {
     const carts = useSelector((state) => state.carts);
     console.log(carts);
     return (
          <>
               <Header />
               <div className={clsx(styles.carts)}>
                    <div className='container'>
                         <h2 className={clsx(styles.headingLv2)}>
                              shopping cart
                         </h2>
                         {
                              carts.length > 0 ?
                                   (
                                        <ul className={clsx(styles.carts)}>
                                             {
                                                  <Cart />

                                             }

                                        </ul>
                                   )
                                   :
                                   (
                                        <div className={clsx(styles.isEmpty)}>
                                             <h3 className={clsx(styles.headingLv3)}>
                                                  There is no product in your cart!
                                                  <RiEmotionUnhappyFill className={clsx(styles.icon)} />
                                             </h3>

                                             <button className={clsx(styles.btnGoHome)}>
                                                  <NavLink
                                                       to={'/'}
                                                       className={clsx(styles.navLink)

                                                       }>
                                                       GoHome
                                                  </NavLink>
                                             </button>
                                        </div>

                                   )
                         }

                    </div>

               </div >
          </>
     )
}
