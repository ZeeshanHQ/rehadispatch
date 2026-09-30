import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabaseClient';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      mcDotNumber,
      companyName,
      ownerName,
      phone,
      email,
      fleetSize,
      equipmentType,
      targetMinRPM,
      preferredLanes,
      homeTimeFreq,
      factoringCompany,
      hasNOA,
      payoutType,
      mcLetterUploaded,
      w9Uploaded,
      coiUploaded,
      noaUploaded,
      referenceCode: incomingRef
    } = body;

    const refCode = incomingRef || `REHA-${Math.floor(100000 + Math.random() * 900000)}`;

    // 1. Insert into Supabase
    const { error: dbError } = await supabase.from('carrier_onboarding').insert([
      {
        mc_dot_number: mcDotNumber || 'Not specified',
        company_name: companyName || 'Carrier Account',
        owner_name: ownerName || 'Carrier Owner',
        phone: phone || 'Not specified',
        email: email || 'Not specified',
        fleet_size: fleetSize || '1',
        equipment_type: equipmentType,
        target_min_rpm: targetMinRPM,
        preferred_lanes: preferredLanes,
        home_time_freq: homeTimeFreq,
        factoring_company: factoringCompany,
        has_noa: hasNOA,
        payout_type: payoutType,
        mc_letter_uploaded: Boolean(mcLetterUploaded),
        w9_uploaded: Boolean(w9Uploaded),
        coi_uploaded: Boolean(coiUploaded),
        noa_uploaded: Boolean(noaUploaded),
        reference_code: refCode,
        status: 'pending'
      }
    ]);

    if (dbError) {
      console.error('Database write notice:', dbError);
    }

    // 2. Format HTML Notification for astraventahq@gmail.com
    const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
          .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { background: #0f172a; padding: 28px 32px; color: #ffffff; }
          .badge { display: inline-block; padding: 4px 12px; background: #2563eb; color: #ffffff; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
          .content { padding: 32px; }
          .section-title { font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
          .grid { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .grid td { padding: 8px 0; font-size: 13px; vertical-align: top; }
          .label { color: #64748b; width: 40%; font-weight: 500; }
          .value { color: #0f172a; font-weight: 600; width: 60%; }
          .footer { background: #f8fafc; padding: 20px 32px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; text-align: center; }
          .pill { display: inline-block; padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; }
          .pill-green { background: #dcfce7; color: #15803d; }
          .pill-gray { background: #f1f5f9; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">New Carrier Onboarded</span>
            <h1 style="margin: 12px 0 4px 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">Reha Dispatch Command</h1>
            <p style="margin: 0; font-size: 13px; color: #94a3b8;">A new carrier partner completed live dispatch setup.</p>
          </div>
          
          <div class="content">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
              <span style="font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 700;">Reference Identification:</span>
              <div style="font-size: 20px; font-weight: 800; color: #2563eb; font-family: monospace; margin-top: 4px;">${refCode}</div>
            </div>

            <div class="section-title">Carrier Profile</div>
            <table class="grid">
              <tr><td class="label">Company Name:</td><td class="value">${companyName || 'Not provided'}</td></tr>
              <tr><td class="label">MC / DOT Number:</td><td class="value">${mcDotNumber || 'Not provided'}</td></tr>
              <tr><td class="label">Authorized Contact:</td><td class="value">${ownerName || 'Not provided'}</td></tr>
              <tr><td class="label">Phone:</td><td class="value"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone || 'Not provided'}</a></td></tr>
              <tr><td class="label">Email:</td><td class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email || 'Not provided'}</a></td></tr>
              <tr><td class="label">Fleet Size:</td><td class="value">${fleetSize} Active Unit(s)</td></tr>
            </table>

            <div class="section-title">Equipment & Lane Strategy</div>
            <table class="grid">
              <tr><td class="label">Equipment Type:</td><td class="value">${equipmentType}</td></tr>
              <tr><td class="label">Target Minimum RPM:</td><td class="value" style="color: #16a34a; font-weight: 700;">${targetMinRPM}</td></tr>
              <tr><td class="label">Preferred Lanes:</td><td class="value">${preferredLanes}</td></tr>
              <tr><td class="label">Home Time Frequency:</td><td class="value">${homeTimeFreq}</td></tr>
            </table>

            <div class="section-title">Factoring & Settlement Protocol</div>
            <table class="grid">
              <tr><td class="label">Factoring Partner:</td><td class="value">${factoringCompany}</td></tr>
              <tr><td class="label">Notice of Assignment (NOA):</td><td class="value">${hasNOA}</td></tr>
              <tr><td class="label">Requested Payout Method:</td><td class="value">${payoutType}</td></tr>
            </table>

            <div class="section-title">Document Verification Status</div>
            <table class="grid">
              <tr><td class="label">MC Authority Letter:</td><td class="value">${mcLetterUploaded ? '<span class="pill pill-green">✓ Provided</span>' : '<span class="pill pill-gray">Pending Upload</span>'}</td></tr>
              <tr><td class="label">W-9 Form:</td><td class="value">${w9Uploaded ? '<span class="pill pill-green">✓ Provided</span>' : '<span class="pill pill-gray">Pending Upload</span>'}</td></tr>
              <tr><td class="label">COI (Insurance $1M/$100k):</td><td class="value">${coiUploaded ? '<span class="pill pill-green">✓ Provided</span>' : '<span class="pill pill-gray">Pending Upload</span>'}</td></tr>
              <tr><td class="label">NOA / Voided Check:</td><td class="value">${noaUploaded ? '<span class="pill pill-green">✓ Provided</span>' : '<span class="pill pill-gray">Pending Upload</span>'}</td></tr>
            </table>
          </div>

          <div class="footer">
            <p style="margin: 0;">Automated notification from Reha Dispatch & Operations Desk</p>
            <p style="margin: 4px 0 0 0; font-size: 11px; color: #94a3b8;">contact@rehadispatch.com • +1 (573) 229-5394</p>
          </div>
        </div>
      </body>
    </html>
    `;

    // 3. Send email via Resend
    const emailResult = await resend.emails.send({
      from: 'Reha Dispatch <onboarding@astraventa.com>',
      to: ['astraventahq@gmail.com'],
      subject: `🚨 New Carrier Onboarded: ${companyName || 'Carrier'} (MC# ${mcDotNumber || 'Pending'}) - [${refCode}]`,
      html: emailHtml
    });

    return NextResponse.json({
      success: true,
      referenceCode: refCode,
      emailId: emailResult.data?.id
    });

  } catch (error: any) {
    console.error('Error handling onboarding submission:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
