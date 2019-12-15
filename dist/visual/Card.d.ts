import React from 'react';
import { Helpers } from '../base';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const Card: React.FC<CardProps>;
export interface CardHeaderProps extends React.HTMLAttributes<HTMLHeadElement>, Helpers {
}
export declare const CardHeader: React.FC<CardHeaderProps>;
declare type HeaderTitleAlignment = 'centered';
export interface CardHeaderTitleProps extends React.HTMLAttributes<HTMLHeadElement>, Helpers {
    /**
     * To align the Header title
     */
    readonly alignment?: HeaderTitleAlignment;
}
export declare const CardHeaderTitle: React.FC<CardHeaderTitleProps>;
export interface CardHeaderIconProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const CardHeaderIcon: React.FC<CardHeaderIconProps>;
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const CardContent: React.FC<CardContentProps>;
export interface CardFooterProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const CardFooter: React.FC<CardFooterProps>;
export interface CardFooterItemProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const CardFooterItem: React.FC<CardFooterItemProps>;
export interface CardImageProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const CardImage: React.FC<CardImageProps>;
export {};
//# sourceMappingURL=Card.d.ts.map