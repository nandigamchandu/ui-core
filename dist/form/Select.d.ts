import React from 'react';
import { AllControlHelpers } from './controlDiv';
declare type SelectVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'dark' | 'light' | 'white' | 'black';
declare type SelectState = 'hovered' | 'focused' | 'active';
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, AllControlHelpers {
    /**
     * You can style the select element by appending color(variant) modifiers
     */
    readonly variant?: SelectVariant;
    /**
     * The shape of the select will be rounded rectangle
     */
    readonly rounded?: boolean;
    readonly state?: SelectState;
    readonly noControl?: true;
}
export declare const Select: React.FC<SelectProps>;
export {};
//# sourceMappingURL=Select.d.ts.map