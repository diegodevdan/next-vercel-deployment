import React, {FC} from 'react';
import styles from "./MainLayout.module.css";
import Head from "next/head";
import Navbar from "../Navbar";

export const MainLayout:FC = ({children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact page</title>
                <meta name="about" content="about page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <h1>Contact Page</h1>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
};

