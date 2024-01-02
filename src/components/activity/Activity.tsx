import { ActivityProps } from '../../types';

const Activity = ({ text, time }: ActivityProps) => {
  return (
    <li>
      <div>
        <p>{text}</p>
        <time>{time}</time>
      </div>
    </li>
  );
};

export default Activity;
