import React from 'react'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

function Items({ currentItems }) {
     return (
          <>
               {currentItems &&
                    currentItems.map((item) => (
                         <div>
                              <h3>Item #{item}</h3>
                         </div>
                    ))}
          </>
     );
}
export default function PaginatedItems({ currentItems }) {
     const [itemOffset, setItemOffset] = useState(0);
     // Simulate fetching items from another resources.
     // (This could be items from props; or items loaded in a local state
     // from an API endpoint with useEffect and useState)
     const endOffset = itemOffset + itemsPerPage;
     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
     const currentItems = items.slice(itemOffset, endOffset);
     const pageCount = Math.ceil(items.length / itemsPerPage);

     // Invoke when user click to request another page.
     const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % items.length;
          console.log(
               `User requested page number ${event.selected}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
     };
     return (
          <>
               <Items currentItems={currentItems} />
               <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
               />
          </>
     )
}

