import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import Lottie from 'react-lottie-player';
import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames/bind';
import scrollDownJson from 'Assets/lottie/scroll-down.json';
import styles from './styles.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function Main() {
  const { isMobile, isTablet, isdesktop } = useResponsive();
  return <div className={cx('main-container')}></div>;
}
export default Main;

export const path = '/';
