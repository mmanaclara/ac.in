import styled from 'styled-components'

export const DestinationContainer = styled.main`
    height: 100vh;
    max-width: 1600px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`

export const Wrapper = styled.div`
    width: 50%;

    @media (max-width: 820px) {
        width: 100%;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;

    width: 33.5rem;
    margin-inline: auto;

    header {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-self: flex-start;

        h2 {
            display: flex;
            align-items: center;
            gap: 1.2rem;
            font-size: 2.4rem;
            align-self: flex-start;
        }

        span {
            font-family: Roboto, sans-serif;
        }
    }
`

export const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
        width: 100%;
    }

    @media (max-width: 820px) {
        display: none;
    }
`