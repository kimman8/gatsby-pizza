export declare function isDraftId(id: string): boolean;
export declare const prefixId: (id: string) => string;
export declare const unprefixId: (id: string) => string;
export declare const safeId: (id: string, makeSafe: (id: string) => string) => string;
