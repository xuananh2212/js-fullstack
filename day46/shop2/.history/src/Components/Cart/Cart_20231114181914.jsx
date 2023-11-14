import React from 'react';
import styles from './Cart.module.scss';
import clsx from 'clsx';
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function Cart({ product: { _id, image, amount, name, price, quantity } }) {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const handleIncrease = () => {
          dispatch({
               type: 'carts/add',
               payLoad: { _id, image, amount, name, price, quantity }
          })
          toast.success(`Tăng Số lượng sản phẩm `)

     }
     const handleDecrease = () => {
          dispatch({
               type: 'carts/decrease',
               payLoad: { _id }
          })
          toast.success(`Giảm Số lượng sản phẩm`)
     }
     const handleRemoveCart = () => {
          dispatch({
               type: 'carts/removeCart',
               payLoad: { _id }
          })
          toast.success('xoá thành công');
     }
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
                              onClick={handleDecrease}
                              disabled={quantity === 1 ? true : false}
                              className={clsx(styles.decrease)}>-</button>
                         <span
                              className={clsx(styles.quantity)}>{quantity}</span>
                         <button
                              onClick={handleIncrease}
                              disabled={amount === 0 ? true : false}
                              className={clsx(styles.increase)}>+</button>
                    </div>
                    <span className={clsx(styles.intoMoney)}>Thành Tiền:  ${(+quantity * +price).toLocaleString()}</span>
               </div>
               <button
                    onClick={handleRemoveCart}
                    className={clsx(styles.removeCart)}>
                    <FaTrashCan className={clsx(styles.iconRemove)} />
               </button>

          </li>
     )
}
