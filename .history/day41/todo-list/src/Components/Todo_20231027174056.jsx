export default function Todo({ key, todo, isEmpty }) {
     return (
          <li key={key}>
               <p className="desc">{todo}</p>
               <div className="btn-group">
                    {!isEmpty && (<><button className="btn btn-update">Sửa</button><button className="btn btn-remove">Xoá</button></>)}
               </div>
          </li>
     )
}
