import React from 'react';
import { Helpers } from './helpers';
export interface DivProps extends React.AllHTMLAttributes<HTMLElement>, Helpers {
    readonly as?: keyof React.ReactHTML;
}
export declare function El({ as, className, ...props }: DivProps): JSX.Element;
//# sourceMappingURL=el.d.ts.map