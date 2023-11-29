import React from 'react'

export default function page({ searchParams }) {
     const { q } = searchParams;
     console.log(q, searchParams);
     return (
          <div>page</div>
     )
}
