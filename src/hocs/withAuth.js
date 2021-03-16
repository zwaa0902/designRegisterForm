import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import LoadingScreen from '@/components/LoadingScreen';
import { LOGIN_ROUTE } from '@/constants/routes';
import { useAuth } from '@/contexts/Auth';
import UserAPI from '@/libs/api/user';

const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const [loadingUser, setLoadingUser] = useState(true);
        const { user, setUser } = useAuth();
        const router = useRouter();

        useEffect(() => {
            const getUser = async () => {
                try {
                    const me = await UserAPI.me();
                    setUser(me);
                } catch (error) {
                    router.push(LOGIN_ROUTE);
                }
            };

            if (!user) getUser();
        }, []);

        useEffect(() => {
            if (user) setLoadingUser(false);
        }, [user]);

        if (!user || loadingUser) {
            return <LoadingScreen />;
        }

        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

withAuth.propTypes = {
    WrappedComponent: PropTypes.node.isRequired,
};

export default withAuth;
