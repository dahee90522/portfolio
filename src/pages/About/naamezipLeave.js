import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import classNames from 'classnames/bind';
import styles from './naamezipLeave.module.scss';
import { useResponsive } from 'Utils/responsive';

const baseImageUrl = 'https://hh-image-bucket.s3.ap-northeast-2.amazonaws.com/';
const cx = classNames.bind(styles);
function naamezipLeave({ match }) {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <div className={cx('naamezip-leave-container')}>
      <span className={cx(isTablet ? 'bodyRG' : 'captionRG')}>남의집 프로젝트</span>
      <h1 className={cx('headline1BD')}>이탈 플로우 정리</h1>
      <h2 className={cx(isTablet ? 'title1MD' : 'title2MD')}>
        유저들이 어느 시점에서 이탈이 되는지 이탈포인트를 예상하여 유저플로우를 정리
      </h2>
      <img src={baseImageUrl + 'leave_flow.png?w=400'} />
      <a href={baseImageUrl + 'leave_flow.png'}>&lt;크게 보기&gt;</a>
      <h2 className={cx(isTablet ? 'title1MD' : 'title2MD')}>
        예상한 이탈포인트를 이용해 리대시와 앰플리튜드를 사용하여 이탈률을 측정
      </h2>
      <div className={cx('image-flex-container')}>
        <img src={baseImageUrl + 'redash_leave1.png?w=400'} />
        <img src={baseImageUrl + 'amplitude_leave.png?w=400'} />
      </div>
      <h2 className={cx(isTablet ? 'title1MD' : 'title2MD')}>
        이탈률이 높다고 판단되는 부분을 개선해서 이탈률을 감소시킴, 월별로 이탈률을 기록하여 해당
        액션에 대한 효과를 확인
      </h2>
      <img src={baseImageUrl + 'sheet_leave3.png?w=400'} />
    </div>
  );
}
export default naamezipLeave;

export const path = '/about/naamezip/leave';
