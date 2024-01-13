

import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'

import './layouts/Default.css'

export default function App() {
  return(
    <div className="layout">
      <SideBar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}