import { IconAccept, IconClose, IconEye, IconEyeCrossed, IconUser } from './assets';
import { DEFAULT_ICON_SIZE } from './constants';
import { IconGlyph } from './types';

import type { IconProps } from './types';

export const Icon = ({
  icon,
  className = '',
  width = DEFAULT_ICON_SIZE,
  height = DEFAULT_ICON_SIZE
}: PropsWithClassName<IconProps>) => {
  const props = {
    fill: 'currentColor',
    className,
    width,
    height
  };

  switch (icon) {
    case IconGlyph.eye: return <IconEye { ...props } />;

    case IconGlyph.eyeCrossed: return <IconEyeCrossed { ...props } />;

    case IconGlyph.user: return <IconUser { ...props } />;

    case IconGlyph.close: return <IconClose { ...props } />;

    case IconGlyph.accept: return <IconAccept { ...props } />;

    default: return null;
  }
};
