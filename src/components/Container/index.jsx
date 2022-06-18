import { ContainerStyle } from './style'
import Input from '../Input'
import Logo from '../Logo'

export default function Container () {
  const praiseNumber = Math.floor(Math.random() * 4)

  return (
    <ContainerStyle>
      <Logo/>
      <Input praiseNumber={praiseNumber}/>
    </ContainerStyle>
  )
}
