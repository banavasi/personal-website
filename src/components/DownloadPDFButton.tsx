import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

export function DownloadPDFButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
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
      {/* Desktop: Download button with text */}
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className="bg-neon-green hidden items-center gap-2 border-4 border-black px-4 py-3 font-mono text-sm font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:cursor-not-allowed disabled:opacity-50 md:flex"
        aria-label="Download PDF Resume"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Download className="h-5 w-5" />
        )}
        <span>{isLoading ? 'GENERATING...' : 'DOWNLOAD PDF'}</span>
      </button>

      {/* Mobile: Download icon button only */}
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className="bg-neon-green flex h-12 w-12 items-center justify-center border-4 border-black font-mono text-sm font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:cursor-not-allowed disabled:opacity-50 md:hidden"
        aria-label="Download PDF Resume"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Download className="h-5 w-5" />
        )}
      </button>
    </>
  );
}
