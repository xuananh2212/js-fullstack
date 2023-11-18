import React from 'react';
import { useSelector } from 'react-redux';
import TrelloColumn from '../TrelloColumn/TrelloColumn';

export default function TrelloListColumn() {
     const listColumn = useSelector((state) => state.trelloList.listColumn);
     return (
          <div className="container">
               {
                    listColumn.length && listColumn.map((column) => (
                         <TrelloColumn column={column} />
                    ))
               }
          </div>
     )
}
