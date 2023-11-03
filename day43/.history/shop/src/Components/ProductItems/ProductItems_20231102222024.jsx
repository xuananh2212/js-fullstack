import React from 'react'

export default function ProductItems({ id, name, price, image }) {
     return (
          <li>
               <div className="img-wrap">
                    <img
                         src={image}
                         alt={name}

                    />
               </div>
               <h2 className='heading-lv2'>
                    {
                         name
                    }
               </h2>
          </li>
     )
}
