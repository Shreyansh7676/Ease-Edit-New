import * as React from 'react'
import './button.css'

export default function SolidButtons({name, active, handleClick}) {
  return (
    <div className={`flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 bg-gray-700`}>
      <button
        type="button"
        className={`bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${active?'active':' '}`}
        onClick={handleClick}
      >
        {name}
      </button>
      
    </div>
  )
}
