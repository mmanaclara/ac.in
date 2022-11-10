import styled from 'styled-components'

export const HomeContainer = styled.main`
    height: 100vh;
    padding-top: 7rem;
    max-width: 1600px;

    display: flex;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: min(118rem, 100%);
    margin-inline: auto;
`

export const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    h1 {
        font-size: 4.8rem;
    }

    span {
        font-size: 2.2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 3.2rem;
    }

    a {
        background: ${props => props.theme['yellow-500']};
        width: 33.4rem;
        border-radius: 4px;
        padding-block: 1.2rem;
        margin-top: 2.4rem;

        display: flex;
        justify-content: center;
        align-items: center;

        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.8rem;
        color: ${props => props.theme['gray-900']};

        transition: all 0.2s;

        :hover {
            background: ${props => props.theme['yellow-700']};
        }
    }
`

export const ImageContainer = styled.div`
    img {
        width: 100%;
        max-width: 49.8rem;
    }
`