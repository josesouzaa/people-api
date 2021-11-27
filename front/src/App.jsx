import React from 'react'
import { ServerProvider } from './hooks/useServer'

import { Header } from './components/Header'
import { People } from './components/People'

import { Global } from './styles/Global'

export function App() {
  return (
    <ServerProvider>
      <Global />
      <Header />
      <People />
    </ServerProvider>
  )
}
