import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/globals.css';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

import { Button } from '@/components/ui/button';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { embedLinks } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Home',
};

export default function Home() {
    return (
        <section className='container mx-auto mt-5'>
            <div className='w-full lg:h-screen lg:flex justify-between items-center'>
                <div className='lg:w-1/2 h-full flex flex-col justify-center p-5'>
                    <div>
                        <svg className='job-position'>
                            <text
                                x='50%'
                                y='50%'
                                dy='.35em'
                                textAnchor='middle'
                                className='text-2xl md:text-4xl xl:text-4xl text-center'
                            >
                                DIGITAL MARKETING - SEO,SMO
                            </text>
                        </svg>
                    </div>

                    <article className='text-center sm:text-md'>
                        I&apos;m <span className='font-bold'>Siddhika Sawant</span> Master SEO and SMO specialist. I optimize websites for search engines and social media to increase online visibility and engagement. Explore my portfolio to see my expertise in action.
                    </article>

                    <div className='flex justify-center items-center gap-4 mt-10'>
                        <Button
                            size={'lg'}
                            asChild
                        >
                            <Link href={'/about'}>About Me</Link>
                        </Button>
                        <Button
                            variant={'outline'}
                            size={'lg'}
                            asChild
                        >
                            <Link
                                href={'/my-resume.pdf'}
                                target='_blank'
                                download={true}
                            >
                                Download Resume
                            </Link>
                        </Button>
                    </div>
                </div>
                <CardContainer className='inter-var'>
                    <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
                        <CardItem
                            translateZ='50'
                            className='text-xl font-bold text-neutral-600 dark:text-white'
                        >
                            DIGITAL MARKETING - SEO,SMO
                        </CardItem>
                        <CardItem
                            as='p'
                            translateZ='60'
                            className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
                        >
                            I&apos;m <span className='font-bold'>Siddhika Sawant</span>
                        </CardItem>
                        <CardItem
                            translateZ='100'
                            className='w-full mt-4'
                        >
                            <Image
                                src='/my-image.jpg'
                                height='1000'
                                width='1000'
                                className='h-70 w-50 object-cover rounded-xl group-hover/card:shadow-xl'
                                alt='thumbnail'
                            />
                        </CardItem>
                        <div className='flex justify-between items-center mt-20'>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href={'/about'}
                                className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
                            >
                                Contact Me →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href={'/projects'}
                                className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
                            >
                                Projects
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

        </section>
    );
}
