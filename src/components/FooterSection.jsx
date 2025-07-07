import { ArrowUp } from 'lucide-react'
import React from 'react'

export const FooterSection = () => {
  return (
    <footer className='py-8 px-4 bg-card border-t border-border mt-12'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4'>
        <p className='text-sm text-muted-foreground text-center md:text-left'>
          &copy; {new Date().getFullYear()} Thank you for visiting my portfolio.
        </p>

        <a
          href='#hero'
          className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300'
          aria-label='Back to Top'
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  )
}
