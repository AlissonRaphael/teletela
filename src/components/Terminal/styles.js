import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Body = styled.section`
  height: 50vh;
  width: 60vw;
`

export const Header = styled.header`
  padding: 0.7rem;
  background-color: #22212C;
  border-bottom: 1px solid rgba(255,255,255,0.02);
  border-radius: 0.3rem 0.3rem 0rem 0rem;
  display: flex;
`

export const Button = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 0.35rem;
`

export const Main = styled.main`
  padding: 0.7rem;
  background-color: #22212C;
  border-radius: 0rem 0rem 0.3rem 0.3rem;
`
