import { Briefcase, Code, Download, User } from 'lucide-react'
import React from 'react'

export const AboutSection = () => {
  return (
    <section id='about' className='py-5 px-4 relative'>
      {" "}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary '>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold '>Passionate Web Developer & Tech Learner</h3>

            {/* i should write about my self and keep updating this in future*/}
            <p className='text-muted-foreground'>
              I love to solve challenging problems. I'm full exicited to work on new things and colaborate with other. Always keen to learn something new daily.
            </p>
            <p className='text-muted-foreground'>
              I have learn C++, java, python as programming languages in which i feel comfort in C++ and I also done my DSA in C++.
              Apart from this I have learn MERN stack and have done some projects on these tech stack.  
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>
                Get In Touch 
              </a>
              <a
                href="public/CVpdf/Varun_Agrawal_Resume_JULY.pdf"
                download
                className='px-6 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
              >
                <Download/> Download CV
              </a>


            </div>

          </div>
          <div className='grid grid-cols-1 gap-6 '>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                <Code className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Delevlopment</h4>
                  <p className='text-muted-foreground'>Creating Website with modern Stack such as MERN stack.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                <User className='h-6 w-6 text-primary'/>
                </div>
                 <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Problem Solver</h4>
                  <p className='text-muted-foreground'>Love to solve Challenging real world Problems. </p>
                  
                </div>
              </div>
            </div>
            {/* <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                 <div className='text-left'>
                   <h4 className='font-semibold text-lg'>UI/UX Designer</h4>
                  <p className='text-muted-foreground'>Designing intuitive user iterfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  )
}
