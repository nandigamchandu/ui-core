import React from 'react';
import { Helpers } from '../base';
export declare type LabelSize = 'small' | 'medium' | 'large';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, Helpers {
    /**
     * For resizing the Label
     */
    readonly size?: LabelSize;
    readonly as?: 'label' | 'div' | 'span';
}
export declare const Label: React.FC<LabelProps>;
//# sourceMappingURL=Label.d.ts.map