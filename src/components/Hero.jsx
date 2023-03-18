import { motion } from "framer-motion";

import { styles } from "../styles";
import TypeWriter from "./TypeWriter";

import { AiFillLinkedin, AiFillYoutube, AiFillTwitterCircle, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

const Hero = () => {

    const typeWriter = ["Full Stack Developer", "Web Developer", "Software Engineer", "Android Application Developer"]
    const SOCIAL_ICONS = [
        {
            icon: <AiFillLinkedin size={23} />,
            href: "https://www.linkedin.com"
        },
        {
            icon: <AiFillYoutube size={23} />,
            href: "https://www.youtube.com/"
        },
        {
            icon: <AiFillTwitterCircle size={23} />,
            href: "https://twitter.com/"
        },
        {
            icon: <AiFillGithub size={23} />,
            href: "https://github.com/"
        },
        {
            icon: <AiFillFacebook size={23} />,
            href: "https://www.facebook.com/"
        },
    ]
    const COUNTERS = [
        {
            count: 4,
            text: "Years<br />of Experience"
        },
        {
            count: 48,
            text: "Projects<br />Completed"
        }
    ]

    return (
        <section className={`relative w-full h-screen container mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="container flex items-center relative z-2 mt-1">
                    <div className="flex items-center justify-center flex-col w-[100%]">

                        <img src='/avatar.svg' alt="avatar" className="w-40 h-40" />

                        <h4 className="text-gray-100 mt-8">
                            I'm a
                            <span className="ml-2 font-Nunito text-lg text-[#915EFF] tracking-wide">
                                hassan Ahmed
                            </span>
                        </h4>
                        {/* ==== Type Writer ==== */}
                        <h1 className="mt-0 text-center font-Nunito font-bold w-full mb-8 text-[1.8em] sm:text-[3em]">
                            Hi, I'm
                            <TypeWriter
                                title={typeWriter}
                                className="ml-2"
                            />
                        </h1>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center justify-center w-[200px] px-6 py-2 bg-[#915EFF] text-white font-Nunito rounded-full"
                        >
                            <span className="mr-2">Hire Me</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className='absolute md:bottom-2 bottom-5 left-0 w-full mx-5'>
                <div className="container">
                    <div className='flex justify-between md:flex-row flex-col gap-4 items-center'>
                        {/* ==== left side - Counters ==== */}
                        <div className="flex gap-[80px]">
                            {COUNTERS.map((item, index) => (
                                <div className="flex items-center gap-[20px]" key={index}>
                                    <div>
                                        <h3 className="text-gray-50 font-Nunito font-medium text-[55px]">{item.count}</h3>
                                    </div>
                                    <div>
                                        <p
                                            className='text-[#7C7C7C] font-Nunito font-semibold text-[16px] leading-6'
                                            dangerouslySetInnerHTML={{ __html: item.text }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* ==== Right side - social icons ==== */}
                        <div className='flex gap-5 items-center text-white'>
                            {SOCIAL_ICONS.map((icon, index) => (
                                <a href={icon.href} key={index} target="_blank" rel="noreferrer" className="text-white duration-200 hover:text-[#915EFF]">
                                    {icon.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;