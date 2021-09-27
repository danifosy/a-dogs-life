import React from 'react';
import type { ReactNode } from 'react';
import styles from './SubmitButton.module.css';
import Typography from '../Typography/Typography';
import ArrowRightIcon from '../../../assets/ArrowRight';
import CameraIcon from '../../../assets/Camera';
import LetterIcon from '../../../assets/Letter';
import SafeIcon from '../../../assets/Safe';
import SearchIcon from '../../../assets/Search';
import SendIcon from '../../../assets/Send';
import SignUpIcon from '../../../assets/SignUp';
import UploadIcon from '../../../assets/Upload';

type SubmitButtonProps = {
  icon:
    | 'arrowRight'
    | 'camera'
    | 'letter'
    | 'safe'
    | 'search'
    | 'send'
    | 'signup'
    | 'upload';
  children: ReactNode;
};

export default function SubmitButton({
  icon,
  children,
}: SubmitButtonProps): JSX.Element {
  let iconElement;
  switch (icon) {
    case 'arrowRight':
      iconElement = <ArrowRightIcon />;
      break;
    case 'camera':
      iconElement = <CameraIcon />;
      break;
    case 'letter':
      iconElement = <LetterIcon />;
      break;
    case 'safe':
      iconElement = <SafeIcon />;
      break;
    case 'search':
      iconElement = <SearchIcon />;
      break;
    case 'send':
      iconElement = <SendIcon />;
      break;
    case 'signup':
      iconElement = <SignUpIcon />;
      break;
    case 'upload':
      iconElement = <UploadIcon />;
      break;
  }
  return (
    <button className={styles.submitButton}>
      {iconElement}
      <Typography size="s">{children}</Typography>
    </button>
  );
}
