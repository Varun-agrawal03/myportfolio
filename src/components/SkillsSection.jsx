import React, { useState } from 'react'
import { cn } from '../libs/utils';

const skills = [
    
    //languages
    {
        name: "C++",level: 80,category:"languages"
    },
    {
        name: "Java",level: 40,category:"languages"
    },
    {
        name: "python",level: 50,category:"languages"
    },
    //coreSubject
    {
        name: "OOPs",level: 70,category:"coreSubjects"
    },
    {
        name: "Operating System",level: 60,category:"coreSubjects"
    },
    {
        name: "Computer Networks",level: 60,category:"coreSubjects"
    },


    //frontend
    {
        name: "HTML/CSS",level: 95,category:"frontend"
    },
    {
        name: "JavaScript",level: 60,category:"frontend"
    },
    {
        name: "ReactJs",level: 60,category:"frontend"
    },
    {
        name: "TailWind CSS",level: 70,category:"frontend"
    },

    //Backend
    {
        name: "Node.js",level: 65,category:"backend"
    },
    {
        name: "ExpressJs",level: 60,category:"backend"
    },
    {
        name: "MongoDB",level: 60,category:"backend"
    },
    {
        name: "MySql",level: 70,category:"backend"
    },

    //lib
    {
        name: "pandas",level: 70,category:"libraries"
    },
    {
        name: "NumPy",level: 70,category:"libraries"
    },
    {
        name: "Matplotlib",level: 80,category:"libraries"
    },
    {
        name: "Seaborn",level: 80,category:"libraries"
    },
    {
        name: "Streamlit",level: 80,category:"libraries"
    },

    // tools
    {
        name: "Git/GitHub",level: 80,category:"tools"
    },
    {
        name: "VsCode",level: 80,category:"tools"
    },
    {
        name: "Figma",level: 55,category:"tools"
    }

]

const categories = ["all" , "languages" , "coreSubjects" , "frontend" , "backend" , "tools" , "libraries"];

export const SkillsSection = () => {

    const [activeCategory ,setActiveCategory ] = useState("all");

    const filteredSkills = skills.filter(
        (skill)=> activeCategory === "all" ||skill.category === activeCategory
    );
  return (
     <section id='skills' className='py-24 relative bg-secondary/5'>

        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'>Skills</span>
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category,key)=>(
                    <button 
                    key={key} 
                    onClick={()=>setActiveCategory(category)}
                    className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize', 
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bg-secondary"
                    )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    filteredSkills.map((skill , key)=>(
                        <div key={key} className='bg-card p-6 rounded-lg card-hover'> 
                            <div className='text-left mb-4'>
                                <h3 className='font-semibold text-lg'>{skill.name}</h3>
                            </div>
                            <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                            <div className='bg-primary h-2 rounded-full origin-left animate-[glow_1.5s_ease-out]' style={{
                                width: `${skill.level}%`
                            }}/>

                            </div >
                            <div className='text-right mt-1'>
                                <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

     </section>
  )
}
