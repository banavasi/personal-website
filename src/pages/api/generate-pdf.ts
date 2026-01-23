import type { APIRoute } from 'astro';
import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import { getResumeData, getProjects } from '@/lib/cms/content-service';
import { ResumePDF } from '@/components/ResumePDF';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async ({ request, url }) => {
  try {
    // Set the base URL for image resolution
    const baseUrl = url.origin;
    process.env.PUBLIC_URL = baseUrl;
    process.env.SITE_URL = baseUrl;

    // Fetch resume data and projects
    const [resumeData, projects] = await Promise.all([getResumeData(), getProjects()]);

    // Convert image to base64 if it exists
    let imageDataUrl = '';
    if (resumeData.personal?.image) {
      const imagePath = resumeData.personal.image.startsWith('/')
        ? resumeData.personal.image.slice(1)
        : resumeData.personal.image;
      
      const fullImagePath = path.join(process.cwd(), 'public', imagePath);
      
      try {
        if (fs.existsSync(fullImagePath)) {
          const imageBuffer = fs.readFileSync(fullImagePath);
          const imageBase64 = imageBuffer.toString('base64');
          const imageExtension = path.extname(fullImagePath).slice(1).toLowerCase();
          const mimeType = imageExtension === 'png' ? 'image/png' : imageExtension === 'jpg' || imageExtension === 'jpeg' ? 'image/jpeg' : 'image/png';
          imageDataUrl = `data:${mimeType};base64,${imageBase64}`;
        } else {
          console.warn(`Image not found at: ${fullImagePath}`);
        }
      } catch (error) {
        console.error('Error reading image file:', error);
      }
    }

    // Create resume data with base64 image
    const resumeDataWithImage = {
      ...resumeData,
      personal: {
        ...resumeData.personal,
        image: imageDataUrl || resumeData.personal.image,
      },
    };

    // Render PDF using React.createElement since we can't use JSX in .ts files
    const pdfBuffer = await renderToBuffer(
      React.createElement(ResumePDF, { resumeData: resumeDataWithImage, projects })
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
      JSON.stringify({
        error: 'Failed to generate PDF',
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
