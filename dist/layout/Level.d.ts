import React from 'react';
import { Helpers } from '../base';
declare type LevelItemDirection = 'left' | 'right';
declare type LevelModifier = 'mobile';
export interface LevelProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    readonly modifier?: LevelModifier;
}
export declare const Level: React.FC<LevelProps>;
export interface LevelItemProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    readonly direction?: LevelItemDirection;
    readonly flexible?: boolean;
}
export declare const LevelItem: React.FC<LevelItemProps>;
export {};
//# sourceMappingURL=Level.d.ts.map