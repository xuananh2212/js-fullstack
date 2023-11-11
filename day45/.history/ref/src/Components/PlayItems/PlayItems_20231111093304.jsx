import React from 'react'

export default function PlayItems({ playItems }) {
     return (
          <li>
               {
                    playItems?.length > 0 && (
                         <table>
                              <thead>
                                   <tr>
                                        <td>Số lần nhập</td>
                                        <td>Số nhập vào</td>
                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        playItems.map((play, index) => (
                                             <tr>
                                                  <td>{index + 1}</td>
                                                  <td>{play}</td>

                                             </tr>
                                        ))
                                   }
                              </tbody>
                         </table>
                    )
               }
          </li>
     )
}
