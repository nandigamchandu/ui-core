import React from 'react';
import { Helpers } from '../base';
export interface SectionProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    /**
     * To change the spacing
     */
    readonly modifier?: 'medium' | 'large';
}
export declare const Section: React.FC<SectionProps>;
//# sourceMappingURL=Section.d.ts.map