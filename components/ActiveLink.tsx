import React, {CSSProperties, FC} from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

const styles:CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

interface PropsActiveLink {
    text: string,
    href: string,
}

export const ActiveLink:FC<PropsActiveLink> = ({text, href}) => {

    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? styles : undefined}>{text}</a>
        </Link>
    );
};

