import React from 'react';
import { AllControlHelpers } from './controlDiv';
declare type InputVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'white' | 'dark' | 'light' | 'black';
export declare type InputType = 'text' | 'password' | 'email' | 'tel' | 'color' | 'date' | 'datetime-local' | 'month' | 'number' | 'range' | 'search' | 'time' | 'url' | 'link' | 'week';
declare type InputState = 'hovered' | 'focused' | 'static' | 'active';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, AllControlHelpers {
    /**
     * You can style the input element by appending color(variant) modifiers
     */
    readonly variant?: InputVariant;
    readonly rounded?: boolean;
    /**
     * Specifies the width of the <Input> element
     */
    readonly fullWidth?: boolean;
    readonly inline?: boolean;
    readonly state?: InputState;
    /**
     * Specifies the type <Input> element to display.This is the most important attribute, as it determines everything else about how the <Input> element behaves.
     */
    readonly type?: InputType;
}
export declare const Input: React.FC<InputProps>;
export {};
//# sourceMappingURL=Input.d.ts.map