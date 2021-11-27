import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

const Server = createContext({})

export function ServerProvider({ children }) {
  const [people, setPeople] = useState([])

  async function getPeople() {
    const response = await api.get('/')
    const data = await response.data
    setPeople(data)
  }

  async function addPerson(body) {
    const response = await api.post('/', body)
    const data = await response.data
    setPeople(data)
  }

  async function delPerson(id) {
    const response = await api.delete('/del', { headers: { id: id } })
    const data = await response.data
    setPeople(data)
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <Server.Provider value={{ people, setPeople, addPerson, delPerson }}>
      {children}
    </Server.Provider>
  )
}

export function useServer() {
  const context = useContext(Server)
  const { people, addPerson, delPerson } = context
  return { people, addPerson, delPerson }
}
