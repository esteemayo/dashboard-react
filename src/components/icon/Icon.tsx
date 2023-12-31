import { IconProps } from '../../types';

const Icon = ({ src, className }: IconProps) => {
  return <img src={src} alt='icon' className={className} />;
};

export default Icon;
