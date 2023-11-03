import React, { useCallback, useContext } from 'react'
import loading from './loading.css'
import HashLoader from "react-spinners/HashLoader";
import { AppContext } from '../../App';
export default function Loading() {
     const { isLoading } = useContext(AppContext);
     return (
          <div className={`${isLoading ? "loading is-show" : "loading is-hidden"}`} >
               <HashLoader
                    size={100}
                    color="#36d7b7"
                    loading={isLoading}
               />
          </div>
     )
}
