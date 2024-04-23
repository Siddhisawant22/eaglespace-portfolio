import Link from 'next/link';

import { socialLinks } from '@/lib/data';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className='w-full bg-foreground py-10 mt-10'>
            <h1 className='text-background text-center select-none'>
                <span className='font-bold'>Contact</span>
            </h1>
            <ul className='container flex justify-center items-center gap-8 mx-auto p-8'>
                {socialLinks.map(social => (
                    <li key={social.title}>
                        <Link
                            href={social.link}
                            target='_blank'
                            className='text-background hover:text-teal-500'
                        >
                            <social.icon size={30} />
                        </Link>
                    </li>
                ))}
            </ul>

            <h1 className='text-background text-center select-none'>
                Copyright @ {year}; Designed by <span className='font-bold'>Vishal Kadam</span>
            </h1>
        </div>
    );
}
