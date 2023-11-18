
import { useSelector } from 'react-redux';
import TrelloColumn from '../TrelloColumn/TrelloColumn';

export default function TrelloListColumn() {
     const listColumn = useSelector((state) => state.list.listColumn);
     return (
          <div className="container">
               {
                    listColumn.length &&
                    listColumn.map((itemColumn) => (
                         <TrelloColumn
                              key={itemColumn._id}
                              itemColumn={itemColumn} />
                    ))
               }
          </div>
     )
}
