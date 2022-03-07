import React from 'react';
import {MainLayout} from "../../components/layout/MainLayout";
import Link from "next/link";

export default function Pricing () {
    return (
        <MainLayout>
            <h1 className={'title'}>
                {/*Ir al <a href="/">Home</a>*/}
                Ir a <Link href='/'>HOme</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/index.js</code>
            </p>
        </MainLayout>
    );
};

