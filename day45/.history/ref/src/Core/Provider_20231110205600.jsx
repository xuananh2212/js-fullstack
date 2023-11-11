import React, { createContext, useReducer, useRef } from 'react'

export const ProviderContext = createContext();

export default function Provider({ children }) {
     const [state, dispatch] = useReducer(rootReducer, {
          listNumberRandom: JSON.parse(localStorage.getItem("array")) || [],
          theme: localStorage.getItem("theme") || ""
     })
     const numberRandom = useRef(Math.floor(Math.random() * 99) + 1)

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
