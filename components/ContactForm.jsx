'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { leistungenData } from '@/data/leistungenData';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    if (!selectedService) {
      toast.error('Bitte wählen Sie eine Leistung aus.');
      return;
    }

    setIsSubmitting(true);

    try {
      const params = new URLSearchParams();
      params.append('name', data.name);
      params.append('email', data.email);
      params.append('phone', data.phone);
      params.append('service', selectedService);
      params.append('message', data.message);

      const response = await fetch('https://formie.io/form/21fa2eff-b708-40ac-9794-3d0b936c6502', {
        method: 'POST',
        body: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Übertragung fehlgeschlagen');
      }

      toast.success('Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.');
      reset();
      setSelectedService('');
    } catch (error) {
      toast.error('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-soft border border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            type="text"
            {...register('name', { required: 'Name ist erforderlich' })}
            className="mt-2 text-foreground"
            placeholder="Ihr Name"
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="contact-email">E-Mail</Label>
          <Input
            id="contact-email"
            type="email"
            {...register('email', {
              required: 'E-Mail ist erforderlich',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Ungültige E-Mail-Adresse',
              },
            })}
            className="mt-2 text-foreground"
            placeholder="ihre@email.de"
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="contact-phone">Telefon</Label>
          <Input
            id="contact-phone"
            type="tel"
            {...register('phone', { required: 'Telefonnummer ist erforderlich' })}
            className="mt-2 text-foreground"
            placeholder="+49 (0)..."
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="contact-service">Leistung</Label>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="mt-2 text-foreground">
              <SelectValue placeholder="Wählen Sie eine Leistung" />
            </SelectTrigger>
            <SelectContent>
              {leistungenData.map((category) => (
                <SelectItem key={category.id} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="contact-message">Nachricht</Label>
        <Textarea
          id="contact-message"
          {...register('message', { required: 'Nachricht ist erforderlich' })}
          className="mt-2 min-h-[150px] text-foreground resize-none"
          placeholder="Beschreiben Sie Ihr Anliegen..."
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full md:w-auto px-8 bg-primary text-white hover:bg-primary/90 active:scale-[0.98]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
      </Button>
    </form>
  );
}
