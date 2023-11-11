import { useRef } from "react";
import MAX_TIME from "../../Utils/Config";
import './PlayItems.scss'
export default function PlayItems({ playItems, numberPlay, sumNumberPlay }) {
     const correct = useRef(playItems.findIndex(({ flag }) => flag));
     console.log(correct);
     return (
          <li className="playItems">
               {

                    playItems?.length > 0 && (
                         <>
                              <table>
                                   <thead>
                                        <tr>
                                             <td>Số lần nhập</td>
                                             <td>Số nhập vào</td>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {

                                             playItems.map(({ number }, index) => (
                                                  <tr key={index}>
                                                       <td>{index + 1}</td>
                                                       <td>{number}</td>
                                                  </tr>
                                             ))
                                        }
                                   </tbody>
                              </table>
                              <div className="content">
                                   <span>Lần chơi thứ :
                                        {`${sumNumberPlay - numberPlay}/${sumNumberPlay}`}
                                   </span>
                                   <span>Số lần Nhập tối đa: {MAX_TIME}</span>
                                   <span>
                                        Tỷ lệ đúng:{correct.current === -1 ? `0%` :
                                             `${((MAX_TIME - (correct.current + 1)) * 100 / MAX_TIME).toFixed(2)}%`}
                                   </span>
                              </div>
                         </>
                    )
               }
          </li>
     )
}
