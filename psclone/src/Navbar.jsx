'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'

export default function ExampleNavbarOne() {
  return (
    <div className="relative w-full bg-transparent">
      <div className="py-6 mx-auto flex max-w-7xl items-center justify-between sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 left-0">
{/*           
          <span className="font-thin text-white text-4xl font-abc">Edit-Ease</span> */}
          <a href='/' className="font-abc text-white text-4xl">Edit-Ease</a>
        </div>
         
      </div>
    </div>
  )
}
