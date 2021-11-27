import React, { useState } from 'react'
import { useServer } from '../hooks/useServer'

import { HeaderContainer } from '../styles/Styles'

export function Header() {
  const { addPerson } = useServer()

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('')
  const [profession, setProfession] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (gender !== 'Selecione' && gender !== '') {
      const body = { name, age, gender, profession }
      addPerson(body)
      setName('')
      setAge(0)
      setProfession('')
    } else {
      alert('Selecione algum gênero')
    }
  }

  return (
    <HeaderContainer>
      <div className="container">
        <h1>People</h1>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Idade"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Profisssão"
            required
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
          <select required onChange={(e) => setGender(e.target.value)}>
            <option value="Selecione">Selecione um opção</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outros">Outros</option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </HeaderContainer>
  )
}
