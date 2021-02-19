import Head from 'next/head'
import LoginContent from '../components/LoginContent/LoginContent'
import { Wrapper, ImageHome } from '../styles/home'
import { ContainerImg } from '../styles/containers'

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
