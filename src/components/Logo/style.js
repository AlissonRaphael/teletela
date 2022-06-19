import styled from "styled-components"

const red = 'invert(34%) sepia(89%) saturate(7482%) hue-rotate(4deg) brightness(89%) contrast(133%)'
const grey = 'invert(97%) sepia(3%) saturate(0%) hue-rotate(288deg) brightness(103%) contrast(105%)'

export const LogoStyle = styled.div`

  img {
    margin-bottom: 2rem;
    height: 15rem;
    filter: ${({color}) => color === 'red' ? red : grey};
    opacity: ${({color}) => color === 'red' ? 0.4 : 0.1};
  }

`
