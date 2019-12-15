import React from 'react';
import { Helpers } from '../base';
declare type ProgressBarVariant = 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'white' | 'black' | 'dark' | 'light';
declare type ProgressBarSize = 'small' | 'medium' | 'large';
export interface ProgressBarProps extends React.HTMLAttributes<HTMLProgressElement>, Helpers {
    /**
     * Resize the ProgressBar
     */
    readonly size?: ProgressBarSize;
    /**
     * To style the progressBar element by appending color(variant)
     */
    readonly variant?: ProgressBarVariant;
    /**
     * It's used to show that some progress is going on,the actual duration is determined
     */
    readonly value?: string;
    readonly max: string;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export {};
//# sourceMappingURL=ProgressBar.d.ts.map