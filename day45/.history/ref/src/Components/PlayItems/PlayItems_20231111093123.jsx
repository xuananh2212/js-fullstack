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
                                        <td>Số lần nhập</td>
                                   </tr>
                              </thead>
                         </table>
                    )
               }
          </li>
     )
}
