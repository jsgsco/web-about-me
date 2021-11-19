import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.fluid ? '100%' : '80%'};
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;

    @media screen and (max-width: 960px) {
        width: ${props => props.fluid ? '100%' : '90%'};
    }
`