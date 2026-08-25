import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { to = 'contact@anexa1.ro' } = await request.json().catch(() => ({}));

    console.log(`📧 Testing email delivery to: ${to}`);

    // Check Env
    console.log('ENV CHECK:', {
      RESEND_API_KEY_EXISTS: !!process.env.RESEND_API_KEY,
      RESEND_API_KEY_PREFIX: process.env.RESEND_API_KEY?.substring(0, 3),
      EMAIL_FROM: process.env.EMAIL_FROM,
      APP_URL: process.env.NEXT_PUBLIC_SITE_URL || process.env.PUBLIC_BASE_URL
    });

    const result = await sendEmail({
      to,
      subject: 'Test delivery Anexa1',
      html: '<h1>It works!</h1><p>Email delivery is configured correctly.</p>',
      from: process.env.EMAIL_FROM || 'Anexa1 <no-reply@anexa1.ro>'
    });

    return NextResponse.json({
      success: true,
      message: `Email sent to ${to}`,
      result
    });

  } catch (error: any) {
    console.error('❌ Email test failed:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Email test failed',
        error: error.message,
        stack: error.stack
      },
      { status: 500 }
    );
  }
}