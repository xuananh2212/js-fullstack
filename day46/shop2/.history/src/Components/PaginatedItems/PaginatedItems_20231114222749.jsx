import React from 'react'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
export default function PaginatedItems({ currentItems }) {
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
