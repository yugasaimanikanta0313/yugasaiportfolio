"use client"

import { Revealonscroll } from "../Revealonscroll"
import { TypeAnimation } from "react-type-animation"

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-20 right-1/4 w-60 h-60 bg-teal-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Animated code particles (optional decorative element) */}
      <div className="absolute inset-0 opacity-20 -z-5">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute text-xs text-green-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
            }}
          >
            {"{"}
          </div>
        ))}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute text-xs text-emerald-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
            }}
          >
            {"}"}
          </div>
        ))}
      </div>

      <Revealonscroll>
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400 backdrop-blur-sm border border-green-500/20">
          
          </div>
            <div className="inline-block mb-4 rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400 backdrop-blur-sm border border-green-500/20">
          
          </div>
          <br></br>
          <br></br>
          <br></br>

         <div className="w-full px-4 sm:px-6 md:px-8 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center z-10">
  <div className="inline-block mb-4 rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400 backdrop-blur-sm border border-green-500/20">
    Welcome to my portfolio
  </div>

  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent leading-tight break-words">
    Hi, I am YugasaiManikanta.
  </h1>

  <div className="text-lg sm:text-xl md:text-2xl font-medium mb-6 text-gray-300 h-12">
    <TypeAnimation
      sequence={[
        "Full-Stack Developer", 2000,
        "Engineering Student", 2000,
        "Problem Solver", 2000,
        "Tech Enthusiast", 2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </div>

  <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
    I develop modern web applications with a focus on clean, efficient code and user-friendly design...
  </p>
</div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="#projects"
              className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 relative overflow-hidden group w-64 sm:w-auto flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/25"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="border border-green-500/30 text-green-400 py-3 px-8 rounded-full font-medium transition-all duration-300 w-64 sm:w-auto flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 hover:bg-green-500/10 hover:border-green-500/50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Revealonscroll>

      {/* Add keyframes for the floating animation */}
      <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-40px) rotate(180deg);
                    }
                    100% {
                        transform: translateY(0) rotate(360deg);
                    }
                }
            `}</style>
    </section>
  )
}
