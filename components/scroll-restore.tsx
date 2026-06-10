"use client"

import { useEffect } from "react"

export default function ScrollRestore() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0)
    const onShow = () => window.scrollTo(0, 0)
    window.addEventListener("pageshow", onShow)
    return () => window.removeEventListener("pageshow", onShow)
  }, [])

  return null
}
