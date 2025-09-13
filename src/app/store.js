import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '../features/dashboard/dashboardSlice'

const preloaded = JSON.parse(localStorage.getItem('dashboard_v1') || 'null')

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer
  },
  preloadedState: preloaded ? { dashboard: preloaded } : undefined
})

store.subscribe(() => {
  const state = store.getState().dashboard
  localStorage.setItem('dashboard_v1', JSON.stringify(state))
})

export default store
