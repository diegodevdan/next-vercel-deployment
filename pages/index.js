import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Navbar from "../components/Navbar";
import {MainLayout} from "../components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
            <h1 className={'title'}>
                {/*Ir al <a href="/about">About</a>*/}
                Ir a <Link href='/about'>About</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/index.js</code>
            </p>
    </MainLayout>
  )
}
