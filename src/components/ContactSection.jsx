import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../libs/utils'
import { useToast } from '../hooks/use-toast'

export const ContactSection = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/5'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
          Get In <span className='text-primary'>Touch</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-3xl mx-auto'>
          I am actively seeking professional opportunities where I can apply my skills,
          continue to learn, and grow as a software developer. Please feel free to reach
          out to me via email or LinkedIn.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* LEFT CONTACT INFO */}
          <div className='space-y-8'>
            <h4 className='font-semibold text-lg'>Contact Information</h4>
            <div className='space-y-6'>

              {/* Email */}
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h5 className='text-sm font-medium'>Email</h5>
                  <a
                    href='mailto:varunagrawal320@gmail.com'
                    className='text-muted-foreground text-sm hover:text-primary transition-colors'
                  >
                    varunagrawal320@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h5 className='text-sm font-medium'>Phone</h5>
                  <a
                    href='tel:+919179526861'
                    className='text-muted-foreground text-sm hover:text-primary transition-colors'
                  >
                    +91-9179526861
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h5 className='text-sm font-medium'>Location</h5>
                  <span className='text-muted-foreground text-sm'>
                    Raipur, Chhattisgarh, India.
                  </span>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className='pt-8 font-medium'>
              <h4>Connect With Me</h4>
              <div className='flex items-center gap-3 mt-4'>
                <a
                  href='https://www.linkedin.com/in/varun-agrawal-a03961280'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 hover:text-primary transition-colors'
                >
                  <Linkedin className='h-6 w-6' />
                  <span className='text-lg font-semibold'>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className='bg-card p-8 rounded-lg shadow-md space-y-6'
          >
            <h3 className='text-2xl font-semibold mb-2'>Send a Message</h3>

            {/* Name */}
            <div>
              <label htmlFor='name' className='block text-sm font-medium mb-2'>
                Your Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                required
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='Your Name...'
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='abc@gmail.com'
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor='message' className='block text-sm font-medium mb-2'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                required
                rows={4}
                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder="Hello, I'd like to talk about..."
              />
            </div>

            {/* Submit */}
            <button
              type='submit'
              disabled={isSubmitting}
              className={cn(
                'cosmic-button w-full flex items-center justify-center gap-2 text-xl'
              )}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
