import * as Icons from '~assets/icons';

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  fill?: string;
}

export default function Icon({
  name,
  width = 20,
  height = 20,
  fill = 'var(--color-black)',
}: IconProps) {
  const IconSvg = Icons[name];

  return <IconSvg width={width} height={height} fill={fill} />;
}
