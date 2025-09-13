import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from './dashboardSlice'

export default function AddWidgetModal({ categoryId, onClose }){
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  function submit(e){
    e.preventDefault()
    if (!name.trim()) return
    dispatch(addWidget({ categoryId, name: name.trim(), text: text.trim() }))
    onClose()
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Add Widget</h3>
        <form onSubmit={submit} style={{display:'grid',gap:8,marginTop:8}}>
          <label>
            Name
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Widget name" />
          </label>
          <label>
            Text
            <textarea value={text} onChange={e=>setText(e.target.value)} rows={4} placeholder="Widget text" />
          </label>

          <div style={{display:'flex',gap:8,justifyContent:'flex-end',marginTop:6}}>
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn primary">Add Widget</button>
          </div>
        </form>
      </div>
    </div>
  )
}
