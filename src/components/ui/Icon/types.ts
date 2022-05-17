export interface IconProps {
  icon: keyof typeof IconGlyph;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export enum IconGlyph {
  accept = 'accept',
  close = 'close',
  eye = 'eye',
  eyeCrossed = 'eyeCrossed',
  user = 'user'
}
