import styled, {css} from 'styled-components'
import xInput from '../assets/x.svg'

export const Title = styled.p`
  color: #383e71;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  @media (max-width: 425px) {
    font-size: 24px;
line-height: 32px;
margin-top: 34px
  }
 
`
export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #989fdb;
  margin-top: 18px;
  @media (max-width: 425px) {
    span {
      display: none;
    }
    ::after{
      content: "Para acessar a plataforma, faça seu login.";
    }
    font-size: 12px;
line-height: 20px;

text-align: center;

color: #989FDB;
  }
  
`
export const Input = styled.input.attrs(({ type }) => ({
  type: type || 'text'
}))`
  height: 5%;
  width: 100%;
  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;
  padding-left: 8px;
  input[type="button"]{
 -moz-appearance: none;
 -webkit-appearance: none;
 appearance: none;
}
  @media (max-width: 425px) {
    width: 80%;
    height: 80px;
  }
  ${props => props.hasError === true &&  css`
    border-color: #FF377F;
    background: url(${xInput})
    background-position: 10px center;
    background-repeat: no-repeat;

  ` }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #989FDB
;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #989FDB

}
:-ms-input-placeholder { /* IE 10+ */
  color: #989FDB

}
:-moz-placeholder { /* Firefox 18- */
  color: #989FDB

}
`

export const Button = styled.button`
  height: 48px;
  width: 100% ;
  margin-top: 26px;
  background: linear-gradient(270deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;
  border: none;
  color: #ffff;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  :hover {
    box-shadow: 0px 10px 25px #989FDB
;
  }
  @media (max-width: 425px) {
    position: relative;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
box-shadow: none;
bottom: -21%;
border-radius: 8px;
width: 60%;
height: 100px;
  }
`

export const RegisterLink = styled.p`
text-align: center;
margin-top: 30px;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
text-align: center;
color: #989FDB;
@media (max-width: 425px) {
  color: white;
position: relative;
    bottom: -16%;
}
`

export const ErrorText = styled.p`
font-size: 12px;
line-height: 48px;
display: flex;
align-items: center;
color: #FF377F;

`