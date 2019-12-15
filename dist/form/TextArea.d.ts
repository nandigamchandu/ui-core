import React from 'react';
import { AllControlHelpers } from './controlDiv';
declare type TextAreaVariant = 'primary' | 'info' | 'warning' | 'success' | 'danger' | 'dark' | 'light' | 'white' | 'black';
declare type TextAreaState = 'hovered' | 'focused' | 'static' | 'active';
declare type TextAreaSize = 'small' | 'medium' | 'large';
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, AllControlHelpers {
    /**
     * You can style the textarea element by appending color(variant) modifiers
     */
    readonly variant?: TextAreaVariant;
    /**
     * While the default size is the normal one.we can apply other sizes like medium,small,large
     */
    readonly size?: TextAreaSize;
    /**
     * specifies that the size of the textarea is fixed
     */
    readonly fixedSize?: boolean;
    /**
     * specifies the width of the textarea
     */
    readonly fullWidth?: boolean;
    readonly inline?: boolean;
    readonly state?: TextAreaState;
    /**
     * you can set the height of the textarea
     */
    readonly rows?: number;
}
export declare const TextArea: React.FC<TextAreaProps>;
export {};
//# sourceMappingURL=TextArea.d.ts.map