import styled from 'styled-components'

export const HeaderContainer = styled.header`
    a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;

        padding-inline: 3.6rem;
        height: 7rem;
        color: ${props => props.theme['gray-700']};

        span {
            font-weight: bold;
            font-size: 1.8rem;
        }

        position: fixed;

        :focus {
            box-shadow: 0 0 0 0 transparent;
        }
    }
`