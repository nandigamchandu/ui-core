import React from 'react';
import { Helpers } from '../base';
declare type ColumnsResponsive = 'mobile' | 'desktop' | 'tablet' | 'widescreen' | 'fullhd';
export interface ColumnsProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    /**
     * Display columns based on each viewport size
     */
    readonly responsiveness?: ColumnsResponsive;
    /**
     * To remove space between the columns
     */
    readonly gapLess?: boolean;
    /**
     * To align columns vertically
     */
    readonly verticallyCentered?: boolean;
    /**
     * To add more column elements than would fit in a single row
     */
    readonly multiline?: boolean;
    /**
     * To create horizontal space around column elements
     */
    readonly columnCentered?: boolean;
}
export declare const Columns: React.FC<ColumnsProps>;
export {};
//# sourceMappingURL=Columns.d.ts.map