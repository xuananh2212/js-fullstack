import React from 'react'
import { clsx } from 'clsx'
import styles from './ProductItem.module.scss'
import { BsCartPlus } from "react-icons/bs";

export default function ProductItem({ product }) {
     console.log(product);
     const { name, image, price } = product;
     return (
          <div className={clsx(styles.ProductItem)}>
               <div className={clsx(styles.imgWrap)}>
                    <img src={image} alt={name} />
               </div>
               <div className={clsx(styles.content)}>
                    <h3 className={clsx(styles.nameProduct)}>
                         {name}
                    </h3>
                    <div>
                         <span className={styles.price}>{String(price).toLocaleString()}</span>
                         <button>
                              <BsCartPlus />
                         </button>
                    </div>
               </div>

          </div>
     )
}
