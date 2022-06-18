import { useState, useRef } from 'react'

import { praise } from './praise'
import { InputStyle, FieldStyle, Cursor } from "./style"


export default function Input ({ praiseNumber }) {
  const [realInput, setRealInput] = useState('')
  const [fakeInput, setFakeInput] = useState('')
  const [visible, setVisible] = useState(false)
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const input = useRef(null)

  const handleChange = (event) => {
    const { value } = event.target || ''

    if (value.length > 115)
      return

    setRealInput(value)

    const [_question, _response ] = value.split(';')
    const responseSize = _response ? _response.length : 0

    setQuestion(_question)
    setResponse(_response)

    let praiseSize = 'short'

    if (responseSize > 20)
      praiseSize = 'medium'

    if (responseSize > 35)
      praiseSize = 'long'

    if (responseSize > 50)
      praiseSize = 'extra'

    const phrase = praise[praiseNumber][praiseSize].slice(0, responseSize)

    setFakeInput(_question+' '+phrase)
  }

  const handleKeyUp = (event) => {
    const { keyCode } = event || ''

    if (keyCode === 13)
      setVisible(true)
  }

  return (
    <>
      <InputStyle onClick={() => input.current.focus()}>
        <FieldStyle
          type="text"
          value={fakeInput}
          onClick={() => input.current.focus()}
          size={fakeInput.length*0.72}
          onChange={() => {}}
        />
        <Cursor/>
      </InputStyle>
      <input
        style={{ opacity: 0 }}
        className="display-none"
        type="text"
        ref={input}
        value={realInput}
        onChange={(event) => handleChange(event)}
        onKeyUp={(event) => handleKeyUp(event)}
      />
    </>
  )
}
