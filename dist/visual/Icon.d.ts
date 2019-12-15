import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Helpers } from '../base';
declare type IconDirection = 'left' | 'right';
export interface IconProps extends FontAwesomeIconProps, Helpers {
    readonly direction?: IconDirection;
}
export declare const Icon: React.FC<IconProps>;
export {};
//# sourceMappingURL=Icon.d.ts.map