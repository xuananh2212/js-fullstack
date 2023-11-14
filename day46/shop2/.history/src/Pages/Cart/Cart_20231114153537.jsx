import React from 'react';
import styles from './Cart.module.scss';
import Header from '../../Layout/Header/Header';
import { useSelector } from 'react-redux';
export default function Cart() {
     const carts = useSelector((state) => state.carts)
     return (
          <>
               <Header />
               <div className={styles.carts}>
               </div>
          </>
     )
}
