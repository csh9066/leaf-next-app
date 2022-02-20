const Check = ({ className = "", ...props }) => {
  return (
    <svg
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M19.4 2L7.4375 13.9625L2 8.525"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
