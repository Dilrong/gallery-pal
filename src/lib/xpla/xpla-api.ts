import { LCDClient } from "@xpla/xpla.js";
import { XplaConfig } from "./xpla-config";
import { DependentTokenInfoResponse } from "../interface/cw721.interface";

export class XplaApi {
    private readonly config: XplaConfig;
    private gasPrices: Record<string, string>;
    private lcd: LCDClient;

    constructor(config: XplaConfig) {
        this.config = config;
        this.gasPrices = this.config.LCD_GAS_PRICES;
        this.lcd = new LCDClient({
            URL: this.config.LCD_URL,
            chainID: this.config.CHAIN_ID,
            gasPrices: this.config.LCD_GAS_PRICES,
            gasAdjustment: this.config.LCD_GAS_ADJUSTMENT,
            isClassic: this.config.IS_CLASSIC,
        });
    }

    public async queryChildDependentTokenInfo(contractAddress: string, tokenId: string): Promise<DependentTokenInfoResponse> {
        const result = await this.lcd.wasm.contractQuery<DependentTokenInfoResponse>(contractAddress, {
            child_dependent_token_info: {
                token_id: tokenId
            }
        })

        console.log(result)

        return result;
    }
}