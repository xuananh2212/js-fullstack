import React, { createContext, useReducer } from 'react'

export const ProviderContext = createContext();

export default function Provider({ children }) {
     const [state, dispatch] = useReducer(rootReducer, {

     })
     return (
          <ProviderContext.Provider>
               {children}
          </ProviderContext.Provider>
     )
}
