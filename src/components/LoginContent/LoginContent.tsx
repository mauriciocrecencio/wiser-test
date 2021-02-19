import React, { useState } from 'react'
import { User } from '../../types/user'
import {
  Title,
  SubTitle,
  Input,
  Button,
  RegisterLink,
  ErrorText
} from '../../styles/elements'
import { ContainerForm, Form } from '../../styles/containers'
import { useSelector, useDispatch } from 'react-redux'
import API from '../../utils/api'
import { userUpdate } from '../../../store/actions/user/index'

const LoginContent = () => {
  const [user, setUser] = useState<User>({
    email: null,
    password: null
  })
  const [isDisable, setIsDisable] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const { email, password } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const updateUser = () => {
    dispatch(userUpdate(user))
  }
  const handleDisableClickOnThePage = bool => {
    setIsDisable(bool)
  }

  const checkAuthUser = (users: User[]) => {
    if (
      users.find(
        element =>
          element.email === user.email && element.password === user.password
      )
    ) {
      return true
    }
    return false
  }

  const login = async () => {
    handleDisableClickOnThePage(true)
    const users: User[] = await API.get('/users').then(res => res.data)
    if (checkAuthUser(users)) {
      setHasError(false)
      handleDisableClickOnThePage(false)
      window.alert('Logado com sucesso!')
    } else {
      setHasError(true)
      handleDisableClickOnThePage(false)
    }
  }
  console.log(user)
  return (
    <ContainerForm isDisable={isDisable}>
      <Form>
        <Title>
          Olá, seja
          <br /> bem-vindo!
        </Title>
        <SubTitle>
          <span>
            Para acessar a plataforma, <br />
            faça seu login.
          </span>
        </SubTitle>
        <label style={{ marginTop: '40px' }} htmlFor="">
          E-MAIL
        </label>
        <Input
          hasError={hasError}
          placeholder="user.name@mail.com"
          onChange={e => setUser({ ...user, email: e.target.value })}
        />

        <label style={{ marginTop: '18px' }} htmlFor="">
          SENHA
        </label>
        <Input
          hasError={hasError}
          placeholder="*******"
          onChange={e => setUser({ ...user, password: e.target.value })}
          type="password"
        />
        {hasError && (
          <ErrorText> Seu e-mail e/ou senha estão incorretos;</ErrorText>
        )}

        {hasError && <ErrorText> </ErrorText>}
        <Button onClick={() => login()}> ENTRAR </Button>
        <RegisterLink>
          Esqueceu seu login ou senha?
          <br /> Clique <a href="">aqui</a>
        </RegisterLink>
      </Form>
    </ContainerForm>
  )
}

export default LoginContent
