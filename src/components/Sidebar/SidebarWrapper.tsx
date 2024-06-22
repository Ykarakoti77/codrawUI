import { useLayout } from '@/Context/LayoutContext'
import React from 'react'
import { SidebarMinimized } from './SidebarMinimized'
import { Sidebar } from './SideBar'

export const SidebarWrapper = () => {
  const { sidebarOpen } = useLayout()
  return sidebarOpen ? <Sidebar /> : <SidebarMinimized />
}
