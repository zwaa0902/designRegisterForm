import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 300px;
        display: grid;
        grid-row-gap: 1rem;
    }
    //     filter: blur(2px);
    //   -webkit-filter: blur(2px);
`;

export const Title = styled.h3`
    a {
        color: #fff;
        text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: underline;
    }

    margin: 0;
    font-size: 1.3rem;
    color: #fff;
    text-align: center;
`;

export const Header2 = styled.h4`
    a {
        color: #0f284d;
        text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: underline;
    }

    margin: 0;
    font-size: 1.3rem;
    color: #0f284d;
    text-align: center;
`;
export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`;
