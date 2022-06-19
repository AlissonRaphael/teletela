import LogoFile from '../../assets/logo.png'
import { LogoStyle } from './style'

export default function Logo ({ color }) {
  return <LogoStyle color={color}>
    <img src={LogoFile}/>
  </LogoStyle>
}
