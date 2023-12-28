import { IconProps } from '../../types';

import './icon.scss';

const Icon = ({ src, className }: IconProps) => {
  return <img src={src} alt=' icon' className={className} />;
};

export default Icon;
