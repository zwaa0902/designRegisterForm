import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from '@/styles/GlobalStyles';

const rotate = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

const Spinner = styled.div`
    display: flex;
    justify-content: center;

    &::after {
        content: '';
        width: ${(props) =>
            (props.size && props.theme.font.sizes[props.size]) ||
            props.theme.font.sizes.normal};
        height: ${(props) =>
            (props.size && props.theme.font.sizes[props.size]) ||
            props.theme.font.sizes.normal};
        border: 5px solid #e2e2e2;
        border-top-color: ${(props) => props.theme.colors.black};
        border-radius: 50%;
        animation: ${rotate} 1s ease infinite;
    }
`;

Spinner.propTypes = {
    size: PropTypes.oneOf(Object.keys(theme.font.sizes)),
};

export default Spinner;
