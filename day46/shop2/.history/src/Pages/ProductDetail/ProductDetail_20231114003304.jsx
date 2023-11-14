import React from 'react';
import Header from '../../Layout/Header/Header';
import { useParams } from 'react-router-dom';


export default function ProductDetail() {
     const param = useParams();
     console.log(param, param.id);


     return (
          <>
               <Header />
               <div className='productDetail'>
                    <div className="container">


                    </div>
               </div>
          </>
     )
}
