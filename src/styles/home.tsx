import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageHome = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-image: linear-gradient(
      0deg,
      #130525 0%,
      rgba(105, 57, 153, 0) 100%
    ),
    url('/imgLogin.png');
  background-size: cover;
  background-position: center center;

  /* iPad */
  @media (max-width: 768px) {
    background-image: linear-gradient(
        0deg,
        #130525 0%,
        rgba(105, 57, 153, 0) 100%
      ),
      url('/ipadLogin.png');
  }

  /* Mobile */
  @media (max-width: 425px) {
    position: absolute;
    background-image: linear-gradient(
        0deg,
        #130525 40%,
        rgba(105, 57, 153, 0) 100%
      ),
      url('/mobileLogin.png');
    background-size: contain;
    background-position: 0% 0%;
  }
`
