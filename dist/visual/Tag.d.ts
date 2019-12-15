import React from 'react';
import { Helpers } from '../base';
declare type TagVariant = 'black' | 'dark' | 'light' | 'primary' | 'info' | 'success' | 'warning' | 'white' | 'danger';
declare type TagSize = 'normal' | 'medium' | 'large';
declare type TagModifier = 'link' | 'delete';
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, Helpers {
    /**
     * While the default size is the normal one, the normal modifier exists in case you need to reset the tag to its normal size
     */
    readonly size?: TagSize;
    /**
     * To style the tag element by appending color(variant)
     */
    readonly variant?: TagVariant;
    /**
     * To make a link Tag or to turn the tag into a delete button.
     */
    readonly modifier?: TagModifier;
    readonly rounded?: boolean;
}
export declare const Tag: React.FC<TagProps>;
export {};
//# sourceMappingURL=Tag.d.ts.map