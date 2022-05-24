import { GlobalStyle } from "./styles/global"
import Input from './components/Input'

export default function App () {
  const praiseNumber = Math.floor(Math.random() * 4)

  return (
    <>
      <Input praiseNumber={praiseNumber}/>
      <GlobalStyle/>
    </>
  )
}
