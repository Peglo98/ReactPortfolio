import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Send as SendIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // Initialize EmailJS with your public key (import.meta.env for Vite)
  useEffect(() => {
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
    if (userId) {
      emailjs.init(userId);
    } else {
      console.error('EmailJS User ID missing: set VITE_EMAILJS_USER_ID in .env');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceID || !templateID) {
      console.error('EmailJS Service or Template ID missing in .env');
      toast({
        title: 'Configuration error',
        description: 'Email service is not configured properly.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    emailjs
        .sendForm(
            serviceID,
            templateID,
            formRef.current
        )
        .then(
            () => {
              toast({
                title: 'Message sent!',
                description: "Thank you for your message. I'll get back to you soon.",
              });
              formRef.current.reset();
            },
            (error) => {
              console.error('Email send error:', error);
              toast({
                title: 'Error sending message',
                description:
                    'Something went wrong. Please try again later or contact directly via email.',
                variant: 'destructive',
              });
            }
        )
        .finally(() => setIsSubmitting(false));
  };

  return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6 contact-text">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                        href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {import.meta.env.VITE_CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <span className="text-muted-foreground">Poland</span>
                  </div>
                </div>

                <div className="pt-8">
                  <h4 className="font-medium mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/patryk-glowczynski/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Name..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Email..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}{' '}
                  <SendIcon size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};
