import { useState } from 'react';
import { Printer, Download, Loader2 } from 'lucide-react';

export function DownloadPDFButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePrint = () => {
    // On desktop, use native print dialog
    window.print();
  };

  const handleDownload = async () => {
    // On mobile, download the PDF
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-pdf');
      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Shashank_Shandilya_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Desktop: Print button with text */}
      <button
        onClick={handlePrint}
        className="hidden md:flex items-center gap-2 bg-neon-green text-black px-4 py-3 font-mono text-sm font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
      >
        <Printer className="w-5 h-5" />
        <span>PRINT</span>
      </button>

      {/* Mobile: Download icon button only */}
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className="md:hidden flex items-center justify-center w-12 h-12 bg-neon-green text-black font-mono text-sm font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Download PDF Resume"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Download className="w-5 h-5" />
        )}
      </button>
    </>
  );
}
