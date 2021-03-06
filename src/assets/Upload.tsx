import React from 'react';

const UploadIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.1 9.28125H9.9V4.21875H12.6L9 0L5.4 4.21875H8.1V9.28125Z"
        fill="#FBFBFB"
      />
      <path
        d="M16.2 11.8125H1.8V5.90625H0V11.8125C0 12.7432 0.8073 13.5 1.8 13.5H16.2C17.1927 13.5 18 12.7432 18 11.8125V5.90625H16.2V11.8125Z"
        fill="#FBFBFB"
      />
    </svg>
  );
};
export default UploadIcon;
