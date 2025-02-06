// src/app/api/save-contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('1. API Route - Starting request handling');
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

  // Ensure GOOGLE_SCRIPT_URL is defined
  if (!GOOGLE_SCRIPT_URL) {
    console.error('2. Missing GOOGLE_SCRIPT_URL');
    return NextResponse.json(
      { error: 'Missing GOOGLE_SCRIPT_URL environment variable' },
      { status: 500 }
    );
  }

  const body = await req.json();
  console.log('3. Received form data:', body);

  console.log('4. Sending request to Google Script:', GOOGLE_SCRIPT_URL);
  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...body,
      timestamp: new Date().toISOString()
    }),
  });

  console.log('5. Submission to Google Script completed');
  
  // Directly return a success response without checking for errors
  return NextResponse.json({ success: true });
}

// Add OPTIONS handler for CORS preflight requests
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}