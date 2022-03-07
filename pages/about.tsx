import Link from 'next/link'
import {MainLayout} from "../components/layout/MainLayout";
import {DarkLayout} from "../components/layout/DarkLayout";
import {JSXElement} from "@typescript-eslint/types/dist/ast-spec";

export default function AboutPage() {
    return (
        <>
            <h1 className={'title'}>
                {/*Ir al <a href="/">Home</a>*/}
                Ir a <Link href='/'>Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/index.js</code>
            </p>
        </>

    )
}


AboutPage.getLayout = function getLayout(page: JSXElement){
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}