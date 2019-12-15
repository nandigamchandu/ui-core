import React from 'react';
import { Helpers } from '../base';
declare type ColumnSize = 'three-quarters' | 'two-thirds' | 'half' | 'one-third' | 'one-quarter' | 'full' | 'four-fifths' | 'three-fifths' | 'two-fifths' | 'one-fifth';
declare type ColumnGridSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
declare type ColumnOffsetSize = ColumnSize | ColumnGridSize;
declare type ColumnResponsive = 'mobile' | 'desktop' | 'tablet' | 'widescreen' | 'fullhd';
export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    /**
     * Defines the size of each column individually
     */
    readonly size?: ColumnSize;
    /**
     * To resize  according to 12 column grid
     */
    readonly gridSize?: ColumnGridSize;
    /**
     * To create horizontal space around column elements
     */
    readonly offsetSize?: ColumnOffsetSize;
    /**
     * If you want a column to only take the space it needs. The other column(s) will fill up the remaining space.
     */
    readonly narrow?: boolean;
    /**
     *Display column based on each viewport size
     */
    readonly responsive?: ColumnResponsive;
}
export declare const Column: React.FC<ColumnProps>;
export {};
//# sourceMappingURL=Column.d.ts.map