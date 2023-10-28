

export default function Todo({ desc }) {
     return (
          <li>
               <p className="desc">{desc}</p>
               <div className="btn-group">
                    <button className="btn btn-update">Sửa</button>
                    <button className="btn btn-remove">Xoá</button>
               </div>
          </li>
     )
}
