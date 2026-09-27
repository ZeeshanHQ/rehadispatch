import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabaseClient';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_CAREERS_EMAIL = 'altmanjay09@gmail.com';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      role_title,
      full_name,
      email,
      phone,
      location,
      experience_years,
      linkedin_url,
      expected_salary,
      available_start,
      negotiation_scenario,
      tms_loadboards,
      cover_letter,
      resume_filename,
      resume_data
    } = body;

    if (!full_name || !email || !phone || !role_title) {
      return NextResponse.json(
        { error: 'Missing required applicant fields' },
        { status: 400 }
      );
    }

    // 1. Store application in Supabase
    const { data: dbData, error: dbError } = await supabase
      .from('job_applications')
      .insert([
        {
          role_title,
          full_name,
          email,
          phone,
          location: location || 'Not specified',
          experience_years: experience_years || 'Not specified',
          linkedin_url: linkedin_url || 'Not provided',
          expected_salary: expected_salary || 'Open to discussion',
          available_start: available_start || 'Immediate',
          negotiation_scenario: negotiation_scenario || 'None provided',
          tms_loadboards: tms_loadboards || 'None specified',
          cover_letter: cover_letter || '',
          resume_filename: resume_filename || '',
          resume_data: resume_data ? resume_data.substring(0, 10000) : '',
          status: 'pending_review'
        }
      ])
      .select('id')
      .single();

    if (dbError) {
      console.error('Supabase application store notice:', dbError);
    }

    const applicationId = dbData?.id || `APP-${Math.floor(100000 + Math.random() * 900000)}`;

    // 2. Build High-End HTML Dossier for altmanjay09@gmail.com
    const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
          .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); }
          .header { background: #090B10; padding: 32px; color: #ffffff; border-bottom: 2px solid #2563eb; }
          .badge { display: inline-block; padding: 4px 12px; background: #2563eb; color: #ffffff; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
          .role-title { font-size: 22px; font-weight: 700; margin: 12px 0 4px 0; color: #ffffff; }
          .subtext { font-size: 13px; color: #94a3b8; margin: 0; }
          .content { padding: 32px; }
          .section-heading { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
          .grid { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .grid td { padding: 8px 0; font-size: 13px; vertical-align: top; }
          .label { color: #64748b; width: 38%; font-weight: 500; }
          .value { color: #0f172a; font-weight: 600; width: 62%; }
          .highlight-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 20px; margin-bottom: 24px; }
          .qa-card { background: #f8fafc; border-left: 3px solid #2563eb; border-radius: 0 8px 8px 0; padding: 14px 18px; margin-bottom: 18px; font-size: 13px; line-height: 1.6; }
          .footer { background: #f8fafc; padding: 20px 32px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; text-align: center; }
          .button { display: inline-block; padding: 10px 20px; background: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 13px; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">Candidate Application</span>
            <div class="role-title">${role_title}</div>
            <p class="subtext">Submitted via Reha Dispatch Careers Portal • Reference: ${applicationId}</p>
          </div>

          <div class="content">
            <div class="highlight-card">
              <table style="width: 100%;">
                <tr>
                  <td style="font-size: 18px; font-weight: 700; color: #0f172a;">${full_name}</td>
                  <td style="text-align: right; font-size: 12px; font-family: monospace; color: #2563eb; font-weight: 700;">
                    ${experience_years ? experience_years + ' Experience' : 'New Applicant'}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top: 6px; font-size: 13px; color: #64748b;">
                    📍 ${location || 'Location Not Specified'}
                  </td>
                </tr>
              </table>
            </div>

            <div class="section-heading">Contact Details & Credentials</div>
            <table class="grid">
              <tr>
                <td class="label">Email Address:</td>
                <td class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone / WhatsApp:</td>
                <td class="value"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td class="label">LinkedIn / Profile:</td>
                <td class="value">
                  ${linkedin_url ? `<a href="${linkedin_url}" target="_blank" style="color: #2563eb; text-decoration: none;">View LinkedIn Profile ↗</a>` : 'Not provided'}
                </td>
              </tr>
              <tr>
                <td class="label">Salary Expectation:</td>
                <td class="value">${expected_salary || 'Open to discussion'}</td>
              </tr>
              <tr>
                <td class="label">Available Start Date:</td>
                <td class="value">${available_start || 'Immediately'}</td>
              </tr>
            </table>

            <div class="section-heading">Proficiencies & Load Boards</div>
            <div class="qa-card">
              <strong style="color: #0f172a;">Load Boards & Systems:</strong><br/>
              ${tms_loadboards || 'Not detailed'}
            </div>

            <div class="section-heading">Rate Negotiation Scenario / Proven Track Record</div>
            <div class="qa-card">
              <strong style="color: #0f172a;">Candidate Response:</strong><br/>
              ${negotiation_scenario || 'No scenario submitted.'}
            </div>

            ${cover_letter ? `
              <div class="section-heading">Candidate Cover Note / Intro Pitch</div>
              <div class="qa-card" style="border-left-color: #64748b;">
                ${cover_letter.replace(/\\n/g, '<br/>')}
              </div>
            ` : ''}

            ${resume_filename ? `
              <div class="section-heading">Resume / CV Document</div>
              <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px 16px; font-size: 13px; color: #1e40af; font-family: monospace;">
                📄 Attached Document: <strong>${resume_filename}</strong>
              </div>
            ` : ''}

            <div style="text-align: center; padding-top: 16px;">
              <a href="mailto:${email}?subject=Interview%20Invitation%20-%20Reha%20Dispatch%20(${encodeURIComponent(role_title)})" class="button">
                Schedule Interview with Candidate
              </a>
            </div>
          </div>

          <div class="footer">
            <p style="margin: 0;">Reha Dispatch Talent Acquisition Desk • Confidential Candidate Dossier</p>
            <p style="margin: 4px 0 0 0; font-size: 11px; color: #94a3b8;">Delivered securely to altmanjay09@gmail.com</p>
          </div>
        </div>
      </body>
    </html>
    `;

    // 3. Send email via Resend to altmanjay09@gmail.com
    const emailResult = await resend.emails.send({
      from: 'Reha Dispatch Careers <careers@astraventa.com>',
      to: [ADMIN_CAREERS_EMAIL],
      subject: `🎯 New Applicant: ${full_name} for ${role_title} [${experience_years || 'Candidate'}]`,
      html: emailHtml
    });

    return NextResponse.json({
      success: true,
      applicationId,
      emailId: emailResult.data?.id
    });

  } catch (error: any) {
    console.error('Careers API processing error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error processing application' },
      { status: 500 }
    );
  }
}
