declare type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7';
declare type TextAlignment = 'centered' | 'justified' | 'left' | 'right';
declare type TextResponsiveSize = 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen' | 'fullhd';
declare type TextResponsiveAlignment = 'mobile' | 'tablet' | 'touch' | 'desktop' | 'widescreen' | 'fullhd';
declare type TextColor = 'white' | 'black' | 'light' | 'dark' | 'primary' | 'info' | 'link' | 'success' | 'warning' | 'danger' | 'black-bis' | 'black-ter' | 'grey-darker' | 'grey-dark' | 'grey' | 'grey-light' | 'grey-lighter' | 'white-ter' | 'white-bis';
declare type TextWeight = 'light' | 'normal' | 'semiBold' | 'bold';
declare type TextTransformation = 'capitalized' | 'lowercase' | 'uppercase' | 'italic';
export interface TextHelpers {
    readonly textColor?: TextColor;
    readonly textBackgroundColor?: TextColor;
    readonly textSize?: TextSize;
    readonly textAlignment?: TextAlignment;
    readonly textTransformation?: TextTransformation;
    readonly textWeight?: TextWeight;
    readonly textResponsiveSize?: TextResponsiveSize;
    readonly textResponsiveAlignment?: TextResponsiveAlignment;
}
export declare function textHelpersClasses({ textColor, textBackgroundColor, textSize, textAlignment, textTransformation, textWeight, textResponsiveSize, textResponsiveAlignment, }: TextHelpers): string;
export declare type TextHelpersRemoved<T> = Omit<T, keyof TextHelpers>;
export declare function removeTextHelpers<T extends TextHelpers>(props: T): TextHelpersRemoved<T>;
export {};
//# sourceMappingURL=textHelpers.d.ts.map