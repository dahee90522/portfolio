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
  return (
    <div className={cx('main-container')}>
      <div className={cx('introduce-container')}>
        <div className={cx('content-wrapper')}>
          <TypeAnimation
            sequence={[
              `DAHEE`,
              300,
              `DAHEE
PORTFOLIO`,
            ]}
            wrapper="div"
            cursor={false}
            className={cx('typing-area', 'headline1BD')}
          />
        </div>

        <Lottie animationData={scrollDownJson} play loop={true} className={cx('lottie-wrapper')} />
      </div>

      <div className={cx('index-container')}>
        <ul className={cx(isTablet ? 'title1MD' : 'bodyMD')}>
          <li>ABOUT</li>
          <li>SKILLS&ABILITY</li>
          <li>CAREER</li>
          <li>PROJECT</li>
          <li>EDUCATION</li>
          <li>CERTIFICATE</li>
          <li>EXPERIENCE</li>
          <div></div>
        </ul>
      </div>

      <section className={cx('about-container')} id="about">
        <div className={cx('inner-container')}>
          <div className={cx('left-content')}>
            <img
              src={`https://hh-image-bucket.s3.ap-northeast-2.amazonaws.com/my-image.png`}
              alt="dahee profile image"
            />
          </div>
          <div className={cx('left-content')}>
            <div className={cx('chip-container')}>
              <Chip
                text={`Frontend-Devloper`}
                textColor={'#2b2b2b'}
                backgroundColor={'#fffcec'}
                size={'LG'}
                className={cx('label', isTablet ? 'captionBD' : 'overlineBD')}
              />
              <a href="https://ko.reactjs.org/">
                <Chip
                  text={`React.js`}
                  textColor={'#2b2b2b'}
                  backgroundColor={'#fffcec'}
                  size={'LG'}
                  className={cx('label', isTablet ? 'captionBD' : 'overlineBD')}
                />
              </a>
            </div>
            <div className={cx(isTablet ? 'title2RG' : 'bodyRG')}>
              안녕하세요. 개발과 지식의 성장을 즐기는 개발자 황다희 입니다.
              <br />
              2021년 2월에 미림여자정보과학고등학교를 졸업 후 2021년 7월 방송통신대학교 컴퓨터
              과학과에 입학했습니다. <br />
              프론트엔드는 2019년에 HTML5, CSS3, JAVASCRIPT를 시작으로 현재는 react.js, SCSS를
              사용하고 있습니다.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Main;

export const path = '/';
