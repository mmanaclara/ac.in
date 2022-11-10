import { createGlobalStyle } from 'styled-components'

import bgPattern from '../assets/bg-pattern.png'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
        border-radius: 4px;
    }

    body {
        background: ${(props) => props.theme['gray-100']} url(${bgPattern}) no-repeat;
        color: ${(props) => props.theme['gray-700']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.6rem;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`