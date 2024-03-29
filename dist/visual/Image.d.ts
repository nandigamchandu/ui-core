import React from 'react';
import { Helpers } from '../base';
declare type FixedSquaredImageSize = '16x16' | '24x24' | '32x32' | '48x48' | '64x64' | '96x96' | '128x128';
declare type ResponsiveImageRatio = 'square' | '1by1' | '5by4' | '4by3' | '3by2' | '5by3' | '16by9' | '2by1' | '3by1' | '4by5' | '3by4' | '2by3' | '3by5' | '9by16' | '1by2' | '1by3';
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, Helpers {
    /**
     * Resize the avatar
     */
    readonly size?: FixedSquaredImageSize;
    /**
     * If you don't know the exact dimensions but know the ratio instead, you can use this
     */
    readonly responsiveImageRatio?: ResponsiveImageRatio;
    /**
     * To make rounded images
     */
    readonly rounded?: boolean;
}
export declare const Image: React.FC<ImageProps>;
export {};
//# sourceMappingURL=Image.d.ts.map