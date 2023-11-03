import React from 'react'

export default function Loading() {
     return (
          <div className='loading'>
               <HashLoader
                    size={100}
                    color="#36d7b7"
                    loading
               />
          </div>
     )
}
