'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface BootContextType {
  isBooting: boolean
  setIsBooting: (value: boolean) => void
}

const BootContext = createContext<BootContextType | undefined>(undefined)

export function BootProvider({ children }: { children: ReactNode }) {
  const [isBooting, setIsBooting] = useState(true)

  return (
    <BootContext.Provider value={{ isBooting, setIsBooting }}>
      {children}
    </BootContext.Provider>
  )
}

export function useBoot() {
  const context = useContext(BootContext)
  if (context === undefined) {
    throw new Error('useBoot must be used within a BootProvider')
  }
  return context
}
