import { ArrowDown } from 'lucide-react'
import React from 'react'
import myimage from'../images/my_images.png'


const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center px-4'
    >
      <div className='container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6 text-center md:text-left'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight leading-tight'>
            <span className='block opacity-0 animate-fade-in'>Hello, I'm</span>
            <span className='text-primary opacity-0 animate-fade-in-delay-1'> Varun</span>
            <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Agrawal</span>
          </h1>

          <p className='text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3'>
            Computer Science and Engineering student at NIT Raipur. I'm passionate about solving
            real-world problems through code and continuously exploring new technologies in software
            development. My academic journey has equipped me with a strong foundation in programming,
            data structures, and web development. I'm always eager to take on new challenges that
            help me grow technically and personally. Currently, I'm building projects that reflect my
            skills and curiosity, aiming to make meaningful contributions to the tech world.
          </p>

          <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
            <a href='#projects' className='cosmic-button'>
              View My Work
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center p-4">
            <div className="max-w-md rounded-2xl overflow-hidden shadow-lg">
                <img src={myimage} alt="My Image" className="w-full object-cover" />
            </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
        <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary' />
      </div>
    </section>

    

  )
}

export default HeroSection
