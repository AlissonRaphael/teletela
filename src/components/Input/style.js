import styled from 'styled-components'
import { motion } from 'framer-motion'

export const InputStyle = styled(motion.div)`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 2rem;
    left: 20%;
    height: 1px;
    width: 60%;
    background-color:  rgba(255,255,255,0.1);
  }
`

export const FieldStyle = styled.input`
  font-size: 1.3rem;
  color: #fff;
  background: transparent;
  border: none;
  outline: none;
  width: ${props => props.size+'rem'};
`

export const Cursor = styled.div`
  height: 1.3rem;
  width: 0.5rem;
  background-color: #5eff94;
  animation: cursor 1s infinite;

  @keyframes cursor {
    0% { opacity: 1 }
    49% { opacity: 1 }
    50% { opacity: 0 }
    100% { opacity: 0 }
  }
`