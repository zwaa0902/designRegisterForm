import PropTypes from 'prop-types';

import Container from '@/components/Container';

import { Content, Footer } from './styles';

const Layout = ({ children }) => {
    return (
        <Container>
            <Content>{children}</Content>
            <Footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <img src="/vercel.svg" alt="Vercel Logo" />
                </a>
            </Footer>
        </Container>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
