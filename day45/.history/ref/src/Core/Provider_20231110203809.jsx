import React, { createContext } from 'react'

export const ProviderContext = createContext();

export default function Provider({ children }) {
     return (
          <ProviderContext.Provider>
               {children}
          </ProviderContext.Provider>
     )
}
