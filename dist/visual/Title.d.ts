import React from 'react';
import { Helpers } from '../base';
declare type TitleSize = '1' | '2' | '3' | '4' | '5' | '6';
export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, Helpers {
    /**
     * Resize the title element
     */
    readonly size?: TitleSize;
    /**
     * You can maintain the normal spacing between titles and subtitles if you use the is-spaced modifier on the first element
     */
    readonly spaced?: boolean;
}
export declare const Title: React.FC<TitleProps>;
export {};
//# sourceMappingURL=Title.d.ts.map