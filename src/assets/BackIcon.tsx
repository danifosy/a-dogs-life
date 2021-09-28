import React from 'react';

const BackIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="31"
      height="29"
      viewBox="0 0 31 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 14.3261L29 14.3261M2 14.3261L13.8125 1.99999M2 14.3261L13.8125 26.6522"
        stroke="#DD6E8F"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackIcon;
