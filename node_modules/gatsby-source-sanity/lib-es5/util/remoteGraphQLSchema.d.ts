import { ListTypeNode, NamedTypeNode, NonNullTypeNode } from 'gatsby/graphql';
import { SanityClient } from '@sanity/client';
import { PluginConfig } from '../gatsby-node';
export declare type FieldDef = {
    type: NamedTypeNode | ListTypeNode | NonNullTypeNode;
    namedType: NamedTypeNode;
    isList: boolean;
    aliasFor: string | null;
    isReference: boolean;
};
export declare type ObjectTypeDef = {
    name: string;
    kind: 'Object';
    isDocument: boolean;
    fields: {
        [key: string]: FieldDef;
    };
};
export declare type UnionTypeDef = {
    name: string;
    types: string[];
};
export declare type TypeMap = {
    scalars: string[];
    objects: {
        [key: string]: ObjectTypeDef;
    };
    unions: {
        [key: string]: UnionTypeDef;
    };
};
export declare const defaultTypeMap: TypeMap;
export declare function getRemoteGraphQLSchema(client: SanityClient, config: PluginConfig): Promise<any>;
export declare function getTypeMapFromGraphQLSchema(sdl: string): TypeMap;
