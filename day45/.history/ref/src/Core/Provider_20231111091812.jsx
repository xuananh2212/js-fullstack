import { createContext, useReducer } from 'react';
import rootReducer from './rootReducer';
import MAX_TIME from '../Utils/Config';

export const ProviderContext = createContext();
export default function Provider({ children }) {
     const [state, dispatch] = useReducer(rootReducer, {
          listPlays: JSON.parse(localStorage.getItem("array")) || [],
          remaining: MAX_TIME
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
