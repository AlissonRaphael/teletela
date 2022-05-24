import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputContainer = styled.div`
  width: 40%;

  input {
    font-size: 1rem;
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.2rem;
    width: 100%;
    outline: none;

    .display-none {
      display: none;
    }
  }
`