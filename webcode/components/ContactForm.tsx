'use client'


import { useState } from 'react'
import { Button } from '@/components/ui/button02'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'



import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

// function ContactForm() {
//   const [state, handleSubmit] = useForm("mgvvpkrq");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

export default function ContactForm() {
  
  


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   // Simulate form submission
  //   await new Promise(resolve => setTimeout(resolve, 1500))

  //   // Reset form and show success message
  //   setName('')
  //   setEmail('')
  //   setMessage('')
  //   setIsSubmitting(false)
  //   toast({
  //     title: "Message sent!",
  //     description: "We'll get back to you as soon as possible.",
  //   })
  // }

  const [state, handleSubmit] = useForm("mgvvpkrq");
    
  if (state.succeeded) {

    setTimeout(()=>{
      setName('')
      setEmail('')
      setMessage('')
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

    },100)
    console.log("success");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div className=''>
          <Input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-t-md my-2"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className=''>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-t-md my-2"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Textarea
            id="message"
            name="message"
            required
            className="rounded-t-md my-2"
            placeholder="Your Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  )
}

