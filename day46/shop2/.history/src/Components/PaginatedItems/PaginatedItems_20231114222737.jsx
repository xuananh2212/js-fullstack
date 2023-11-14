import React from 'react'

export default function PaginatedItems() {
     const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % items.length;
          console.log(
               `User requested page number ${event.selected}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
     };
     return (
          <div>PaginatedItems</div>
     )
}
