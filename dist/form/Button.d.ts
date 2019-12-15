import React from 'react';
import { AllControlHelpers } from './controlDiv';
declare type ButtonType = 'button' | 'reset' | 'submit';
declare type ButtonVariant = 'white' | 'light' | 'dark' | 'black' | 'text' | 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';
declare type ButtonSize = 'small' | 'normal' | 'medium' | 'large';
declare type ButtonState = 'normal' | 'hovered' | 'focused' | 'active' | 'loading' | 'static' | 'selected';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, AllControlHelpers {
    /**
     * variant defines the various colors which we can use for Button
     */
    readonly variant?: ButtonVariant;
    /**
     * While the default size is the normal one, the normal modifier exists in case you need to reset the button to its normal size.
     */
    readonly size?: ButtonSize;
    readonly state?: ButtonState;
    readonly fullWidth?: boolean;
    /**
     * The shape of the button will be Rounded rectangle
     */
    readonly rounded?: boolean;
    /**
     * The text color becomes the background color , and vice-versa
     */
    readonly inverted?: boolean;
    /**
     * While used along with inverted the invert color becomes the text and border colors
     */
    readonly outlined?: boolean;
    readonly type?: ButtonType;
}
export declare const Button: React.FC<ButtonProps>;
export {};
//# sourceMappingURL=Button.d.ts.map