import gavinResume from "../assets/Gavin Technical Resume 8-4-2025.pdf";

export default function Resume() {
  const resumeUrl = gavinResume as string;

  return (
    <section
      id="resume"
      className="relative flex flex-col justify-center px-4 lg:px-8 py-16 lg:py-32"
    >
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
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
            className="px-3 py-2 rounded-lg border text-sm hover:bg-black hover:text-white transition-colors"
          >
            Open in new tab
          </a>
          <a
            href={resumeUrl}
            download="Gavin_OngHai_Resume.pdf"
            className="px-3 py-2 rounded-lg border text-sm hover:bg-black hover:text-white transition-colors"
          >
            Download PDF
          </a>
        </div>

        {/* Embedded viewer (hidden on very small screens for better UX) */}
        <div className="w-full">
          <object
            data={resumeUrl}
            type="application/pdf"
            aria-label="Embedded PDF resume"
            className="w-full rounded-xl border shadow hidden sm:block"
            style={{ height: "85vh" }} 
          >
            {}
            <div className="p-4 text-sm">
              Your browser can’t display the PDF.{" "}
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
