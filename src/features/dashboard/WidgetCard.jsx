import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from './dashboardSlice'

export default function WidgetCard({ widget, categoryId }){
  const dispatch = useDispatch()
  return (
    <div className="widget">
      <button title="Remove widget" className="remove" onClick={()=>dispatch(removeWidget({categoryId, widgetId: widget.id}))}>✕</button>
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
    </div>
  )
}
