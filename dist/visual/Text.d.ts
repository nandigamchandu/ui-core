import React from 'react';
import { Helpers, TextHelpers } from '../base';
declare type HeaderTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
declare type TextTags = HeaderTags | 'span' | 'div' | 'p';
export interface TextProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    readonly as?: TextTags;
    readonly color?: TextHelpers['textColor'];
    readonly backgroundColor?: TextHelpers['textColor'];
    readonly alignment?: TextHelpers['textAlignment'];
    readonly transformation?: TextHelpers['textTransformation'];
    readonly weight?: TextHelpers['textWeight'];
    readonly responsiveSize?: TextHelpers['textResponsiveSize'];
    readonly responsiveAlignment?: TextHelpers['textResponsiveAlignment'];
}
export declare const Text: React.FC<TextProps>;
export {};
//# sourceMappingURL=Text.d.ts.map