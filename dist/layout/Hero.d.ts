import React from 'react';
import { Helpers } from '../base';
declare type HeroVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
declare type HeroSize = 'medium' | 'large' | 'halfheight' | 'fullheight' | 'fullheight-with-navbar';
export interface HeroProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    /**
     * To style the Hero Elements by colors
     */
    readonly variant?: HeroVariant;
    /**
     * To generate a subtle gradient
     */
    readonly bold?: boolean;
    /**
     * To resize the imposing banners
     */
    readonly size?: HeroSize;
}
export declare const Hero: React.FC<HeroProps>;
export interface HeroHeadProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const HeroHead: React.FC<HeroHeadProps>;
export interface HeroBodyProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const HeroBody: React.FC<HeroBodyProps>;
export interface HeroFootProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const HeroFoot: React.FC<HeroFootProps>;
export {};
//# sourceMappingURL=Hero.d.ts.map