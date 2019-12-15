import React from 'react';
import { Helpers } from '../base';
declare type DeleteSize = 'small' | 'medium' | 'large';
export interface DeleteProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Helpers {
    /**
     * Resize the delete element
     */
    readonly size?: DeleteSize;
}
export declare const Delete: React.FC<DeleteProps>;
export {};
//# sourceMappingURL=Delete.d.ts.map