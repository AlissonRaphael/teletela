import styled from 'styled-components'

export const ContainerStyle = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  div.light {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-image: radial-gradient(rgba(255,0,0,0.1), rgba(255,0,0,0));
  }
`