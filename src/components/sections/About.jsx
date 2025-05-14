import { Revealonscroll } from "../Revealonscroll"

export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "JavaScript", "HTML5", "CSS3"]
  const backendSkills = ["Spring Boot", "Node.js", "Express", "MongoDB", "RESTful APIs"]
  const deploymentSkills = ["AWS", "Render", "Netlify", "Vercel", "PythonAnywhere"]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20" aria-labelledby="about-heading">
      <Revealonscroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2
            id="about-heading"
            className="text-3xl font-bold mb-10 bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent text-center"
          >
            About Me
          </h2>

          <article className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg bg-[rgba(15,23,42,0.6)] backdrop-blur-sm mb-8">
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              I'm a full-stack developer with a passion for creating intuitive and responsive web applications. While I
              enjoy frontend projects, I also specialize in integrating LLM models to enhance application intelligence
              and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <section
                className="rounded-xl p-6 bg-green-950/30 hover:-translate-y-1 transition-all duration-300 shadow-md"
                aria-labelledby="frontend-heading"
              >
                <h3 id="frontend-heading" className="text-xl font-bold mb-4 text-green-400">
                  Frontend Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section
                className="rounded-xl p-6 bg-emerald-950/30 hover:-translate-y-1 transition-all duration-300 shadow-md"
                aria-labelledby="backend-heading"
              >
                <h3 id="backend-heading" className="text-xl font-bold mb-4 text-emerald-400">
                  Backend Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-emerald-500/10 text-emerald-400 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/20 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section
                className="rounded-xl p-6 bg-teal-950/30 hover:-translate-y-1 transition-all duration-300 shadow-md"
                aria-labelledby="deployment-heading"
              >
                <h3 id="deployment-heading" className="text-xl font-bold mb-4 text-teal-400">
                  Deployment Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {deploymentSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-teal-500/10 text-teal-400 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 hover:shadow-lg hover:shadow-teal-500/20 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-xl border border-white/10 hover:-translate-y-1 transition-all duration-300 bg-[rgba(15,23,42,0.6)] shadow-md">
              <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex flex-col">
                  <span className="text-lg font-medium">Computer Science and Engineering</span>
                  <span className="text-gray-400 flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    KL University (2022–2026)
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-lg font-medium">Class 12th State Board</span>
                  <span className="text-gray-400 flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    2022
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-xl border border-white/10 hover:-translate-y-1 transition-all duration-300 bg-[rgba(15,23,42,0.6)] shadow-md">
              <h3 className="text-xl font-bold mb-4 text-white">My Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in building applications that are not only visually appealing but also performant and
                accessible. My experience with both frontend and backend technologies allows me to create seamless,
                end-to-end solutions.
              </p>
            </div>
          </div>
        </div>
      </Revealonscroll>
    </section>
  )
}
