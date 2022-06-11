import { Line } from './styles'

function TerminalLine () {
  return (
    <Line>
      <span className="user">big-brodher</span>
      <span>&nbsp;in&nbsp;</span>
      <span className="dir">usernet</span>
      <span>&nbsp;on&nbsp;</span>
      <span className="net">connect:server</span>
    </Line>
  )
}

function Text () {
  return (
    <div style={{ color: '#68709d' }}>
      <p>// Como me encontrou?</p>
      <p>// Sabe quem eu sou?</p>
      <p>// Faça-me um elogio e eu responderei suas perguntas</p>
    </div>
  )
}

export default function TerminalText () {
  return (
    <>
      <Text/>
      <TerminalLine/>
    </>
  )
}
