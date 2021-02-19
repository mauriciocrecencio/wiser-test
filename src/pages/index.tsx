import Head from 'next/head'
import { Wrapper, ImageHome } from '../styles/home'
import { ContainerImg } from '../styles/containers'
import LoginContent from '../components/LoginContent'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Wiser!</title>
      </Head>
      <main>
        <Wrapper>
          <ContainerImg>
            <ImageHome />
          </ContainerImg>
          <LoginContent />
        </Wrapper>
      </main>
    </div>
  )
}

export default Home
