import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface ControlHelpers {
    readonly loading?: boolean;
    readonly expanded?: boolean;
    readonly fullWidth?: boolean;
    readonly ctrlSize?: ControlSize;
    readonly leftIcon?: IconDefinition;
    readonly rightIcon?: IconDefinition;
    readonly noControl?: true;
}
export declare type ControlSize = 'small' | 'medium' | 'large';
declare type ControlClassesArgs = ControlHelpers;
export declare const controlClasses: (props: ControlClassesArgs) => string;
export declare type ControlHelpersRemoved<T> = Omit<T, keyof ControlHelpers>;
export declare const removeControlHelpers: <T extends ControlHelpers>(props: T) => ControlHelpersRemoved<T>;
export {};
//# sourceMappingURL=controlHelpers.d.ts.map