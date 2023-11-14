import React from 'react';
import styles from './Cart.module.scss';
import clsx from 'clsx';

export default function Cart({ product: { _id, image, amount, name, price, quantity } }) {
     return (
          <li className={clsx(styles.cart)}>
               <div className={clsx(styles.cartWrap)}>
                    <div className={clsx(styles.cartLeft)}>
                         <div className={clsx(styles.imgWrap)}>
                              <img src={image} alt={name} />
                         </div>
                         <button>
                              <button>-</button>
                              <span className={clsx(styles.quantity)}>{quantity}</span>
                              <button>+</button>
                         </button>
                    </div>
                    <div className={clsx(styles.cartRight)}>
                         <h3 className={clsx(styles.headingLv3)}>
                              {name}
                         </h3>
                         <span className={clsx(styles.price)}>$ {price.toLocaleString()}</span>
                    </div>
               </div>

          </li>
     )
}
