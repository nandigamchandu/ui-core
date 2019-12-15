import React from 'react';
import { Helpers } from '../base';
declare type TagsAlignment = 'centered' | 'right';
export interface TagsProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    /**
     * alters the alignment of the tags
     */
    readonly alignment?: TagsAlignment;
    /**
     * attach tags together
     */
    readonly addons?: boolean;
}
export declare const Tags: React.FC<TagsProps>;
export {};
//# sourceMappingURL=Tags.d.ts.map