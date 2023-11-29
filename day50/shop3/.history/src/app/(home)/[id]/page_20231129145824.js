import React from 'react'

export default function page({ searchParams }) {
     const { q } = searchParams;
     console.log(q);
     return (
          <div>page</div>
     )
}
