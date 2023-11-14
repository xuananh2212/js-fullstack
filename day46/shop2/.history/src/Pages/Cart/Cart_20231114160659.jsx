import React from 'react';
import styles from './Cart.module.scss';
import Header from '../../Layout/Header/Header';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RiEmotionUnhappyFill } from "react-icons/ri";
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
                                        <ul>

                                        </ul>
                                   )
                                   :
                                   (
                                        <div className={clsx(styles.isEmpty)}>
                                             <h3 className={clsx(styles.headingLv3)}>
                                                  There is no product in your cart!
                                                  <span> <RiEmotionUnhappyFill className={clsx(styles.icon)} /></span>
                                             </h3>

                                             <button className={clsx(styles.btnGoHome)}>
                                                  <NavLink className={clsx(styles.navLink)}>
                                                       GoHome
                                                  </NavLink>
                                             </button>
                                        </div>

                                   )
                         }

                    </div>

               </div>
          </>
     )
}
