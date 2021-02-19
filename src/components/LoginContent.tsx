import React, { useState } from 'react'
import { User } from '../types/user'
import { Button, RegisterLink } from '../styles/elements'
import { ContainerForm, Form } from '../styles/containers'
import API from '../utils/api'
import TitleAndSubtitle from './TitleAndSubTitle'
import InputsAndLabels from './InputsAndLabels'

const LoginContent = () => {
  const [user, setUser] = useState<User>({
    email: null,
    password: null
  })
  const [isDisable, setIsDisable] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)

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
  return (
    <ContainerForm isDisable={isDisable}>
      <Form>
        <TitleAndSubtitle />
        <InputsAndLabels hasError={hasError} user={user} setUser={setUser} />
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
