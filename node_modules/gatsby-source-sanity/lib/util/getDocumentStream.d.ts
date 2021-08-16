/// <reference types="node" />
import { Readable } from 'stream';
export declare function getDocumentStream(url: string, token?: string): Promise<Readable>;
