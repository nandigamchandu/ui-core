import React from 'react';
export interface ValueChangeEvent<Value> {
    readonly name?: string;
    readonly value?: Value;
}
export interface ControlledProps<Value> {
    readonly name?: string;
    readonly value?: Value;
    readonly readOnly?: boolean;
    onChange?(event: ValueChangeEvent<Value>): void;
}
export declare type UncontrolledProps<Value, CP extends ControlledProps<Value>> = CP & {
    readonly defaultValue?: Value;
    readonly component: React.FC<Omit<CP, 'defaultValue' | 'component'>>;
};
export declare function Uncontrolled<Value, CP extends ControlledProps<Value>>(args: UncontrolledProps<Value, CP>): JSX.Element;
//# sourceMappingURL=Uncontrolled.d.ts.map