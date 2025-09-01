export interface SnapPoint {
  fraction: number;
  height: number;
}

export type DrawerDirection = 'top' | 'bottom' | 'left' | 'right';

export type AnyFunction = (...args: any) => any;

export type Direction = 'ltr' | 'rtl';

/**
 * if padding or margin is number, it will be in px
 * if padding or margin is true, it will be var(--scrollbar-width)
 * otherwise, it will be passed string
 */
export type ScrollBodyOption = {
  padding?: boolean | number | string;
  margin?: boolean | number | string;
};
