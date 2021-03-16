import Head from 'next/head';

import DangKyMoi from '@/containers/DangKyMoi';

const DangKyMoiForm = () => {
    return (
        <>
            <Head>
                <title>Đăng ký mới</title>
            </Head>
            <DangKyMoi />
        </>
    );
};

export default DangKyMoiForm;
