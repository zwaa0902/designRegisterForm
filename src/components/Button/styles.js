import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    display: block;
    position: relative;
    width: 100%;
    height: 48px;

    border: 0px;
    font-size: inherit;
    box-sizing: border-box;

    cursor: pointer;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};

    transition: 0.2s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;
    -moz-transition: 0.2s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;
    -webkit-transition: 0.2s cubic-bezier(0.65, -0.32, 0.38, 1.23) all;

    ${({ disabled }) =>
        disabled
            ? css`
                  cursor: not-allowed;
              `
            : css`
                  &:hover,
                  &:active {
                      background-color: black;
                      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                  }
              `}}

    &:focus {
        outline: none;
    }

    ${({ outline }) =>
        outline &&
        css`
            border: 2px solid ${(props) => props.theme.colors.black};
            background-color: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.black};

            &:hover,
            &:active {
                border-color: black;
                color: ${(props) => props.theme.colors.white};
            }
        `}
`;
