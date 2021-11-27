import React from 'react'
import { useServer } from '../hooks/useServer'

import { PersonContainer } from '../styles/Styles'

export function Person({ data }) {
  const { delPerson } = useServer()

  return (
    <PersonContainer>
      <ul>
        <li>
          <span>Nome:</span> {data.name}
        </li>
        <li>
          <span>Idade:</span> {data.age}
        </li>
        <li>
          <span>Gênero:</span> {data.gender}
        </li>
        <li>
          <span>Profissão:</span> {data.profession}
        </li>
        <button type="button" onClick={() => delPerson(data.id)}>
          Excluir Cadastro
        </button>
      </ul>
    </PersonContainer>
  )
}
