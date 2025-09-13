import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategory, removeCategory, removeWidget } from './dashboardSlice'

export default function CategoryManager({ categories }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  function add() {
    if (!name.trim()) return
    dispatch(addCategory({ name: name.trim() }))
    setName('')
  }

  function toggleWidget(categoryId, widgetId) {
    // If unchecked → remove widget
    dispatch(removeWidget({ categoryId, widgetId }))
  }

  return (
    <div style={{ position: 'relative' }}>
      <button className="add-btn" onClick={() => setOpen(o => !o)}>
        Manage Categories
      </button>

      {open ? (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 36,
            width: 360,
            padding: 12,
            zIndex: 40,
          }}
          className="category-manager"
        >
          <h4 style={{ margin: '0 0 8px 0' }}>Categories & Widgets</h4>
          <div style={{ display: 'grid', gap: 12, maxHeight: '60vh', overflowY: 'auto' }}>
            {categories.map(c => (
              <div
                key={c.id}
                style={{
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: 8,
                  borderRadius: 6,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 6,
                  }}
                >
                  <strong>{c.name}</strong>
                  <button
                    className="btn"
                    onClick={() => {
                      const ok = confirm('Remove category and its widgets?')
                      if (ok) dispatch(removeCategory({ categoryId: c.id }))
                    }}
                  >
                    Delete
                  </button>
                </div>

                {c.widgets.length === 0 ? (
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>
                    No widgets in this category
                  </div>
                ) : (
                  <div style={{ display: 'grid', gap: 6 }}>
                    {c.widgets.map(w => (
                      <label
                        key={w.id}
                        style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                      >
                        <input
                          type="checkbox"
                          defaultChecked
                          onChange={e => {
                            if (!e.target.checked) toggleWidget(c.id, w.id)
                          }}
                        />
                        <span style={{ fontSize: 14 }}>{w.name}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Add new category section */}
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: 8,
                marginTop: 4,
              }}
            >
              <input
                placeholder="New category name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  marginTop: 8,
                  justifyContent: 'flex-end',
                }}
              >
                <button className="btn" onClick={() => setOpen(false)}>
                  Close
                </button>
                <button className="btn primary" onClick={add}>
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
