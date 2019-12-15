import React from 'react';
import { Helpers } from '../base';
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement>, Helpers {
    /**
     * Add borders to all the cells
     */
    readonly bordered?: boolean;
    /**
     * Add stripes to the table
     */
    readonly striped?: boolean;
    /**
     * Makes the cells narrower
     */
    readonly narrow?: boolean;
    /**
     * Add hover effect on each row
     */
    readonly hoverable?: boolean;
    /**
     * For Fullwidth table
     */
    readonly fullWidth?: boolean;
}
export declare const Table: React.FC<TableProps>;
export interface TableHeadProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const TableHead: React.FC<TableHeadProps>;
export interface TableBodyProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const TableBody: React.FC<TableBodyProps>;
export interface TableFootProps extends React.HTMLAttributes<HTMLElement>, Helpers {
}
export declare const TableFoot: React.FC<TableFootProps>;
export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement>, Helpers {
    readonly selected?: boolean;
}
export declare const Tr: React.FC<TrProps>;
declare type ThVariant = 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'white' | 'black' | 'dark' | 'light';
export interface ThProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement>, Helpers {
    /**
     * To style the Th element by appending color(variant)
     */
    readonly variant?: ThVariant;
    /**
     * To select the cell
     */
    readonly selected?: boolean;
    /**
     * Makes the cell narrower
     */
    readonly narrow?: boolean;
}
export declare const Th: React.FC<ThProps>;
declare type TdVariant = 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'white' | 'black' | 'dark' | 'light';
export interface TdProps extends React.TdHTMLAttributes<HTMLTableDataCellElement>, Helpers {
    /**
     * To style the Th element by appending color(variant)
     */
    readonly variant?: TdVariant;
    /**
     * To select the cell
     */
    readonly selected?: boolean;
    /**
     * Makes the cell narrower
     */
    readonly narrow?: boolean;
}
export declare const Td: React.FC<TdProps>;
export {};
//# sourceMappingURL=Table.d.ts.map