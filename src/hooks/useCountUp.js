import { useEffect, useState } from 'react'

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

export const useCountUp = ({ end, duration = 1600, start = 0, inView }) => {
  const [value, setValue] = useState(start)

  useEffect(() => {
    if (!inView) return

    let animationFrame
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const nextValue = start + (end - start) * eased
      setValue(nextValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [start, end, duration, inView])

  return value
}

