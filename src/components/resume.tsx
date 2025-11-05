import { useState } from 'react';
import gavinResume from "../assets/Gavin Technical Resume.pdf";
import { Loader2 } from 'lucide-react';

export default function Resume() {
  const resumeUrl = gavinResume as string;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section
      id="resume"
      className="relative h-screen flex flex-col px-4 lg:px-8 pt-16 lg:pt-16 pb-16 scroll-mt-0"
    >
      <div className="flex flex-col text-center w-full h-full">
        <div className="flex-shrink-0">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">My Resume</h1>

          <p className="text-lg lg:text-xl font-medium leading-relaxed mb-4">
            Here's my resume detailing my education, my experiences, and my skills.
          </p>

          {/* Action buttons */}
          <div className="flex gap-3 mb-6 items-center justify-center">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg border text-sm dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Open in new tab
            </a>
            <a
              href={resumeUrl}
              download="Gavin_OngHai_Resume.pdf"
              className="px-3 py-2 rounded-lg border text-sm dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>
        
          {/* PDF Viewer - takes remaining space */}
        <div className="flex-1 overflow-hidden relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          )}
          <object
            data={resumeUrl}
            type="application/pdf"
            aria-label="Embedded PDF resume"
            className="w-full h-full rounded-xl border shadow sm:block"
            onLoad={() => setIsLoading(false)}
          >
            <div className="p-4 text-sm">
              Your browser can't display the PDF.{" "}
              <a className="underline" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Click here to open it in a new tab
              </a>
              .
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
