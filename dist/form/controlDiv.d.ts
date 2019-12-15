import React from 'react';
import { Helpers } from '../base';
import { ControlHelpers } from './controlHelpers';
import { IconHelpers } from './iconHelpers';
export interface AllControlHelpers extends Helpers, ControlHelpers, IconHelpers {
}
declare type ControlType = 'button' | 'input' | 'select' | 'checkbox' | 'radio' | 'textarea' | 'file';
export interface ControlDivProps extends React.AllHTMLAttributes<HTMLElement>, AllControlHelpers {
    readonly as?: ControlType;
}
export declare const ControlDiv: React.FC<ControlDivProps>;
export {};
//# sourceMappingURL=controlDiv.d.ts.map