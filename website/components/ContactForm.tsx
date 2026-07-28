'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, User, Building, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters').max(100, 'Company name is too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - Replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form data:', data);

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 max-w-2xl mx-auto"
    >
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-white/90">
          <User className="w-4 h-4 text-white/70" />
          Full Name
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          placeholder="John Doe"
          className={`w-full px-4 py-3 rounded-xl glass border-2 transition-all text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 ${
            errors.name ? 'border-red-500/50' : 'border-white/20'
          }`}
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-400 flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.name.message}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-white/90">
          <Mail className="w-4 h-4 text-white/70" />
          Email Address
        </label>
        <input
          {...register('email')}
          id="email"
          type="email"
          placeholder="john@example.com"
          className={`w-full px-4 py-3 rounded-xl glass border-2 transition-all text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 ${
            errors.email ? 'border-red-500/50' : 'border-white/20'
          }`}
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-400 flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.email.message}
          </motion.p>
        )}
      </div>

      {/* Company Field */}
      <div className="space-y-2">
        <label htmlFor="company" className="flex items-center gap-2 text-sm font-medium text-white/90">
          <Building className="w-4 h-4 text-white/70" />
          Company / Organization
        </label>
        <input
          {...register('company')}
          id="company"
          type="text"
          placeholder="Your Organization"
          className={`w-full px-4 py-3 rounded-xl glass border-2 transition-all text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 ${
            errors.company ? 'border-red-500/50' : 'border-white/20'
          }`}
        />
        {errors.company && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-400 flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.company.message}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-white/90">
          <MessageSquare className="w-4 h-4 text-white/70" />
          Message
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          placeholder="Tell us about your wildfire prevention needs..."
          className={`w-full px-4 py-3 rounded-xl glass border-2 transition-all text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none ${
            errors.message ? 'border-red-500/50' : 'border-white/20'
          }`}
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-400 flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.message.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 text-lg bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Send Message
            </span>
          )}
        </Button>
      </motion.div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-xl glass border-2 border-green-500/50 bg-green-500/10"
        >
          <div className="flex items-center gap-3 text-green-400">
            <CheckCircle className="w-5 h-5" />
            <p className="font-medium">Message sent successfully! We&rsquo;ll get back to you soon.</p>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 rounded-xl glass border-2 border-red-500/50 bg-red-500/10"
        >
          <div className="flex items-center gap-3 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <p className="font-medium">Failed to send message. Please try again.</p>
          </div>
        </motion.div>
      )}
    </motion.form>
  );
}
