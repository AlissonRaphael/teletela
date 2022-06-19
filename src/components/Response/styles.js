import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ResponseStyle = styled(motion.div)`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 2rem;
    left: 20%;
    height: 1px;
    width: 60%;
    background-color:  rgba(250,0,0,0.5);
  }
`

export const TextStyle = styled.div`
  font-size: 1.3rem;
`