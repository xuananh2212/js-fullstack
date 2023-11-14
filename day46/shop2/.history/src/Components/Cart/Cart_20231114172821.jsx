import React from 'react';
import styles from './Cart.module.scss';
import clsx from 'clsx';
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Cart({ product: { _id, image, amount, name, price, quantity } }) {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     return (
          <li className={clsx(styles.cart)}>
               <div className={clsx(styles.cartWrapTop)}>
                    <div className={clsx(styles.cartLeft)}>
                         <div
                              onClick={async () => navigate(`/${_id}`)}
                              className={clsx(styles.imgWrap)}>
                              <img src={image} alt={name} />
                         </div>
                    </div>
                    <div className={clsx(styles.cartRight)}>
                         <h3 className={clsx(styles.headingLv3)}>
                              {name}
                         </h3>
                         <span className={clsx(styles.price)}>$ {price.toLocaleString()}</span>
                         <span className={clsx(styles.amount)}>Số Lượng Còn Lại: {amount}</span>
                    </div>
               </div>
               <div className={clsx(styles.cartWrapBottom)}>
                    <div className={clsx(styles.btnGroup)}>
                         <button
                              disabled={quantity === 0 ? true : false}
                              className={clsx(styles.decrease)}>-</button>
                         <span
                              className={clsx(styles.quantity)}>{quantity}</span>
                         <button
                              className={clsx(styles.increase)}>+</button>
                    </div>
                    <span className={clsx(styles.intoMoney)}>Thành Tiền:  ${(+quantity * +price).toLocaleString()}</span>
               </div>
               <button className={clsx(styles.removeCart)}>
                    <FaTrashCan className={clsx(styles.iconRemove)} />
               </button>

          </li>
     )
}
