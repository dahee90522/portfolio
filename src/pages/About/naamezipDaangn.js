import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import classNames from 'classnames/bind';
import styles from './naamezipDaangn.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function naamezipDaangn({ match }) {
  const { isMobile, isTablet, isdesktop } = useResponsive();

  return (
    <div className={cx('naamezip-component-container')}>
      <span className={cx(isTablet ? 'bodyRG' : 'captionRG')}>남의집 프로젝트</span>
      <h1 className={cx('headline1BD')}>당근마켓 미니앱 개발</h1>
    </div>
  );
}
export default naamezipDaangn;

export const path = '/about/naamezip/miniapp';
