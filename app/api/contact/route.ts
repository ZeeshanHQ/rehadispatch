import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabaseClient';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, mcNumber, message } = await req.json();

    // 1. Insert into Supabase contact_inquiries
    await supabase.from('contact_inquiries').insert([
      {
        name,
        email,
        phone,
        mc_dot: mcNumber,
        message,
        status: 'new'
      }
    ]);

    // 2. Email notification
    const emailHtml = `
    <!DOCTYPE html>
    <html>
      <body style="font-family: sans-serif; background-color: #f8fafc; padding: 24px; color: #0f172a;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; padding: 32px;">
          <h2 style="margin: 0 0 16px 0; color: #2563eb;">New Contact Message from Reha Dispatch Website</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 35%;">Name:</td><td style="font-weight: 600;">${name || 'Not provided'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Email:</td><td style="font-weight: 600;"><a href="mailto:${email}">${email || 'Not provided'}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Phone:</td><td style="font-weight: 600;"><a href="tel:${phone}">${phone || 'Not provided'}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">MC / DOT:</td><td style="font-weight: 600;">${mcNumber || 'Not provided'}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f1f5f9; border-radius: 8px; font-size: 14px; line-height: 1.5;">
            <strong>Message:</strong><br />${message || 'No message content'}
          </div>
        </div>
      </body>
    </html>
    `;

    await resend.emails.send({
      from: 'Reha Dispatch <contact@astraventa.com>',
      to: ['astraventahq@gmail.com'],
      subject: `📩 New Contact Inquiry: ${name || 'Prospective Client'} (${mcNumber || 'Direct'})`,
      html: emailHtml
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
