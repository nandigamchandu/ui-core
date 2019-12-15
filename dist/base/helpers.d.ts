import { ClassNameArg } from './classNames';
import { TextHelpers, TextHelpersRemoved } from './textHelpers';
interface CommonHelpers {
    readonly floating?: 'clearfix' | 'pulled-left' | 'pulled-right';
    readonly marginLess?: boolean;
    readonly paddingLess?: boolean;
    readonly clipped?: boolean;
    readonly radiusLess?: boolean;
    readonly shadowLess?: boolean;
    readonly unSelectable?: boolean;
    readonly invisible?: boolean;
    readonly srOnly?: boolean;
}
declare type CommonHelpersRemoved<T> = Omit<T, keyof CommonHelpers>;
declare type Display = 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';
declare type ResponsiveModifier = 'mobile' | 'tablet-only' | 'desktop-only' | 'widescreen-only' | 'touch' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd';
interface ResponsiveHelpers {
    readonly display?: Display;
    readonly breakpoint?: ResponsiveModifier;
    readonly responsiveVisibility?: boolean;
}
declare type ResponsiveHelpersRemoved<T> = Omit<T, keyof ResponsiveHelpers>;
export interface Helpers extends CommonHelpers, ResponsiveHelpers, TextHelpers {
}
export declare const helpersClasses: (helpers: Helpers) => string;
export declare type HelpersRemoved<T> = CommonHelpersRemoved<ResponsiveHelpersRemoved<TextHelpersRemoved<T>>>;
export declare const removeHelpers: <T extends Helpers>(props: T) => HelpersRemoved<T>;
interface ClassNamesHelperPropsArg extends Helpers {
    readonly className?: string;
}
export declare const classNamesHelper: (props: ClassNamesHelperPropsArg, ...args: ClassNameArg[]) => string;
export {};
//# sourceMappingURL=helpers.d.ts.map