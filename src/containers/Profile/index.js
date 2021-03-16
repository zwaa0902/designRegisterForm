import Button from '@/components/Button';
import { useAuth } from '@/contexts/Auth';
import AuthAPI from '@/libs/api/auth';

import { Title, Wrapper } from './styles';

const Profile = () => {
    const { user, setUser } = useAuth();

    const handleLogout = () => {
        setUser(undefined);
        AuthAPI.logout();
    };

    return (
        <Wrapper>
            <Title>Hello {user?.username}!</Title>
            <Button outline onClick={handleLogout}>
                Logout
            </Button>
        </Wrapper>
    );
};

export default Profile;
