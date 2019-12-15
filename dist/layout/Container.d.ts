import React from 'react';
import { Helpers } from '../base';
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    /**
     * The container width for each display screen
     */
    readonly breakpoint?: 'widescreen' | 'fullhd';
    /**
     * If you don't want to have a maximum width but want to keep the 32px margin on the left and right sides,add fluid
     */
    readonly fluid?: boolean;
}
export declare const Container: React.FC<ContainerProps>;
//# sourceMappingURL=Container.d.ts.map