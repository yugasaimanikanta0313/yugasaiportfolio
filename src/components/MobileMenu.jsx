"use client"

export const MobilMenu = ({ menuopen, setmenuopen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,15,10,0.8)] z-40 flex flex-col items-center justify-center
                    transition-all duration-300 ease-in-out
                    ${menuopen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                `}
    >
      <button
        onClick={() => setmenuopen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["home", "about", "projects", "contact"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setmenuopen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                        ${menuopen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    `}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}

      {/* Resume Link */}
      <a
        href="/yugasaiportfolio/yugasairesume.pdf"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuopen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  )
}
