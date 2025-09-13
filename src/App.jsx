import React from 'react'
import Dashboard from './features/dashboard/Dashboard'

export default function App(){
  return (
    <div className="container">
      <header>
        <h1>Dynamic Dashboard - Starter</h1>
        <div style={{display:'flex',gap:10}}>
          <div style={{color:'var(--muted)',fontSize:13}}>Built with React + Redux Toolkit</div>
        </div>
      </header>

      <Dashboard />
    </div>
  )
}
