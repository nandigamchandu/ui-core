import React from 'react';
import { Helpers } from '../base';
declare type SubTitleSize = '1' | '2' | '3' | '4' | '5' | '6';
export interface SubTitleProps extends React.HTMLAttributes<HTMLHeadingElement>, Helpers {
    /**
     * Resize the SubTitle element
     */
    readonly size?: SubTitleSize;
}
export declare const SubTitle: React.FC<SubTitleProps>;
export {};
//# sourceMappingURL=SubTitle.d.ts.map