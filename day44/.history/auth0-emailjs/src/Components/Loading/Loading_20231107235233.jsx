import { useContext } from 'react'
import './loading.css'
import HashLoader from "react-spinners/HashLoader";
export default function Loading({ loading }) {
     const isLoading = loading;
     return (
          <div className={`${isLoading ? "loading" : "loading is-hidden"}`} >
               <HashLoader
                    size={100}
                    color="#36d7b7"
                    loading={isLoading}
               />
          </div>
     )
}
