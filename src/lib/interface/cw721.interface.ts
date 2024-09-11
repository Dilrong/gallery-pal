export interface Cw721Attribute {
    value: string;
    trait_type: string;
    display_type?: string;
}

export interface Cw721Extension {
    name?: string;
    description?: string;
    image?: string;
    image_data?: string;
    external_url?: string;
    background_color?: string;
    animation_url?: string;
    youtube_url?: string;
    attributes?: Cw721Attribute[];
}

export interface ChildDependentTokenInfoQuery {
    child_dependent_token_info: {
        token_id: string;
    }
}

export interface ParentDependentTokenInfoQuery {
    parent_dependent_token_info: {
        token_id: string;
    }
}

export interface DependentTokenInfoResponse {
    token_id: string;
    all_nft_info: {
        access: {
            owner: string;
            approvals: string[];
        },
        info: {
            token_uri: string;
            extension: Cw721Extension;
        }
        dependent_tokens: string[];
    }
}