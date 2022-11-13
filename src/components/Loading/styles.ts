import styled from 'styled-components'

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;

    img {
        width: 100%;
        max-width: 6rem;
    }
`