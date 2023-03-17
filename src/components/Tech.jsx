import React from "react";

import { technologies } from "../constants";

function SkillProgress({ name, parentage, color }) {
    return (
        <div className="flex flex-col w-full sm:w-[48%] md:w-[30%] mb-6">
            <div className="flex gap-10 justify-between items-center">
                <h5 className="text-gray-200 font-Nunito font-bold">{name}</h5>
                <p className="text-gray-400 font-Nunito font-bold">{parentage}%</p>
            </div>
            {/* ProgressBar */}
            <div className="w-full bg-[#D9D9D9] rounded-full h-[8px] mb-4 dark:bg-gray-700 mt-1 relative">
                <div
                    className="h-[8px] rounded-full absolute top-0 shim-red"
                    style={{
                        width: `${parentage}%`,
                        backgroundColor: `${color}`
                    }}
                ></div>
            </div>
        </div>
    )
}

const Tech = () => {
    return (
        <div className='container mx-auto flex flex-row flex-wrap justify-center gap-10'>
            <div className="mt-14">
                <div className="flex flex-wrap justify-between">
                    {technologies.map((skill, index) => (
                        <SkillProgress key={index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tech