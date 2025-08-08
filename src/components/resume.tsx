export default function Resume() {
    return (
        <section id="resume" className="relative min-h-screen flex flex-col justify-center px-4 lg:px-8 py-16 lg:py-32">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                    My Resume
                </h1>
            </div>
            <div>
                <h2 className="text-lg lg:text-xl font-medium max-w-2xl leading-relaxed">
                    Here you can find my resume, detailing my education, work experience, and skills.
                    Feel free to download it or contact me for more information!
                </h2>
            </div>
        </div>
        </section>
    )
}