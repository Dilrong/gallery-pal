'use client'

import { DependentTokenInfoResponse } from '@/lib/interface/cw721.interface'
import PalGalleryItem from './pal-item'
import usePalList from './use-pal-list'

const PalGallery = () => {
  const { palList, loading, error } = usePalList()

  return (
    <div>
      <h2>Gallery, PAL</h2>
      <div>
        {loading ? (
          <div>loading</div>
        ) : (
          <>
            {palList.map((pal: DependentTokenInfoResponse, index) => (
              <PalGalleryItem
                image={pal.all_nft_info?.info?.extension?.image!}
                tokenId={pal.token_id}
                key={index}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default PalGallery
