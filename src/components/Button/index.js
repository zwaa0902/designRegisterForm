import PropTypes from 'prop-types';

import Spinner from '@/components/Spinner';

import { StyledButton } from './styles';

const Button = ({ loading, disabled, children, ...restProps }) => (
    <StyledButton disabled={disabled || loading} {...restProps}>
        {loading ? <Spinner /> : children}
    </StyledButton>
);

Button.defaultProps = {
    outline: false,
    loading: false,
    disabled: false,
};

Button.propTypes = {
    outline: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Button;
