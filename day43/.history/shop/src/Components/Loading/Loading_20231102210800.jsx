import React from 'react'
import loading from './loading.css'
import HashLoader from "react-spinners/HashLoader";
export default function Loading() {
     return (
          <div className={`${loading ? "loading is-show" : "loading is-hidden"}`} >
               <HashLoader
                    size={100}
                    color="#36d7b7"
                    loading
               />
          </div>
     )
}
