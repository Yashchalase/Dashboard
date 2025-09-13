import React from 'react'

export default function SearchBar({ value, onChange }){
  return (
    <div className="searchbar">
      <input placeholder="Search widgets by name or text..." value={value} onChange={e=>onChange(e.target.value)} />
    </div>
  )
}
