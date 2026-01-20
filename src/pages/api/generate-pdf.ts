import type { APIRoute } from 'astro';
import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import { getResumeData, getProjects } from '@/lib/cms/content-service';
import { ResumePDF } from '@/components/ResumePDF';

export const GET: APIRoute = async ({ request, url }) => {
  try {
    // Set the base URL for image resolution
    const baseUrl = url.origin;
    process.env.PUBLIC_URL = baseUrl;
    process.env.SITE_URL = baseUrl;

    // Fetch resume data and projects
    const [resumeData, projects] = await Promise.all([
      getResumeData(),
      getProjects(),
    ]);

    // Render PDF using React.createElement since we can't use JSX in .ts files
    const pdfBuffer = await renderToBuffer(
      React.createElement(ResumePDF, { resumeData, projects })
    );

    // Return PDF as response
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Shashank_Shandilya_Resume.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate PDF', details: error instanceof Error ? error.message : String(error) }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
