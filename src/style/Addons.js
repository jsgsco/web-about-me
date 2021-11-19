import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 70px;
    margin-top: ${props => props.mt ? '100px' : '0'};

    @media screen and (max-width: 960px) {
        margin-top: 100px;
    }

`

export const SubTitle = styled.h2`
    font-size: 35px;
    margin-top: ${props => props.mt ? '40px' : '0'};
`

export const Text = styled.p`
    width: 50%;
    font-size: 24px;
    margin-top: ${props => props.mt ? '25px' : '0'};
    font-weight: 100;
    letter-spacing: 1px;
    word-spacing: 3px;

    @media screen and (max-width: 1450px) {
        width: 65%;
    }

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

`

export const Highlight = styled.a`
    cursor: pointer;
    border-bottom: 4px solid #163359;
    text-decoration: none;
    transition: 1s all;

    :hover {
        color: black;
    }
`

export const Icons = styled.div`
    margin-top: 25px;
    font-size: 28px;

    svg {
        margin-right: 10px;
    }
`

export const Dir = styled.a`
    color: black;
    text-decoration: none;
`