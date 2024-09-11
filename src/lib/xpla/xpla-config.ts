export interface XplaConfig {
    FCD_URL: string
    LCD_URL: string
    CHAIN_ID: string
    NATIVE_TOKEN: string[]
    LCD_GAS_PRICES: Record<string, string>
    LCD_GAS_ADJUSTMENT: string
    FEE_DENOM: string
    IS_CLASSIC: boolean
    PAL_CONTRACT: string
}

// XPLA 기본 설정
export const xplaConfig = {
    MAINNET: {
        FCD_URL: 'https://dimension-fcd.xpla.dev/v1',
        LCD_URL: 'https://dimension-lcd.xpla.dev',
        CHAIN_ID: 'dimension_37-1',
        NATIVE_TOKEN: ['axpla'],
        LCD_GAS_PRICES: { axpla: '850000000000' },
        LCD_GAS_ADJUSTMENT: '1.5',
        FEE_DENOM: 'axpla',
        IS_CLASSIC: false,
        PAL_CONTRACT: 'xpla1c8afftwswl8zjwvkpzvykl47fa5j7x649ys6a4swu7rsm64uaves07lusm',
    } as XplaConfig,
    TESTNET: {
        FCD_URL: 'https://cube-fcd.xpla.dev/v1',
        LCD_URL: 'https://cube-lcd.xpla.dev',
        CHAIN_ID: 'cube_47-5',
        NATIVE_TOKEN: ['axpla'],
        LCD_GAS_PRICES: { axpla: '850000000000' },
        LCD_GAS_ADJUSTMENT: '1.5',
        FEE_DENOM: 'axpla',
        IS_CLASSIC: false,
        PAL_CONTRACT: 'xpla1wzkpxtnnzux73sev9wu30y3zuts7tw9pm8n9p9lhausn4hhju8cqzs8v8j'
    } as XplaConfig,
}