import { createContext, useReducer } from 'react';
import rootReducer from './rootReducer';

export const ProviderContext = createContext();
export default function Provider({ children }) {
     const [state, dispatch] = useReducer(rootReducer, {
          listNumberRandom: JSON.parse(localStorage.getItem("array")) || [],
          theme: localStorage.getItem("theme") || ""
     })
     const data = {
          state,
          dispatch
     }
     return (
          <ProviderContext.Provider
               value={data}
          >
               {children}
          </ProviderContext.Provider>
     )
}
