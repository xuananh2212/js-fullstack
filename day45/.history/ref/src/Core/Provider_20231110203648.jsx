import React from 'react'

export default function Provider({ children }) {
     return (
          <Provider.Provider>
               {children}

          </Provider.Provider>
     )
}
