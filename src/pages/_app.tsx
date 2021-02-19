import GlobalStyle from '../styles/global'
import { storeWrapper } from '../../store/index'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default storeWrapper.withRedux(MyApp)
