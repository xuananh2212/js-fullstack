import { useContext } from 'react'
import './loading.css'
import HashLoader from "react-spinners/HashLoader";
export default function Loading() {
     return (
          <div className="isLoading" >
               <HashLoader
                    size={100}
                    color="#36d7b7"
                    loading={true}
               />
          </div>
     )
}
