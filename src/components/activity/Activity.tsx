const Activity = ({ text, time }) => {
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
