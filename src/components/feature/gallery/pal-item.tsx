interface Props {
  image: string
  tokenId: string
}

const PalGalleryItem = ({ image, tokenId }: Props) => {
  return (
    <div>
      <img src={image} alt={tokenId} width={300} height={300} />
      <p>{tokenId}</p>
    </div>
  )
}

export default PalGalleryItem
