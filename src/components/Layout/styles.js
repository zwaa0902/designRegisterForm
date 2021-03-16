import styled from 'styled-components';

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin-left: 0.5rem;
        height: 1em;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
