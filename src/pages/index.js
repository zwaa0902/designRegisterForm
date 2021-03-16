import Head from 'next/head';

import Home from '@/containers/Home';
import Layout from '@/components/Layout';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Layout>
                <Home />
            </Layout>
        </>
    );
};

export default HomePage;
