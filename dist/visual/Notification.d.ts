import React from 'react';
import { Helpers } from '../base';
declare type NotificationVariant = 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'white' | 'black';
export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    /** To style the notification element by appending color(variant) */
    readonly variant?: NotificationVariant;
}
export declare const Notification: React.FC<NotificationProps>;
export {};
//# sourceMappingURL=Notification.d.ts.map