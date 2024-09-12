import useCanvas from './use-canvas'

interface Props {
  imageList: string[]
  tokenId: string
}

const PalGalleryItem = ({ imageList, tokenId }: Props) => {
  const WIDTH = 512
  const HEIGHT = 512

  const { canvasRef } = useCanvas(imageList, WIDTH, HEIGHT)

  return (
    <div>
      <canvas ref={canvasRef} width={512} height={512} />
      <p>{tokenId}</p>
    </div>
  )
}

export default PalGalleryItem
