'use client'

import { DependentTokenInfoResponse } from '@/lib/interface/cw721.interface'
import PalGalleryItem from './pal-item'
import usePalList from './use-pal-list'

const PalGallery = () => {
  const { palList, loading, error } = usePalList()

  const testList = [
    'https://hello-pal.io/_next/image/?url=https%3A%2F%2Fweb3-storage.xpla.dev%2Fipfs%2FQmWsb8tJkeGkGr1LgQfUW2jSTV8XykJjX8wbbegmjFumTq&w=640&q=75',
    'https://hello-pal.io/image/composed/QmQoNf1gX4ZQVxpSBCWFgBMjtKK5xtNvXm5BVVjU9VbgiT/QmXYxA1TfMZdc5iyq5FLJFGxyyLoh5CqRDDvLo2FSeHLDB/Qma7dPokYB5u2XncvgJ42AukZyAu8HquzcGMms8RbYvHEV/QmfZWFDVz4JMcBAbpYdnR9Y97dSbu53mUbqzRZkqxdKRsr/',
  ]

  return (
    <div>
      {/* <h2>Gallery, PAL</h2> */}
      <div>
        {loading ? (
          <div>loading</div>
        ) : (
          <>
            {palList.map((pal: DependentTokenInfoResponse, index) => (
              <PalGalleryItem
                imageList={testList}
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
