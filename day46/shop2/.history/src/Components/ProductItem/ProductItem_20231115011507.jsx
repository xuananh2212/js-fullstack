import { clsx } from 'clsx'
import styles from './ProductItem.module.scss'
import { BsCartPlus } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
export default function ProductItem({ product }) {
     const dispatch = useDispatch();
     const carts = useSelector((state) => state.carts);
     const navigate = useNavigate();
     const { _id, name, image, price, quantity: amount } = product;
     return (
          <div
               className={clsx(styles.ProductItem)}
          >
               <div
                    className={clsx(styles.imgWrap)}
                    onClick={() => {
                         navigate(`/product-detail/${_id}`);
                    }}
               >
                    <img src={image} alt={name} />
               </div>
               <div className={clsx(styles.content)}>
                    <NavLink to={`/product-detail/${_id}`}>
                         <h3

                              className={clsx(styles.nameProduct)}>
                              {name}
                         </h3>
                    </NavLink>
                    <div className={clsx(styles.contentBottom)}>
                         <span className={styles.price}>$ {price.toLocaleString()}</span>
                         <button
                              onClick={() => {
                                   dispatch({
                                        type: 'carts/add',
                                        payLoad: { _id, name, price, image, amount: amount - 1, quantity: 1 }
                                   })
                                   toast.success(`Thêm sản phẩm: ${name} vào giỏ hàng`)
                              }}
                              className={clsx(styles.btnAddCart)}>
                              <BsCartPlus />
                              Add to cart
                         </button>
                    </div>
               </div>

          </div>

     )
}
