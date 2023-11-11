import React, { createContext } from 'react'

export const ProviderContext = createContext();

export default function Provider({ children }) {
     return (
          <Provider.Provider>
               {children}
          </Provider.Provider>
     )
}
