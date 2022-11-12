import styled from 'styled-components'

export const HomeContainer = styled.main`
    height: 100vh;
    padding-top: 7rem;
    max-width: 1600px;

    display: flex;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    max-width: min(118rem, 100%);
    margin-inline: auto;

    @media (max-width: 912px) {
        flex-direction: column;
        max-height: min(100rem, 100%);
        justify-content: center;
        margin-block: auto;
        text-align: center;
    }
`

export const TextContainer = styled.div`
    width: 45%;
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
        box-shadow: 4px 4px 4px rgba(0,0,0,0.15);

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
            transform: translateY(1.1);
        }
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 4rem;
        }
    }

    @media (max-width: 912px) {
        width: 65%;

        h1 {
            font-size: 4.8rem;
        }

        a {
            align-self: center;
        }
    }

    @media (max-width: 820px) {
        h1 {
            font-size: 4rem;
        }
    }

    @media (max-width: 540px) {
        gap: 1.8rem;

        h1 {
            font-size: 3rem;
        }
    }

    @media (max-width: 540px) {
        gap: 1.6rem;

        h1 {
            font-size: 2.4rem;
        }

        span {
            font-size: 1.6rem;
            line-height: 2.4rem;
        }

        a {
            padding-block: 1rem; 
            width: 85%;
            font-size: 1.6rem;
        }
    }
`

export const ImageContainer = styled.div`
    width: 45%;

    img {
        width: 100%;
        max-width: 49.8rem;
    }

    @media (max-width: 912px) {
        width: 65%;
    }
`