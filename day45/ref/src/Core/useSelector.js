import { useContext } from 'react'
import { ProviderContext } from './Provider'
export default function useSelector() {
     return useContext(ProviderContext)
}
