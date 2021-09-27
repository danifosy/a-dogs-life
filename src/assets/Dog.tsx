import React from 'react';

const DogIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="40"
      height="25"
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M38 13H2M38 23H12M38 2L22 2"
        stroke="#DD6E8F"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default DogIcon;
