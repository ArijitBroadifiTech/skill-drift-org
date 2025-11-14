import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
}

// Declare the FinisherHeader type
interface FinisherHeaderConfig {
  count: number
  size: {
    min: number
    max: number
    pulse: number
  }
  speed: {
    x: {
      min: number
      max: number
    }
    y: {
      min: number
      max: number
    }
  }
  colors: {
    background: string
    particles: string[]
  }
  blending: string
  opacity: {
    center: number
    edge: number
  }
  skew: number
  shapes: string[]
}

declare global {
  interface Window {
    FinisherHeader: new (config: FinisherHeaderConfig) => unknown
  }
}

export default function AuthLayout({ children }: Props) {
  const headerRef = useRef<HTMLDivElement>(null)
  const finisherInstanceRef = useRef<unknown>(null)

  useEffect(() => {
    // Function to initialize the header
    const initializeHeader = () => {
      if (
        window.FinisherHeader &&
        headerRef.current &&
        !finisherInstanceRef.current
      ) {
        finisherInstanceRef.current = new window.FinisherHeader({
          count: 80,
          size: {
            min: 2,
            max: 8,
            pulse: 0,
          },
          speed: {
            x: {
              min: 0,
              max: 0.4,
            },
            y: {
              min: 0,
              max: 0.6,
            },
          },
          colors: {
            background: '#070724',
            particles: ['#fbfcca', '#d7f3fe', '#ffd0a7'],
          },
          blending: 'overlay',
          opacity: {
            center: 1,
            edge: 0,
          },
          skew: 0,
          shapes: ['c'],
        })
      }
    }

    // Check if script already loaded
    if (window.FinisherHeader) {
      initializeHeader()
    } else {
      // Load the Finisher Header script
      const script = document.createElement('script')
      script.src = '/finisher-header.es5.min.js'
      script.async = false // Changed to false to ensure it loads before initialization

      script.onload = () => {
        // Small delay to ensure DOM is ready
        setTimeout(initializeHeader, 100)
      }

      script.onerror = () => {
        console.error('Failed to load finisher-header script')
      }

      document.body.appendChild(script)
    }

    // Cleanup function
    return () => {
      finisherInstanceRef.current = null
      // Remove all canvas elements created by FinisherHeader
      const canvases = document.querySelectorAll('.finisher-header canvas')
      canvases.forEach(canvas => canvas.remove())
    }
  }, [])

  return (
    <div className='relative min-h-screen overflow-hidden bg-slate-950'>
      {/* Animated Background Container - Must have finisher-header class */}
      <div
        ref={headerRef}
        className='finisher-header fixed inset-0'
        style={{
          width: '100%',
          height: '100vh',
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <div className='container relative z-10 grid h-svh max-w-none items-center justify-center'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8'>
          <div className='mb-4 flex items-center justify-center gap-2'>
            <img src='/images/newFavicon.png' alt='logo' className='w-5' />
            <h1 className='text-xl font-medium text-white drop-shadow-lg'>
              SkillDrift Organization
            </h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
