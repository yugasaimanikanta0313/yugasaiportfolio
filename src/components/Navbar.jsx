"use client"

import { useEffect, useState } from "react"

export const Navbar = ({ menuopen, setmenuopen }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Control body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuopen ? "hidden" : ""
  }, [menuopen])

  // Handle navbar background change on scroll and track active section
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Track active section
      const sections = ["home", "about", "projects", "contact"]
      let currentSection = "home"

      for (const section of sections) {
        const element = document.querySelector(`#${section}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the section is in view (with an offset for navbar)
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling
  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      // Close mobile menu if it's open
      if (menuopen) {
        setmenuopen(false)
      }

      // Smooth scroll to the target element
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for the navbar height
        behavior: "smooth",
      })

      // Update active section
      setActiveSection(targetId.substring(1))
    }
  }

  return (
    <>
      <nav
        className={`fixed left-0 top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(0,15,10,0.9)] backdrop-blur-xl shadow-lg py-0"
            : "bg-[rgba(0,15,10,0.7)] backdrop-blur-md py-2"
        } border-b border-gray-700`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center h-16">
          <a href="#home" onClick={handleSmoothScroll} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center text-white font-bold">
              Y
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 font-bold text-xl group-hover:from-green-300 group-hover:to-green-500 transition-all duration-300">
              YugasaiManikanta
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-md transition-colors hover:bg-white/10 md:hidden relative z-50"
            onClick={() => setmenuopen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all ${menuopen ? "rotate-45 translate-y-[7px]" : ""}`}
            ></span>
            <span className={`w-6 h-[2px] bg-white transition-all ${menuopen ? "opacity-0" : ""}`}></span>
            <span
              className={`w-6 h-[2px] bg-white transition-all ${menuopen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            ></span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={handleSmoothScroll}
                className={`relative group transition-colors text-sm font-medium uppercase tracking-wide ${
                  activeSection === item ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-green-500 transition-all duration-300 ${
                    activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
            <a
              href="/src/assets/yugasairesume.pdf"
              className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md transition-all duration-300 font-medium text-sm uppercase tracking-wide shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/90 backdrop-blur-lg transition-all duration-300 md:hidden ${
          menuopen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {["home", "about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleSmoothScroll}
              className={`text-2xl font-medium uppercase tracking-widest relative ${
                activeSection === item ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-green-500 transition-all duration-300 ${
                  activeSection === item ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          ))}
          <a
            href="/src/assets/yugasairesume.pdf"
            className="px-8 py-3 mt-4 bg-green-600 hover:bg-green-500 text-white rounded-md transition-all duration-300 font-medium text-lg uppercase tracking-wide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  )
}
