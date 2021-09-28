import React from 'react';

const SendIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.7706 0.218415C17.6694 0.117675 17.5415 0.0479261 17.402 0.0173698C17.2625 -0.0131865 17.1172 -0.0032804 16.9831 0.0459235L0.483989 6.04562C0.341698 6.09959 0.219193 6.19557 0.132746 6.32082C0.0462985 6.44606 0 6.59465 0 6.74683C0 6.89901 0.0462985 7.04759 0.132746 7.17284C0.219193 7.29809 0.341698 7.39407 0.483989 7.44804L7.68362 10.3279L10.5635 17.5275C10.6176 17.6636 10.7103 17.7808 10.8303 17.8647C10.9502 17.9487 11.0921 17.9957 11.2384 18C11.39 17.9969 11.537 17.9479 11.6602 17.8596C11.7834 17.7712 11.8769 17.6476 11.9284 17.505L17.9281 1.00587C17.9792 0.873188 17.9915 0.728711 17.9636 0.589288C17.9357 0.449865 17.8688 0.321242 17.7706 0.218415ZM11.2384 15.1501L9.14604 9.90042L12.7384 6.3081L11.6809 5.25066L8.0586 8.87297L2.83887 6.75058L15.9857 2.00332L11.2384 15.1501Z"
        fill="#FBFBFB"
      />
    </svg>
  );
};
export default SendIcon;