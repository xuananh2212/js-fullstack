
import styles from './Header.module.scss';
import clsx from 'clsx';
import { BsCart3 } from "react-icons/bs";
import { SiBigcartel } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
export default function Header() {
     const carts = useSelector((state) => state.carts);

     return (
          <header className={clsx(styles.header)}>
               <div className="container">
                    <div className={clsx(styles.content)}>
                         <NavLink
                              className={clsx(styles.logoWrap)}
                              to={'/'}
                         >
                              <div className={clsx(styles.logo)}>
                                   <SiBigcartel className={clsx(styles.icon)} />
                                   <span>Xuan Anh Shop</span>
                              </div>


                         </NavLink>
                         <NavLink
                              to={'/carts'}>
                              <div className={clsx(styles.cartWrap)}>
                                   <BsCart3 className={clsx(styles.cart)} />
                                   <span className={clsx(styles.quantity,
                                        {
                                             [styles.hidden]: carts.length === 0 ? true : false
                                        }
                                   )}>
                                        {
                                             carts.length > 0 ? `${carts.length + 1}` : ""
                                        }

                                   </span>
                              </div>
                         </NavLink>
                    </div>
               </div>
          </header>
     )

}
