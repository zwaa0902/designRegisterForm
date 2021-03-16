import Head from 'next/head';

import Layout from '@/components/Layout';
import Profile from '@/containers/Profile';
import withAuth from '@/hocs/withAuth';

const ProfilePage = () => {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <Layout>
                <Profile />
            </Layout>
        </>
    );
};

export default withAuth(ProfilePage);
