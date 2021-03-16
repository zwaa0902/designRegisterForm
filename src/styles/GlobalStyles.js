import { createGlobalStyle } from 'styled-components';

const theme = {
    font: {
        sizes: {
            normal: '14px',
            big: '15px',
            bigger: '16px',
            small: '13px',
            smaller: '12px',
            tiny: '11px',
        },
        family: {
            normal:
                'Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif',
        },
    },
    spacing: {
        normal: '10px',
        big: '15px',
        bigger: '20px',
        huge: '40px',
        small: '10px',
        smaller: '5px',
        noSpace: '0',
    },
    alignment: {
        horizontalCenter: '0 auto',
        center: 'auto',
    },
    colors: {
        white: 'white',
        background: '#f1f1f1',
        gray: '#767676',
        black: '#242424',
    },
};

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;

export { GlobalStyles, theme };
