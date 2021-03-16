import Link from 'next/link';

import { DANGKYMOI_ROUTE } from '@/constants/routes';

import { Card, Description, Grid, Title, Wrapper } from './styles';

const Home = () => {
    return (
        <Wrapper>
            <Title>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </Title>
            <Description>
                Get started by editing <code>pages/index.js</code> or{' '}
                <Link href={DANGKYMOI_ROUTE}>go to the Rigister Form</Link>
            </Description>
            <Grid>
                <Card href="https://nextjs.org/docs">
                    <h3>Documentation &rarr;</h3>
                    <p>
                        Find in-depth information about Next.js features and
                        API.
                    </p>
                </Card>

                <Card href="https://nextjs.org/learn">
                    <h3>Learn &rarr;</h3>
                    <p>
                        Learn about Next.js in an interactive course with
                        quizzes!
                    </p>
                </Card>

                <Card href="https://github.com/vercel/next.js/tree/master/examples">
                    <h3>Examples &rarr;</h3>
                    <p>
                        Discover and deploy boilerplate example Next.js
                        projects.
                    </p>
                </Card>

                <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                    <h3>Deploy &rarr;</h3>
                    <p>
                        Instantly deploy your Next.js site to a public URL with
                        Vercel.
                    </p>
                </Card>
            </Grid>
        </Wrapper>
    );
};

export default Home;
