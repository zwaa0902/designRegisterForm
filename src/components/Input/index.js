import PropTypes from 'prop-types';

import { StyledInput, Wrapper } from './styles';

const Input = ({ label, placeholder, ...restProps }) => (
    <Wrapper>
        <StyledInput placeholder={label ? '' : placeholder} {...restProps} />
        {label && <label htmlFor={restProps.id}>{label}</label>}
    </Wrapper>
);

Input.defaultProps = {
    label: '',
    placeholder: '',
};

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
