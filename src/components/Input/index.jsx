import { useState, useRef } from 'react'
import { Container, InputContainer } from "./style"

import { praise } from './praise'

export default function Input ({ praiseNumber }) {
  const [realInput, setRealInput] = useState('')
  const [fakeInput, setFakeInput] = useState('')
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const input = useRef(null)

  const handleChange = (event) => {
    const { value } = event.target || ''
    setRealInput(value)

    const [_question, _response ] = value.split('?')

    setQuestion(_question+'? ')
    setResponse(_response)

    const responseSize = _response ? _response.length : 0
    let praiseSize = 'short'

    if (responseSize > 22)
      praiseSize = 'medium'

    if (responseSize > 44)
      praiseSize = 'long'

    if (responseSize > 66)
      praiseSize = 'extra'

    const phrase = praise[praiseNumber][praiseSize].slice(0, responseSize)

    setFakeInput(question+phrase)
  }

  return (
    <Container>
      <InputContainer>
        <input
          className="display-none"
          type="text"
          ref={input}
          value={realInput}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="text"
          placeholder="Faça-me um elogio e eu responderei suas perguntas"
          value={fakeInput}
          onClick={() => input.current.focus()}
        />
        <div>Pergunta: {question}</div>
        <div>Resposta: {response}</div>
      </InputContainer>
    </Container>
  )
}
