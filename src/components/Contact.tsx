'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [state, handleSubmit] = useForm('xojjaere');

  if (state.succeeded) {
    return (
      <p role="status" aria-live="polite">
        Thanks for your message — I’ll get back to you soon.
      </p>
    );
  }

  return (
    <section id="contact" className="px-6 py-20 max-w-7xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white/80 backdrop-blur rounded-lg shadow-md space-y-4"
      >
        <h3 className="text-lg font-semibold">Get in touch</h3>

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="text-sm text-red-600 mt-1">
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="text-sm text-red-600 mt-1">
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="text-sm text-red-600 mt-1">
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={state.submitting}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            {state.submitting ? 'Sending…' : 'Submit'}
          </Button>
        </div>
      </form>
    </section>
  );
}
