import { useEffect, useRef } from 'react'

export default function CursorGridReveal() {
  const layerRef = useRef(null)

  useEffect(() => {
    const layer = layerRef.current
    if (typeof window.matchMedia !== 'function') return undefined

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!layer || !finePointer || reducedMotion) return undefined

    let frame = 0
    let pointerX = 0
    let pointerY = 0

    function movePointer(event) {
      pointerX = event.clientX
      pointerY = event.clientY
      if (frame) return

      frame = window.requestAnimationFrame(() => {
        layer.style.setProperty('--cursor-x', `${pointerX}px`)
        layer.style.setProperty('--cursor-y', `${pointerY}px`)
        layer.classList.add('cursor-grid-reveal--active')
        frame = 0
      })
    }

    function hideReveal(event) {
      if (event?.relatedTarget) return
      layer.classList.remove('cursor-grid-reveal--active')
    }

    window.addEventListener('pointermove', movePointer, { passive: true })
    window.addEventListener('pointerout', hideReveal, { passive: true })
    window.addEventListener('blur', hideReveal)

    return () => {
      window.removeEventListener('pointermove', movePointer)
      window.removeEventListener('pointerout', hideReveal)
      window.removeEventListener('blur', hideReveal)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={layerRef} className="cursor-grid-reveal" aria-hidden="true" />
}
