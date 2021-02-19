
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />

<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />

<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />




# Introdução

Meu primeiro projeto em **Next.JS** e em **Styled Components** e trabalhando com **`@media queries` no CSS**!

Foi muita novidade e aprendizado pra um projeto tão simples :rocket:!

Infelizmente não consegui finalizar o teste para a vaga como eu gostaria e ficou faltando algumas coisas, como os testes unitários com a biblioteca **Jest** e alguns detalhes da aplicação como por exemplo o :heavy_multiplication_x: dentro dos inputs ao falhar o login. 


## Considerações e aprendizado

Ao iniciar e fazer todo o setup do projeto em Next com Styled Components, vi que precisamos adicionar uma configuração no  **Babel** e criar um arquivo **_document.js** na pasta **pages** para que nossos estilos do Styled Components sejam renderizados em **Server Side**.

O **Redux** também tem um funcionamento diferente em **Server Side Rendering**, porém não tive tempo para pesquisar sobre.

Quanto a imagem de login, eu estava com dúvidas se utilizava `.svg` ou `.png`, mas acabei optando por `.png` mesmo, pois a imagem em `.svg` estava muito grande e estava causando problemas de performance na aplicação. 
Mesmo tentando utilizar o próprio componente **Image** do **Next.js** que é otimizado para imagens e a converte em **webpack**, não foi o suficiente, então utilizei ela em `.png` mesmo.

## Instalação

Use Yarn ou NPM para instalar os modules e inicializar o projeto.
```bash
yarn install
yarn dev
```
ou
```bash
npm install
npm dev
```


## API
Utilizei o site [mockapi](https://www.mockapi.io/) para reproduzir uma API simples de usuários.

### URL BASE
>https://602db1eb96eaad00176dcb88.mockapi.io/wiser/

#### GET  `users`
Retorna uma **lista** de usuários no modelo 


```json
{
  "id" : 1,
  "email": "email@email.com",
  "password": "senha"
}
```

#### POST  `users`
Enviando um POST em JSON com seu **email** e **password** para o endpoint **users** é possível criar um novo usuário.


```json
{
  "email": "seu_email@email.com",
  "password": "sua_senha
}
```



