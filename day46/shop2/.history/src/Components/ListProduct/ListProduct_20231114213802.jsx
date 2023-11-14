import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { client } from '../../Utils/client';
import { toast } from 'react-toastify';
import ProductItem from '../ProductItem/ProductItem';
import clsx from 'clsx';
import styles from './ListProduct.module.scss'
import { useParams } from 'react-router-dom';

export default function ListProduct() {
     const params = useParams();
     const [listProduct, setLiProduct] = useState([]);
     const numberPage = params.id || 1;
     const isLoading = useRef(true);
     const totalPages = useRef(1);
     function createPagination(totalPages, page) {
          let liTag = '';
          let active;
          let beforePage = page - 1;
          let afterPage = page + 1;
          if (page > 1) { //show the next button if the page value is greater than 1
               liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
          }
          if (page > 2) { //if page value is less than 2 then add 1 after the previous button
               liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
               if (page > 3) { //if page value is greater than 3 then add this (...) after the first li or page
                    liTag += `<li class="dots"><span>...</span></li>`;
               }
          }
          // how many pages or li show before the current li
          if (page == totalPages) {
               beforePage = beforePage - 2;
          } else if (page == totalPages - 1) {
               beforePage = beforePage - 1;
          }
          // how many pages or li show after the current li
          if (page == 1) {
               afterPage = afterPage + 2;
          } else if (page == 2) {
               afterPage = afterPage + 1;
          }
          for (var plength = beforePage; plength <= afterPage; plength++) {
               if (plength > totalPages) { //if plength is greater than totalPage length then continue
                    continue;
               }
               if (plength == 0) { //if plength is 0 than add +1 in plength value
                    plength = plength + 1;
               }
               if (page == plength) { //if page is equal to plength than assign active string in the active variable
                    active = "active";
               } else { //else leave empty to the active variable
                    active = "";
               }
               liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
          }
          if (page < totalPages - 1) { //if page value is less than totalPage value by -1 then show the last li or page
               if (page < totalPages - 2) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
                    liTag += `<li class="dots"><span>...</span></li>`;
               }
               liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
          }
          if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
               liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
          }
          element.innerHTML = liTag; //add li tag inside ul tag
          return liTag; //reurn the li tag
     }
     const handleGetApiProducts = useMemo(() => {
          return async () => {
               const queryStr = new URLSearchParams({
                    limit: 20,
                    page: numberPage
               }).toString();
               const url = `/products?${queryStr}`;
               const { data } = await client.get(url);
               console.log(data);
               isLoading.current = false;
               if (data.code === 200) {
                    totalPages.current = data.data.totalPage;
                    console.log(data.data.listProduct)
                    setLiProduct(data.data.listProduct);
               } else {
                    toast.error(`${data.message}`);
               }
          }
     }, []);

     useLayoutEffect(() => {
          handleGetApiProducts();
     }, [])
     console.log(totalPages);
     return (
          (isLoading.current ?
               <div className={clsx(styles.loading)}>Loading...</div>
               : (
                    <>
                         <div className={clsx(styles.listProduct)}>
                              <div className='container'>
                                   <h2 className={clsx(styles.headingLv2)}>
                                        Products
                                   </h2>
                                   <div className={styles.listProductWrap}>
                                        {
                                             listProduct.length > 0 &&
                                             listProduct.map((product) => (
                                                  <ProductItem
                                                       key={product._id}
                                                       product={product}

                                                  />
                                             ))
                                        }
                                   </div>
                              </div>
                         </div>
                         <div className="page">
                              <ul>

                              </ul>
                         </div>
                    </>
               )
          )
     )
}
