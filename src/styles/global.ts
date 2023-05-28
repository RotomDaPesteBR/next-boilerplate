import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
    }

    ::-webkit-scrollbar-thumb {
    }

    ::-webkit-scrollbar-track {
    }

  }

  body {
    font: 400 1rem 'Montserrat', sans-serif;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.background};
  }

  img{
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  html {
  }

`;
