import React, { createContext, useContext, useState } from 'react'

interface LayoutContextType {
  sidebarOpen: boolean
  toggleSidebar: () => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}

interface LayoutProviderProps {
  children: React.ReactNode // Ensure children prop is of type ReactNode
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
  }

  const value: LayoutContextType = {
    sidebarOpen,
    toggleSidebar,
  }

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  )
}
