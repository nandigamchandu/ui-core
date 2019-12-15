import React from 'react';
import { Helpers } from '../base';
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
    readonly active?: boolean;
    readonly noClose?: boolean;
    onModalClosed?(): void;
}
export declare const Modal: React.FC<ModalProps>;
export interface ModalCardProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const ModalCard: React.FC<ModalCardProps>;
export interface ModalCardHeadProps extends React.HTMLAttributes<HTMLHeadElement>, Helpers {
}
export declare const ModalCardHead: React.FC<ModalCardHeadProps>;
export interface ModalCardTitleProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const ModalCardTitle: React.FC<ModalCardTitleProps>;
export interface ModalCardBodyProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const ModalCardBody: React.FC<ModalCardBodyProps>;
export interface ModalCardFootProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const ModalCardFoot: React.FC<ModalCardFootProps>;
export interface ModalBackgroundProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const ModalBackground: React.FC<ModalBackgroundProps>;
export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
}
export declare const ModalContent: React.FC<ModalContentProps>;
//# sourceMappingURL=Modal.d.ts.map