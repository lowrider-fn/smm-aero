
export interface TextProps {
  size?: keyof typeof TextSize;
  weight?: 200 | 300 | 400 | 500;
  text?: string | number;
  margin?: string;
  tag?: keyof typeof TextTag;
}

export enum TextSize {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  l = 'l',
  m = 'm',
  s = 's',
  xs = 'xs'
}

export enum TextTag {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  p = 'p',
  span = 'span'
}
