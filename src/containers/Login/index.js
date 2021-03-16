import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { HOME_ROUTE } from '@/constants/routes';
import { useAuth } from '@/contexts/Auth';
import AuthAPI from '@/libs/api/auth';
import UserAPI from '@/libs/api/user';

import { Wrapper } from './styles';

const Login = () => {
    const { setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);

        try {
            await AuthAPI.login(email, password);
            const me = await UserAPI.me();
            setUser(me);
            router.push(HOME_ROUTE);
        } catch (error) {
            alert('Identifier or password invalid.');
        }

        setLoading(false);
    };

    const handleChange = (event) => {
        if (event.target.id === 'email') {
            setEmail(event.target.value);
        } else if (event.target.id === 'password') {
            setPassword(event.target.value);
        }
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" loading={loading}>
                    Login
                </Button>
            </form>
        </Wrapper>
    );
};

export default Login;
