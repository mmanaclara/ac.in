import styled from 'styled-components'

export const PageNotFoundContainer = styled.main`
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

    @media (max-width: 912px) {
        flex-direction: column;
        max-height: min(100rem, 100%);
        justify-content: center;
        margin-block: auto;
        text-align: center;
    }
`

export const TextContainer = styled.div`
width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    h1 {
        font-size: 9.6rem;
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
        margin-top: 3.6rem;
        box-shadow: 4px 4px 4px rgba(0,0,0,0.15);

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.2rem;

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

    @media (max-width: 912px) {
        width: 65%;

        h1 {
            font-size: 8rem;
        }

        a {
            align-self: center;
        }
    }

    @media (max-width: 820px) {
        h1 {
            font-size: 7.2rem;
        }
    }

    @media (max-width: 540px) {
        gap: 0;

        h1 {
            font-size: 6rem;
        }

        span {
            font-size: 1.6rem;
            line-height: 2.4rem;
        }

        a {
            padding-block: 1rem; 
            padding-inline: 1.2rem;
            width: 24rem;
            font-size: 1.6rem;
        }
    }
`

export const ImageContainer = styled.div`
    img {
        width: 100%;
        max-width: 34rem;
    }

    @media (max-width: 912px) {
        width: 65%;
    }
`