import React from 'react'
import { useServer } from '../hooks/useServer'

import { Person } from './Person'

import { PeopleContainer } from '../styles/Styles'

export function People() {
  const { people } = useServer()

  return (
    <PeopleContainer className="container">
      {people &&
        people.map((person) => <Person key={person.id} data={person} />)}
    </PeopleContainer>
  )
}
