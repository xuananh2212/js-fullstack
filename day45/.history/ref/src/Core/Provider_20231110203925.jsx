import React, { createContext } from 'react'

export const ProviderContext = createContext();

export default function Provider({ children }) {
     const [state, setState]
     return (
          <ProviderContext.Provider>
               {children}
          </ProviderContext.Provider>
     )
}
