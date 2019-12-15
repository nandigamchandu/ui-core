import React from 'react';
import { Helpers } from '../base';
declare type TileType = 'ancestor' | 'parent' | 'child';
declare type TileVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger';
declare type TileSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export interface TileProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    readonly tileType?: TileType;
    /**
     * To resize any tile according to 12 column grid
     */
    readonly size?: TileSize;
    /**
     * To stack tiles vertically
     */
    readonly vertical?: boolean;
    readonly variant?: TileVariant;
    readonly notification?: boolean;
    readonly box?: boolean;
}
export declare const Tile: React.FC<TileProps>;
export {};
//# sourceMappingURL=Tile.d.ts.map