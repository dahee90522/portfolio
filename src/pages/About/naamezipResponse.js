import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import classNames from 'classnames/bind';
import styles from './naamezipResponse.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function naamezipResponse({ match }) {
  const { isMobile, isTablet, isdesktop } = useResponsive();
  return (
    <div className={cx('naamezip-response-container')}>
      <span className={cx(isTablet ? 'bodyRG' : 'captionRG')}>남의집 프로젝트</span>
      <h1 className={cx('headline1BD')}>반응형 웹</h1>
      <img
        className={cx('code-image')}
        src={'https://hh-image-bucket.s3.ap-northeast-2.amazonaws.com/response_code.png'}
      />
    </div>
  );
}
export default naamezipResponse;

export const path = '/about/naamezip/response';
