import LogoFile from '../../assets/logo.png'
import { LogoStyle } from './style'

export default function Logo () {
  return <LogoStyle>
    <img src={LogoFile}/>
  </LogoStyle>
}
