import { useState } from 'react'
import { Container, InputContainer } from "./style"

export default function Input () {
  const [input, setInput] = useState('')
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')

  const handleChange = (event) => {
    const { value } = event.target || ''

    const [_question, _response ] = value.split('?')
    setQuestion(_question+'?')
    setResponse(_response)
  }

  return (
    <Container>
      <InputContainer>
        <input type="text" onChange={(event) => handleChange(event)}/>
        <div>Pergunta: {question}</div>
        <div>Resposta: {response}</div>
      </InputContainer>
    </Container>
  )
}
