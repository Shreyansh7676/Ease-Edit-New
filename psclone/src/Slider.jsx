import React from 'react'

export default function Slider({ min, max, value, handleChange}) {
  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider max-w-2xl"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        style={{color:'white'}}
      />
    </div>
  )
}