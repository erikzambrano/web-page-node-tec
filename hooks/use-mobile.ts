import { useState, useEffect } from 'react'

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(64) // Default mobile height

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      const mobile = width < 768
      const tablet = width >= 768 && width < 1024
      
      setIsMobile(mobile)
      setIsTablet(tablet)
      
      // Set header height based on breakpoint
      if (width < 640) {
        setHeaderHeight(64) // 4rem
      } else if (width < 768) {
        setHeaderHeight(80) // 5rem
      } else if (width < 1024) {
        setHeaderHeight(96) // 6rem
      } else {
        setHeaderHeight(112) // 7rem
      }
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return { isMobile, isTablet, headerHeight }
}
