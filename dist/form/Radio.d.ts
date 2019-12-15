import React from 'react';
import { Helpers } from '../base';
import { AllControlHelpers } from './controlDiv';
export interface RadioChangeEvent {
    readonly name: string;
    readonly value?: string;
}
interface RadioGroupViewProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>, AllControlHelpers {
    readonly name: string;
    readonly selected?: string;
    readonly readOnly?: boolean;
    onChange?(evt: RadioChangeEvent): void;
    onBlur?(e: any): void;
}
export interface RadioGroupProps extends RadioGroupViewProps {
    readonly defaultValue?: string;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'onChange'>, Helpers {
}
export declare const Radio: React.FC<RadioProps>;
export {};
//# sourceMappingURL=Radio.d.ts.map