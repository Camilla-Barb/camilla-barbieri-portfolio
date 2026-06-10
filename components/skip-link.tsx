"use client"

export default function SkipLink() {
  return (
    <a
      href="#about"
      onClick={(e) => {
        e.preventDefault()
        const el = document.getElementById("about")
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
          el.focus({ preventScroll: true })
        }
      }}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
    >
      Skip to main content
    </a>
  )
}
