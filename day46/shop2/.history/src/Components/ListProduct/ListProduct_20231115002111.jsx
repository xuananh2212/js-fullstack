import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { client } from '../../Utils/client';
import { toast } from 'react-toastify';
import ProductItem from '../ProductItem/ProductItem';
import clsx from 'clsx';
import styles from './ListProduct.module.scss'
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


export default function ListProduct() {
     const navigate = useNavigate();
     const [listProduct, setLiProduct] = useState([]);
     const [numberPage, setNumberPage] = useState(1)
     const isLoading = useRef(true);
     const totalPages = useRef(1);
     const handlePageClick = (e) => {
          isLoading.current = true;
          navigate(`/product/${+e.selected + 1}`);
          console.log(e.selected);
          setNumberPage(+e.selected + 1);

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
     }, [numberPage]);

     useLayoutEffect(() => {
          handleGetApiProducts();
     }, [numberPage])
     console.log(isLoading);
     console.log(numberPage, "numberPage");
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
                              <div className='container'>
                                   <ReactPaginate
                                        breakLabel="..."
                                        nextLabel="next >"
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={5}
                                        forcePage={numberPage - 1}
                                        pageCount={totalPages.current}
                                        previousLabel="< previous"
                                        containerClassName={styles.pagination}
                                        previousLinkClassName={styles.paginationLink}
                                        nextLinkClassName={styles.paginationLink}
                                        disabledClassName={styles.paginationDisabled}
                                        activeClassName={styles.paginationActive}
                                   />
                              </div>

                         </div>
                    </>
               )
          )
     )
}
