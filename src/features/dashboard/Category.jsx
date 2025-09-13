import React from 'react'
import WidgetCard from './WidgetCard'

export default function Category({ category, onAddWidget }){
  return (
    <section className="category">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <h2>{category.name}</h2>
        <button className="add-btn" onClick={onAddWidget}>+ Add Widget</button>
      </div>

      <div className="widgets-grid">
        {category.widgets.map(w => (
          <WidgetCard key={w.id} widget={w} categoryId={category.id} />
        ))}
        {category.widgets.length === 0 ? <div style={{color:'var(--muted)'}}>No widgets yet</div> : null}
      </div>
    </section>
  )
}
