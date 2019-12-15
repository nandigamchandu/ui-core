import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Helpers } from '../base';
export interface PanelProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const Panel: React.FC<PanelProps>;
export interface PanelHeadingProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const PanelHeading: React.FC<PanelHeadingProps>;
export interface PanelBlockProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    readonly active?: boolean;
    readonly wrapped?: boolean;
}
export declare const PanelBlock: React.FC<PanelBlockProps>;
declare type PanelIconDirection = 'left' | 'right';
export interface PanelIconProps extends FontAwesomeIconProps, Helpers {
    readonly icon: IconDefinition;
    readonly direction?: PanelIconDirection;
}
export declare const PanelIcon: React.FC<PanelIconProps>;
export interface PanelTabsItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Helpers {
    readonly active?: boolean;
}
export declare const PanelTabsItem: React.FC<PanelTabsItemProps>;
export interface PanelTabsProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const PanelTabs: React.FC<PanelTabsProps>;
export {};
//# sourceMappingURL=Panel.d.ts.map