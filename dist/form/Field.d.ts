import React from 'react';
import { Helpers } from '../base';
import { LabelSize } from './Label';
declare type FieldGroupModifier = 'grouped-centered' | 'grouped-right';
declare type FieldAddonModifier = 'addons-centered' | 'addons-right';
declare type FieldSize = 'narrow' | 'expanded';
export interface FieldPropsBase {
    /**
     * To group controls together
     */
    readonly grouped?: boolean;
    /**
     * To attach controls together
     */
    readonly addons?: boolean;
    /**
     * For horizontal form control
     */
    readonly horizontal?: boolean;
    readonly groupedMultiline?: boolean;
    readonly size?: FieldSize;
    /**
     * To alter the alignment along with grouped
     */
    readonly groupModifier?: FieldGroupModifier;
    /**
     * To alter the alignment along with addons.
     */
    readonly addonsModifier?: FieldAddonModifier;
}
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement>, Helpers, FieldPropsBase {
}
export declare const Field: React.FC<FieldProps>;
export interface FieldBodyProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const FieldBody: React.FC<FieldBodyProps>;
export declare type FieldHelpType = 'primary' | 'info' | 'success' | 'warning' | 'danger';
export interface FieldHelpProps extends React.HTMLAttributes<HTMLParagraphElement>, Helpers {
    readonly variant?: FieldHelpType;
}
export declare const FieldHelp: React.FC<FieldHelpProps>;
declare type FieldLabelSize = 'small' | 'normal' | 'medium' | 'large';
export interface FieldLabelProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    /**
     * To preserve the vertical alignment of each labels with each type and size of control
     */
    readonly fieldLabelSize?: FieldLabelSize;
}
export declare const FieldLabel: React.FC<FieldLabelProps>;
export interface FormFieldProps extends FieldProps {
    /**
     * Specify the given name as the label
     */
    readonly label?: string;
    /**
     * resize the label element
     */
    readonly labelSize?: LabelSize;
    readonly helpType?: FieldHelpType;
    readonly helpText?: string;
}
export declare const FormField: React.FC<FormFieldProps>;
export {};
//# sourceMappingURL=Field.d.ts.map