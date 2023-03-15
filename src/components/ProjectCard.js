import React from "react";
import { motion } from "framer-motion";

import { github } from "../assets";
import { fadeIn } from "../utils/motion";


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    link,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 mb-2 text-secondary text-[14px]'>{description}</p>
                    <a className='green-text-gradient text-[17px] font-semibold' href={link} target='_blank' rel="noreferrer">Live Demo</a>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard