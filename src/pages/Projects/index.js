import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function Projects() {
  const { isMobile, isTablet, isdesktop } = useResponsive();
  return <div className={cx('projects-container')}></div>;
}
export default Projects;

export const path = '/projects';
