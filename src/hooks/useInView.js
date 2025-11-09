import { useEffect, useRef, useState } from 'react'

export const useInView = (options = {}) => {
  const elementRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!elementRef.current || inView) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2, ...options },
    )

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [options, inView])

  return { elementRef, inView }
}

