import styled from 'styled-components'

export const SuccessContainer = styled.main`
    height: 100vh;
    padding-top: 7rem;
    max-width: 1600px;

    display: flex;

    @media (max-width: 545px) {
       height: fit-content;
    }  
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

    @media (max-width: 545px) {
        padding-block: 4.8rem;
    }
`

export const TextContainer = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    h1 {
        font-size: 5.6rem;
    }

    span {
        font-size: 2.2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 3.2rem;

        :nth-child(3) {
            font-size: 1.6rem;
            line-height: 2.4rem;
        }
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
        h1 {
            font-size: 5rem;
        }

        a {
            align-self: center;
        }
    }

    @media (max-width: 545px) {
        width: 65%;

        h1 {
            font-size: 9vw;
        }
    }

    @media (max-width: 375px) {
        a {
            width: 28rem;
        }
    }
`

export const ImageContainer = styled.div`
    width: 45%;

    img {
        width: 100%;
        max-width: 36rem;
    }

    @media (max-width: 912px) {
        width: 65%;
    }

`