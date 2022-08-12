import { useState } from 'react'
import {motion, AnimatePresence } from 'framer-motion'

import { ContainerStyle } from './style'
import Input from '../Input'
import Response from '../Response'
import Logo from '../Logo'

export default function Container () {
  const [response, setResponse] = useState('')
  const [isOk, setIsOk] = useState(false)
  const praiseNumber = Math.floor(Math.random() * 4)

  return (
    <ContainerStyle>
      <AnimatePresence>
        <Logo color={ isOk ? 'red' : 'grey' }/>
        { !isOk && <Input praiseNumber={praiseNumber} handleSetResponse={setResponse} handleSetIsOk={setIsOk}/> }
        { isOk && <Response response={response}/> }
        <motion.div
          className="light"
          animate={{ opacity: [0, 1, 1, 0, 1, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </AnimatePresence>
    </ContainerStyle>
  )
}
