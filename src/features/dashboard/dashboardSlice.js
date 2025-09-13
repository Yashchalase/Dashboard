import { createSlice } from '@reduxjs/toolkit'
import sampleData from './sampleData.json'
import { v4 as uuidv4 } from 'uuid'

const initialState = sampleData

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget(state, action) {
      const { categoryId, name, text } = action.payload
      const cat = state.categories.find(c => c.id === categoryId)
      if (cat) {
        cat.widgets.push({ id: uuidv4(), name, text })
      }
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload
      const cat = state.categories.find(c => c.id === categoryId)
      if (cat) {
        cat.widgets = cat.widgets.filter(w => w.id !== widgetId)
      }
    },
    addCategory(state, action) {
      const { name } = action.payload
      state.categories.push({ id: uuidv4(), name, widgets: [] })
    },
    removeCategory(state, action) {
      const { categoryId } = action.payload
      state.categories = state.categories.filter(c => c.id !== categoryId)
    },
    // move widget between categories (optional)
    moveWidget(state, action) {
      const { fromCategoryId, toCategoryId, widgetId } = action.payload
      const from = state.categories.find(c => c.id === fromCategoryId)
      const to = state.categories.find(c => c.id === toCategoryId)
      if (from && to) {
        const idx = from.widgets.findIndex(w => w.id === widgetId)
        if (idx >= 0) {
          const [widget] = from.widgets.splice(idx,1)
          to.widgets.push(widget)
        }
      }
    }
  }
})

export const { addWidget, removeWidget, addCategory, removeCategory, moveWidget } = dashboardSlice.actions
export default dashboardSlice.reducer
