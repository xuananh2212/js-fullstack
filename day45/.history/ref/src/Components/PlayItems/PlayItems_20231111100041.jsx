import MAX_TIME from "../../Utils/Config";
import './PlayItems.scss'
export default function PlayItems({ playItems, numberPlay, sumNumberPlay }) {
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
                                   <span>lần chơi thứ : {`${numberPlay}/${sumNumberPlay}`}</span>
                                   <span>Số lần Nhập tối đa: {MAX_TIME}</span>
                                   <span>Tỷ lệ đúng: </span>
                              </div>
                         </>
                    )
               }
          </li>
     )
}
