import { ResponseStyle, TextStyle } from './styles'

export default function Response ({ response }) {
  return (
    <ResponseStyle
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: 200 }}
      transition={{ duration: 1.5, type: 'spring' }}
    >
      <TextStyle>
        {response}
      </TextStyle>
    </ResponseStyle>
  )
}
