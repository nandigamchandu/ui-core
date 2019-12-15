import React from 'react';
import { Helpers } from '../base';
export interface ButtonsGroupProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    /**
     * Specifies the alignment of the buttons
     */
    readonly alignment?: 'centered' | 'right';
    /**
     * To attach buttons together
     */
    readonly addons?: boolean;
    readonly size?: 'small' | 'medium' | 'large';
}
export declare const ButtonsGroup: React.FC<ButtonsGroupProps>;
//# sourceMappingURL=ButtonsGroup.d.ts.map