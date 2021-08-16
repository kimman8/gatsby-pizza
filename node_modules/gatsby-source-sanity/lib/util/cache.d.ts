import { PluginConfig } from '../gatsby-node';
export declare type StateCache = {
    [key: string]: any;
};
export declare enum CACHE_KEYS {
    TYPE_MAP = "typeMap",
    GRAPHQL_SDL = "graphqlSdl",
    IMAGE_EXTENSIONS = "imageExt"
}
export declare function getCacheKey(config: PluginConfig, suffix: CACHE_KEYS): string;
