import React from 'react';
import styles from './HeartIcon.module.css';

const HeartIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="26"
      height="22"
      viewBox="0 0 26 22"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
      {...props}
    >
      <path
        d="M24 7.54601C24 13.5913 18.72 18.57 13 20.3213C6.84 18.57 2 13.5913 2 7.54601C2 2.37001 9.48 -0.752804 13 5.37692C16.52 -0.752804 24 2.37 24 7.54601Z"
        stroke="#DD6E8F"
        stroke-width="3"
      />
    </svg>
  );
};

export default HeartIcon;
