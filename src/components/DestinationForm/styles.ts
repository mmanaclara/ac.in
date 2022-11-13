import styled from 'styled-components'

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > span {
        font-family: Roboto, sans-serif;
        margin-top: 2.4rem;
    }
`

export const InputField = styled.div`
    border: 1px solid ${(props) => props.theme['gray-500']};
    border-radius: 4px;
    padding-left: 1.2rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 33.5rem;

    :focus-within {
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};  

        svg {
            color: ${(props) => props.theme['yellow-500']};
        }
    }

    input {
        background: transparent;
        border: 0;  
        width: 30rem;
        color: ${(props) => props.theme['gray-700']};

        ::placeholder {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.4rem;
            color: ${(props) => props.theme['gray-500']};
        }
        
        :focus {
            box-shadow: 0 0 0 0 transparent;
        }
    }
`

export const SendUserInfoButton = styled.button`
    background-color: ${(props) => props.theme['yellow-500']};
    padding: 0.8rem;
    border: 0;
    border-radius: 4px;
    margin-top: 2.4rem;
    width: 100%;
    box-shadow: 2px 3px 4px rgba(0,0,0,0.15);

    text-transform: uppercase;
    color: ${(props) => props.theme['gray-900']};
    font-weight: 600;
    
    display: flex;
    justify-content: center;
    align-items: center;

    :disabled {
        opacity: 0.8;
        cursor: not-allowed;
    }

    :hover:not(:disabled) {
        background-color: ${(props) => props.theme['yellow-700']};
    }

    @media (width: 360px) {
        width: 95%;
        margin-inline: auto;
    }
`