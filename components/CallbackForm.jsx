'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function CallbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const submissions = JSON.parse(localStorage.getItem('callbackSubmissions') || '[]');
      const newSubmission = {
        ...data,
        timestamp: new Date().toISOString(),
        type: 'callback',
      };
      submissions.push(newSubmission);
      localStorage.setItem('callbackSubmissions', JSON.stringify(submissions));

      toast.success('Vielen Dank! Wir melden uns in Kürze bei Ihnen.');
      reset();
    } catch (error) {
      toast.error('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="callback-name" className="text-white text-sm">Name</Label>
        <Input
          id="callback-name"
          type="text"
          {...register('name', { required: 'Name ist erforderlich' })}
          className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
          placeholder="Ihr Name"
        />
        {errors.name && (
          <p className="text-sm text-red-300 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="callback-email" className="text-white text-sm">E-Mail</Label>
        <Input
          id="callback-email"
          type="email"
          {...register('email', {
            required: 'E-Mail ist erforderlich',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Ungültige E-Mail-Adresse',
            },
          })}
          className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
          placeholder="ihre@email.de"
        />
        {errors.email && (
          <p className="text-sm text-red-300 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="callback-phone" className="text-white text-sm">Telefon</Label>
        <Input
          id="callback-phone"
          type="tel"
          {...register('phone', { required: 'Telefonnummer ist erforderlich' })}
          className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
          placeholder="+49 (0)..."
        />
        {errors.phone && (
          <p className="text-sm text-red-300 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-white hover:bg-primary/90 active:scale-[0.98]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
      </Button>
    </form>
  );
}
