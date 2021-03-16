import Head from 'next/head';

import Login from '@/containers/Login';

const LoginPage = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Login />
        </>
    );
};

export default LoginPage;
