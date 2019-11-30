import icons from './iconsObject';

export type IconName = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: string | number;
}

export interface IconComponentProps extends IconProps {
  name: IconName;
}
