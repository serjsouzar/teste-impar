import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f6f4f6;
    --rebeccaPurple: #663399;
    --indigo: #4B0082;
    --darkGoldenRod: #B8860B
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%; 
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6; //clarear botões e inputs que estiverem desabilitados 
    cursor: not-allowed //alterar o cursor em situações de desabilitados
  }

  .react-modal{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    border-radius: 0.25rem;
    padding: 3rem;
    position: relative;
  }

`