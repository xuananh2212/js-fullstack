import React from 'react'
import { client } from '@/config/client';
export default async function Gallery() {
     const data = await client.get("")
     return (
          <div>

          </div>
     )
}
