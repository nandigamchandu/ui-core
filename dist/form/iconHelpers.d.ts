import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ControlSize } from './controlHelpers';
export interface IconHelpers {
    readonly leftIcon?: IconDefinition;
    readonly iconSize?: ControlSize;
    readonly rightIcon?: IconDefinition;
}
export declare type IconHelpersRemoved<T> = Omit<T, keyof IconHelpers>;
export declare function removeIconHelpers<T extends IconHelpers>(props: T): IconHelpersRemoved<T>;
//# sourceMappingURL=iconHelpers.d.ts.map