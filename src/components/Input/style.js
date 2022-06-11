import styled from 'styled-components'

export const Container = styled.div`
  margin: 0.2rem 0;
  width: 100%;

  display: flex;

  span {
    margin-right: 0.2rem;
  }
`

export const InputStyle = styled.input`
  color: #fff;
  background: transparent;
  border: none;
  outline: none;
  width: ${props => props.size+'rem'};
`

export const Cursor = styled.div`
  height: 1rem;
  width: 0.5rem;
  min-width: 0.5rem;
  background-color: #5eff94;
  animation: cursor 1s infinite;

  @keyframes cursor {
    0% { opacity: 1 }
    49% { opacity: 1 }
    50% { opacity: 0 }
    100% { opacity: 0 }
  }
`