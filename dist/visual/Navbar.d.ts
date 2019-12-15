import React from 'react';
import { Helpers } from '../base';
declare type NavbarVariant = 'primary' | 'link' | 'info' | 'warning' | 'danger' | 'success' | 'white' | 'light' | 'dark' | 'black';
declare type NavbarModifier = 'transparent' | 'fixed-top' | 'fixed-bottom';
export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    readonly variant?: NavbarVariant;
    readonly modifier?: NavbarModifier;
}
export declare const Navbar: React.FC<NavbarProps>;
export interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const NavbarBrand: React.FC<NavbarBrandProps>;
export interface NavbarBurgerProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Helpers {
    readonly active?: boolean;
}
export declare const NavbarBurger: React.FC<NavbarBurgerProps>;
declare type NavbarItemModifier = 'expanded' | 'tab' | 'hoverable';
declare type NavbarItemTag = 'div' | 'a';
export interface NavbarItemsProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    readonly dropDown?: boolean;
    readonly as?: NavbarItemTag;
    readonly active?: boolean;
    readonly dropUp?: boolean;
    readonly href?: string;
    readonly modifier?: NavbarItemModifier;
}
export declare const NavbarItem: React.FC<NavbarItemsProps>;
export interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    readonly active?: boolean;
}
export declare const NavbarMenu: React.FC<NavbarMenuProps>;
export interface NavbarDropDownProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    readonly boxed?: boolean;
}
export declare const NavbarDropDown: React.FC<NavbarDropDownProps>;
export interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Helpers {
    readonly arrowLess?: boolean;
}
export declare const NavbarLink: React.FC<NavbarLinkProps>;
export interface NavbarStartProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const NavbarStart: React.FC<NavbarStartProps>;
export interface NavbarEndProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const NavbarEnd: React.FC<NavbarEndProps>;
export interface NavbarDividerProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const NavbarDivider: React.FC<NavbarDividerProps>;
export {};
//# sourceMappingURL=Navbar.d.ts.map