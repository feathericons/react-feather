import React from 'react';
import icons from './iconsObject';
import { IconComponentProps } from './types';

export const Icon = ({ name, ...props }: IconComponentProps) => {
  const IconComponent = icons[name];
  return <IconComponent {...props} />;
};
