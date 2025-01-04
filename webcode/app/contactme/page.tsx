'use client';

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
import Header from '@/components/myComponents/header';

import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@/components/ui/toast"

const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us for any inquiries or feedback.',
}

export default function ContactPage() {
  return (<>
  <div style={{position:'fixed', top:'0'}}>

    <Header></Header>
  </div>

    <ToastProvider>
      <div className="min-h-screen bg-gradient-to-br from-white to-neutral-300 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Contact Me</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <Toaster />
    </ToastProvider>

    </>
  )
}