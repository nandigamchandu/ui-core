import React from 'react';
import { Helpers } from '../base';
declare type MessageVariant = 'dark' | 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'white' | 'black';
declare type MessageSize = 'small' | 'medium' | 'large';
export interface MessageProps extends React.HTMLAttributes<HTMLElement>, Helpers {
    /**
     * style the Message element by appending the color(variant)
     */
    readonly variant?: MessageVariant;
    /**
     * Resize the content of the message
     */
    readonly size?: MessageSize;
}
export declare const Message: React.FC<MessageProps>;
export interface MessageHeaderProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const MessageHeader: React.FC<MessageHeaderProps>;
export interface MessageBodyProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const MessageBody: React.FC<MessageBodyProps>;
export {};
//# sourceMappingURL=Message.d.ts.map