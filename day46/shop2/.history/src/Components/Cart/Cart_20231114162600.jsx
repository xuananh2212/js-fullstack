import React from 'react';
import styles from './Cart.module.scss';
import clsx from 'clsx';

export default function Cart({ product: { _id, image, amount, name, price, quantity } }) {
     return (
          <li className={clsx(styles.cart)}>
               <div className={clsx(styles.imgWrap)}>
                    <img src={image} alt={name} />
               </div>
          </li>
     )
}
