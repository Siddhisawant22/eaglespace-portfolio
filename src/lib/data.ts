import { FaGithub, FaInstagram, FaLinkedin, FaArtstation, FaYoutube, FaDocker } from 'react-icons/fa';
import {
    SiGumroad,
    SiAutodeskmaya,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobeindesign,
    SiAdobepremierepro,
    SiHoudini,
    SiBlender,
    SiKatana,
    SiKubernetes,
    SiFramer,
    SiGitlab,
} from 'react-icons/si';

import {
    TbBrandTypescript,
    TbBrandReact,
    TbBrandNodejs,
    TbBrandPrisma,
    TbBrandTailwind,
    TbBrandNextjs,
    TbBrandFigma,
    TbBrandPython,
    TbBrandGithub,
    TbBrandVscode,
} from 'react-icons/tb';
import { SiPostgresql, SiPostman, SiLinux, SiShadcnui, SiPycharm, SiNextra } from 'react-icons/si';
import { title } from 'process';

export const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Skills', link: '/skills' },
    { title: 'Projects', link: '/projects' },
] as const;

export const socialLinks = [
    { title: 'youtube', link: 'https://youtu.be/B815Ue4bPxU', icon: FaYoutube },
    { title: 'linkedIn', link: 'https://www.linkedin.com/in/vishal-kadam-9ba6a839', icon: FaLinkedin },
    { title: 'github', link: 'https://github.com/vishalkadam7', icon: FaGithub },
    { title: 'instagram', link: 'https://www.instagram.com/vishal_kadam_0407', icon: FaInstagram },
    { title: 'artstation', link: 'https://vishalkadam.artstation.com', icon: FaArtstation },
    { title: 'gumroad', link: 'https://vishalkadam.gumroad.com', icon: SiGumroad },
] as const;

export const educations = [
    { school: 'Nalanda Degree College (K.U.Warangal) | March / April 2014', courses: ['B.SC Computers'] },
    { school: 'Narayana Junior College | June - 2009 ', courses: ['Board of Intermediate Education (MPC)'] },
    { school: 'St. Joseph’s Convent High School | March - 2007', courses: ['SSC Board of Secondary Education'] },
] as const;

export const technicalQualifications = [
    { school: 'MPC Academy ( Course of study in Assets ) | Mar 2017 - May 2017', courses: ['B.SC Computers'] },
    { school: 'Arena Multimedia | Nov 2014 - Feb 2017', courses: ['Arena Animation International Program'] },
    { school: 'Jetking Infotrain Ltd | Mar 2012 - Mar 2013', courses: ['Hardware and Networking course'] },
] as const;

export const experience = [
    { school: 'Framestore | January 2023 - April 2024', courses: ['Modeller'] },
    { school: 'Double Negative ( DNEG ) | November 2021 - January 2023', courses: ['Environment Generalist TD'] },
    {
        school: 'Moving Picture Company ( MPC film ) | March 2017 - Sept 2021',
        courses: [
            'Asset Artist - (Environment Artist)',
            'Worked on large env assets and using optimized workflows',
            'Helped artists identify issues and guide to solve them',
            'Troubleshooting Maya issues. Introducing out of the pipeline solutions. ',
        ],
    },
    {
        school: 'KW Consulting Pvt. Ltd | June 2013 - Oct 2014',
        courses: [
            'Technical Associate in the Project of “Unique Identification Authority of India (UIDAI - Aadhaar)',
            'Installation, Configuration, Application Maintenance and Troubleshooting.',
            'Enterprise Application Deployment and Management.',
            'Technical assistance in monitoring through backup/restore, upgrades, failover, and recovery.',
            'Team Supervision and Performance Management.',
            'Desktop and Laptop Maintenance and Troubleshooting (Windows, Linux).',
            'Providing technical support to clients via email, live chat, phone or On-site.',
        ],
    },
    {
        school: 'Micro Technologies (Part Time) | May 2012 - May 2013',
        courses: [
            'Hardware Engineer',
            'Computer Hardware Troubleshooting · Hardware Installation · System Administration · Retail Sales · Customer Service',
        ],
    },
] as const;

export const skills = [
    {
        title: 'Software & Tools',
        lists: [
            { title: 'Maya', icon: SiAutodeskmaya },
            { title: 'SideFX Houdini', icon: SiHoudini },
            { title: 'Photoshop', icon: SiAdobephotoshop },
            { title: 'Illustrator', icon: SiAdobeillustrator },
            { title: 'InDesign', icon: SiAdobeindesign },
            { title: 'Python', icon: TbBrandPython },
            { title: 'Blender', icon: SiBlender },
            { title: 'Katana', icon: SiKatana },
            { title: 'Premiere Pro', icon: SiAdobepremierepro },
        ],
    },
    {
        title: 'IDE & Tools',
        lists: [
            { title: 'VsCode', icon: TbBrandVscode },
            { title: 'Pycharm Community Edition', icon: SiPycharm },
            { title: 'Postman', icon: SiPostman },
            { title: 'Linux', icon: SiLinux },
            { title: 'Github', icon: TbBrandGithub },
        ],
    },
    {
        title: 'Current Learning & used in few Projects',
        lists: [
            { title: 'Node.js', icon: TbBrandNodejs },
            { title: 'Next.js', icon: TbBrandNextjs },
            { title: 'Python', icon: TbBrandPython },
            { title: 'Docker', icon: FaDocker },
            { title: 'Kubernetes', icon: SiKubernetes },
            { title: 'Postgresql', icon: SiPostgresql },
            { title: 'Prisma', icon: TbBrandPrisma },
            { title: 'Gitlab', icon: SiGitlab },
            { title: 'TypeScript', icon: TbBrandTypescript },
            { title: 'React', icon: TbBrandReact },
            { title: 'TailwindCSS', icon: TbBrandTailwind },
            { title: 'Nextra', icon: SiNextra },
            { title: 'Figma', icon: TbBrandFigma },
            { title: 'Framer', icon: SiFramer },
        ],
    },
] as const;

export const tags = [
    { title: 'OpenSource', link: 'oss' },
    { title: 'HTML', link: 'html' },
    { title: 'CSS', link: 'css' },
    { title: 'JavaScript', link: 'javascript' },
    { title: 'TypeScript', link: 'typescript' },
    { title: 'Next.js', link: 'next.js' },
    { title: 'React', link: 'react' },
    { title: 'Python', link: 'tailwindcss' },
];

export const projects = [
    {
        title: 'vops-workspace',
        image: '/projects/vops-workspace.png',
        link: 'https://vishops.vercel.app',
        sourceCode: 'https://github.com/vishalkadam7/vops-workspace',
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'vops-workspace',
        image: '/projects/vops-workspace.png',
        link: 'https://vishops.vercel.app',
        sourceCode: null,
        tag: ['HTML', 'CSS', 'JavaScript'],
    },
] as const;
