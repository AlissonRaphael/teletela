import { Container, Body, Header, Main, Button } from './styles'
import TerminalSymbol from '../TextSymbol'
import TerminalText from '../TerminalText'
import Input from '../Input'

export default function Terminal () {
  const praiseNumber = Math.floor(Math.random() * 4)

  return (
    <Container>
      <Body>
        <Header>
          <Button color="#FF5F56"/>
          <Button color="#FFBD2E"/>
          <Button color="#27C93F"/>
        </Header>

        <Main>
          <TerminalSymbol/>
          <TerminalText/>
          <Input praiseNumber={praiseNumber}/>
        </Main>
      </Body>
    </Container>
  )
}