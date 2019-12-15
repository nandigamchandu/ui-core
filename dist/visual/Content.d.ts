import React from 'react';
import { Helpers } from '../base';
declare type ContentSize = 'small' | 'medium' | 'large';
export interface ContentProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    /**
     * For resizing the content
     */
    readonly size?: ContentSize;
}
export declare const Content: React.FC<ContentProps>;
export {};
//# sourceMappingURL=Content.d.ts.map