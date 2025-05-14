import { Revealonscroll } from "../Revealonscroll"

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Student Learning Management System",
      description:
        "A web-based platform for managing student learning activities including course enrollment, assignment tracking, and grading. Designed with a user-friendly interface for both students and instructors.",
      technologies: ["Django", "HTML Templates", "PostgreSQL"],
      link: "https://yugasai13032004.pythonanywhere.com/",
    },
    {
      id: 2,
      title: "Art Attack",
      description:
        "An art gallery web application where users can explore, view, and purchase artworks. Features include user authentication, wishlist management, and admin controls for uploading art.",
      technologies: ["Spring Boot", "React", "MySQL"],
      link: "https://github.com/yugasaimanikanta0313/ArtAttack_Backend.git",
    },
    {
      id: 3,
      title: "AgroCraft",
      description:
        "A platform connecting farmers and customers to sell and purchase agricultural products online. Deployed on AWS with application load balancer and integrated payment via Razorpay.",
      technologies: ["Spring Boot", "React", "MySQL", "AWS", "Razorpay"],
      link: "https://github.com/yugasaimanikanta0313/AgroCraftFrontend.git",
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 "
      aria-labelledby="featured-projects"
    >
      <Revealonscroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2
            id="featured-projects"
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent text-center"
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/50 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-xs hover:bg-green-500/20 hover:shadow-sm hover:shadow-green-500/20 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/yugasaimanikanta0313/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-500 py-3 px-6 rounded-full text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View Projects on GitHub
            </a>
          </div>
        </div>
      </Revealonscroll>
    </section>
  )
}
