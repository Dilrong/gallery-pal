'use client'

import { DependentTokenInfoResponse } from '@/lib/interface/cw721.interface'
import { XplaApi } from '@/lib/xpla/xpla-api'
import { xplaConfig } from '@/lib/xpla/xpla-config'
import { useEffect, useState } from 'react'

const usePalList = () => {
  const [palList, setPalList] = useState<DependentTokenInfoResponse[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const getPalList = async () => {
    setLoading(true)
    try {
      const xplaApi = new XplaApi(xplaConfig.MAINNET)
      const tokenList = await xplaApi.queryChildDependentTokenInfo(
        xplaConfig.MAINNET.PAL_CONTRACT,
        'PAL #976',
      )
      setPalList((prevList) => [...prevList, tokenList])
    } catch (err) {
      console.error('PAL 계약 가져오기 오류: ', err)
      setError('PAL 목록을 가져오는데 실패했습니다')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPalList()
  }, [])

  return { palList, loading, error }
}

export default usePalList
