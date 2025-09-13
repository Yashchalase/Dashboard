import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Category from './Category'
import AddWidgetModal from './AddWidgetModal'
import CategoryManager from './CategoryManager'
import SearchBar from './SearchBar'

export default function Dashboard(){
  const categories = useSelector(s => s.dashboard.categories)
  const [addingTo, setAddingTo] = useState(null)
  const [search, setSearch] = useState('')

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,marginBottom:12}}>
        <SearchBar value={search} onChange={setSearch} />
        <CategoryManager categories={categories} />
      </div>

      {search ? (
        <SearchResults categories={categories} query={search} onAdd={(categoryId)=>setAddingTo(categoryId)} />
      ) : null}

      <div className="categories" style={{marginTop:12}}>
        {categories.map(cat => (
          <Category key={cat.id} category={cat} onAddWidget={()=>setAddingTo(cat.id)} />
        ))}
      </div>

      {addingTo ? <AddWidgetModal categoryId={addingTo} onClose={()=>setAddingTo(null)} /> : null}
    </div>
  )
}

function SearchResults({ categories, query, onAdd }){
  const q = query.trim().toLowerCase()
  const results = []
  categories.forEach(cat => {
    cat.widgets.forEach(w => {
      if (w.name.toLowerCase().includes(q) || w.text.toLowerCase().includes(q)) {
        results.push({ ...w, categoryName: cat.name, categoryId: cat.id })
      }
    })
  })

  if (results.length === 0) return <div className="search-results">No results for "{query}"</div>

  return (
    <div className="search-results">
      <h3 style={{margin:'0 0 8px 0'}}>Search results ({results.length})</h3>
      <div style={{display:'grid',gap:8}}>
        {results.map(r => (
          <div key={r.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:8,background:'rgba(255,255,255,0.02)',borderRadius:8}}>
            <div>
              <strong>{r.name}</strong>
              <div style={{fontSize:13,color:'var(--muted)'}}>{r.text}</div>
              <div style={{fontSize:12,color:'var(--muted)',marginTop:6}}>Category: {r.categoryName}</div>
            </div>
            <div>
              <button className="btn" onClick={()=>onAdd(r.categoryId)}>+ Add widget to this category</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
