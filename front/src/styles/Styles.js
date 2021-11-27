import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  background: var(--purple);

  > div {
    padding-top: 3rem;
    padding-bottom: 8rem;
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: center;

    h1 {
      font-size: 3rem;
    }

    form {
      display: grid;
      grid-template-columns: 60% 40%;
      gap: 0.5rem;

      input,
      select {
        padding: 0.5rem;
        border-radius: 0.3rem;
        border: none;
      }

      button {
        grid-column: 1 / 3;
        padding: 0.5rem 0;
        border-radius: 0.3rem;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 600;
        background: #d08fe4;
        color: #ffffff;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`

export const PeopleContainer = styled.section`
  transform: translateY(-60px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const PersonContainer = styled.div`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 0.4rem;

  padding: 2rem;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    li span {
      font-weight: 700;
    }

    button {
      grid-column: 1 / 3;
      padding: 0.5rem 0;
      border-radius: 0.3rem;
      border: none;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;
      background: #d08fe4;
      color: #ffffff;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
