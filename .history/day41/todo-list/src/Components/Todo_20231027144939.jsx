export default function Todo({ desc, isEmpty }) {
     console.log(desc);
     return (
          <li>
               <p className="desc">{desc}</p>
               <div className="btn-group">
                    {!isEmpty && (<button className="btn btn-update">Sửa</button>
                                <button className="btn btn-remove">Xoá</button>)}
               </div>
          </li>
     )
}
