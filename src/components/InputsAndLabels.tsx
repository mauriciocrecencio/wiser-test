import React from 'react'
import { Input, ErrorText } from '../styles/elements'

const InputsAndLabels = ({ hasError, user, setUser }) => {
  return (
    <>
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
    </>
  )
}

export default InputsAndLabels
