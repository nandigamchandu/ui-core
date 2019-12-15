import React from 'react';
import { Helpers } from '../base';
declare type FileVariant = 'white' | 'black' | 'light' | 'dark' | 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';
declare type FileSize = 'small' | 'medium' | 'large';
declare type FileAlignment = 'centered' | 'right';
export interface FileProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    /**
     * You can style the file element by appending color(variant) modifiers
     */
    readonly variant?: FileVariant;
    readonly size?: FileSize;
    /**
     * To align CTA(call-to-action)
     */
    readonly alignment?: FileAlignment;
    /**
     * To have a boxed block
     */
    readonly boxed?: boolean;
    /**
     * To expand the name to fill up space
     */
    readonly fullWidth?: boolean;
    readonly fileLabel?: string;
    /**
     * You can add a placeholder for the selected file name.
     */
    readonly fileName?: boolean;
}
export declare const File: React.FC<FileProps>;
export {};
//# sourceMappingURL=File.d.ts.map