import styled from 'styled-components'

export const ContainerImg = styled.div`
display: flex;
  width: 56%;
  height: 100vh;
  @media (max-width: 768px) {
    width: 42%;
  }
  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
  }
`
export const ContainerForm = styled.div`
  width: 44%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.isDisable ? '50%' : '')};
  pointer-events: ${props => (props.isDisable ? 'none' : '')};
  margin: 100px 0;
  @media (max-width: 768px) {
    width: 58%;
  }
  @media (max-width: 425px) {
    position: absolute;
    background-color: #FAF5FF;
    width: 80%;
    height: 400px;
    border-radius: 8px;
  }
  
`

export const Form = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  label {
    color: #383e71;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    padding: 8px;
  @media (max-width: 425px) {
    
    align-self: flex-start;
    padding: 2px 40px; 
  }
  }
  @media (max-width: 1400px) {
    width: 58%;
  }
  @media (max-width: 1150px) {
    width: 62%;
  }
  @media (max-width: 768px) {
    width: 68%;
  }
  /* Mobile */
  @media (max-width: 425px) {
    align-items: center;
    width: 100%;
    height: 100%;
    
    * {
      margin: none;
    }
  }
`

