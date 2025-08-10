import gavinResume from "../assets/Gavin Technical Resume 8-4-2025.pdf";

export default function Resume() {
  const resumeUrl = gavinResume as string;

  return (
    <section
      id="resume"
      className="relative h-screen flex flex-col px-4 lg:px-8 pt-16 lg:pt-16 pb-16 scroll-mt-0"
    >
      <div className="flex flex-col lg:text-left w-full h-full">
        <div className="flex-shrink-0">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">My Resume</h1>

          <p className="text-lg lg:text-xl font-medium leading-relaxed mb-4">
            View or download my full resume detailing education, experience, and skills.
          </p>

          {/* Action buttons */}
          <div className="flex gap-3 mb-6">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg border text-sm text-white hover:bg-white hover:text-black transition-colors"
            >
              Open in new tab
            </a>
            <a
              href={resumeUrl}
              download="Gavin_OngHai_Resume.pdf"
              className="px-3 py-2 rounded-lg border text-sm text-white hover:bg-white hover:text-black transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>
        
        {/* PDF Viewer - takes remaining space */}
        <div className="flex-1 overflow-hidden">
          <object
            data={resumeUrl}
            type="application/pdf"
            aria-label="Embedded PDF resume"
            className="w-full h-full rounded-xl border shadow sm:block"
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
