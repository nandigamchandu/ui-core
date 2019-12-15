import React from 'react';
import { Helpers } from '../base';
declare type OlModifier = 'lower-alpha' | 'lower-roman' | 'upper-alpha' | 'upper-roman';
export interface OlProps extends React.OlHTMLAttributes<HTMLOListElement>, Helpers {
    /**
     * different types of items markers
     */
    readonly modifier?: OlModifier;
}
export declare const Ol: React.FC<OlProps>;
export {};
//# sourceMappingURL=Ol.d.ts.map