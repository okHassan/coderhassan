import React from "react";

import { github } from "../assets";

const ProjectCard = ({
    name,
    description,
    tags,
    image,
    link,
    source_code_link,
}) => {
    return (
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
                <h3 className='text-white font-bold text-[24px] mb-3'>{name}</h3>
                <a className='green-text-gradient text-[17px] font-semibold border-b border-[#38ef7d]' href={link} target='_blank' rel="noreferrer">Live Demo</a>
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
    );
};

export default ProjectCard