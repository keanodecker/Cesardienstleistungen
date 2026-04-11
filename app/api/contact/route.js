import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'info@keanodecker.com';
const FROM_EMAIL = 'Cesar Dienstleistungen <onboarding@resend.dev>';

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, name, email, phone, service, message } = body;

    let subject, html;

    if (type === 'callback') {
      subject = `Rückrufanfrage von ${name}`;
      html = `
        <h2>Neue Rückrufanfrage</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-Mail</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
        </table>
      `;
    } else {
      subject = `Neue Anfrage von ${name}: ${service}`;
      html = `
        <h2>Neue Kontaktanfrage</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-Mail</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Leistung</td><td style="padding:8px;border:1px solid #ddd;">${service}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nachricht</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${message}</td></tr>
        </table>
      `;
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Fehler beim Senden' }, { status: 500 });
  }
}
