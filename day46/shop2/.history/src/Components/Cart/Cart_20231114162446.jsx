import React from 'react';
import styles from './Cart.module.scss';
import clsx from 'clsx';

export default function Cart({ product: { _id, amount, name, price, quantity } }) {
     return (
          <li className={clsx(styles.cart)}>


          </li>
     )
}
