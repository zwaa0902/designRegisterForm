import styled from 'styled-components';

export const Wrapper = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 48px;

    border: 0px;
    font-size: inherit;
    box-sizing: border-box;
`;

export const StyledInput = styled.input`
    display: block;
    position: relative;
    width: 100%;
    height: 48px;

    border: 0px;
    font-size: inherit;
    box-sizing: border-box;

    border: 2px solid ${(props) => props.theme.colors.gray};
    padding: 16px;

    transition: 0.4s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;
    -moz-transition: 0.4s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;
    -webkit-transition: 0.4s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;

    &:focus {
        background-color: ${(props) => props.theme.colors.white};
        border: 2px solid ${(props) => props.theme.colors.black};
        outline: none;
    }

    &:not([value='']) {
        border: 2px solid ${(props) => props.theme.colors.black};
    }

    & ~ label {
        font-size: 16px;
        position: absolute;
        display: inline-block;
        left: 16px;
        top: 14px;
        pointer-events: none;
        z-index: 1;
        color: ${(props) => props.theme.colors.gray};
        opacity: 0.5;

        transition: 0.4s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;
        -moz-transition: 0.4s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;
        -webkit-transition: 0.4s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;
    }

    &:focus ~ label,
    &:not([value='']) ~ label {
        top: -10px;
        left: 8px;
        font-size: 14px;
        opacity: 1;
        padding: 1px 8px;
        border-radius: 2px;
    }

    &:not([value='']) ~ label {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};
    }

    &:focus ~ label {
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.white};
    }
`;
