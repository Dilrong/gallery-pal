import { useEffect, useRef } from 'react'

const useCanvas = (images: string[], width: number, height: number) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, width, height)

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height)
      }
    })
  }, [images, width, height])

  /**
   * canvas를 png로 내보낸다.
   */
  const exportsAsImage = () => {
    if (canvasRef.current) {
      const dataURL = canvasRef.current.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = dataURL
      link.download = 'pal.png'
      link.click()
    }
  }

  return { canvasRef, exportsAsImage }
}

export default useCanvas
