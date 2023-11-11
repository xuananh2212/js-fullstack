import React from 'react'

export default function PlayItems({ playItems, numberPlay }) {
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
                                             <tr key={index}>
                                                  <td>{index + 1}</td>
                                                  <td>{play}</td>
                                             </tr>
                                        ))
                                   }
                              </tbody>
                         </table>
                    <div className="content">
                              <span>Số lần chơi : {numberPlay}</span>   
                    </div>
                    )
               }
          </li>
     )
}
