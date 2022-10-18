import React from 'react'
import { Outlet } from 'react-router-dom'
import DashFooter from './DashFooter'
import DashHeader from './DashHeader'

const DashLayout = () => {
  return (
    <>
        <DashHeader />
        <div className='dash-container' >DashLayout
            <Outlet />
        </div>
        <DashFooter />
    </>
  )
}

export default DashLayout