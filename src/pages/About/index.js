import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import Lottie from 'react-lottie-player';
import SvgDND from 'Assets/svgs/dnd-logo.svg';
import SvgDNDSM from 'Assets/svgs/dnd-logo-sm.svg';
import SvgNaamezip from 'Assets/svgs/naamezip-logo.svg';
import SvgNaamezipSM from 'Assets/svgs/naamezip-logo-sm.svg';
import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames/bind';
import moment from 'moment-timezone';
import scrollDownJson from 'Assets/lottie/scroll-down.json';
import styles from './styles.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function About() {
  const { isMobile, isTablet, isdesktop } = useResponsive();
  let careerDate = moment().diff(moment('2020.11.02'), 'months');
  return (
    <div className={cx('about-container')}>
      <section className={cx('dahee-container')} id="dahee">
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
              2021년 2월에 미림여자정보과학고등학교를 졸업 후 2021년 7월 방송통신대학교
              컴퓨터과학과에 입학하여 재학중입니다. <br />
              프론트엔드는 2019년에 HTML5, CSS3, JAVASCRIPT를 시작으로 현재는 React.js, SASS를
              사용하고 있습니다.
            </div>
          </div>
        </div>
      </section>
      <section className={cx('career-container')}>
        <h1 className={cx('headline1BD')}>
          CAREER(총 {Math.floor(careerDate / 12)}년 {Math.floor(careerDate % 12)}개월)
        </h1>
        <div className={cx('job-desc-wrapper', 'naamezip-wrapper')}>
          <div className={cx('company-icon', 'naamezip')}>
            {isTablet ? <SvgNaamezip /> : <SvgNaamezipSM />}
            <div>
              <h2 className={cx(isTablet ? 'headline2BD' : 'title1BD')}>
                <a href="https://naamezip.com" target={'_blank'}>
                  남의집
                </a>
              </h2>
              <h3 className={cx(isTablet ? 'headline3MD' : 'title1MD')}>
                2020년 11월 <br />- 2023년 3월
              </h3>
            </div>
          </div>
          <div className={cx('activicy-description', 'bodyMD')}>
            <ol>
              <li className={cx('bodyBD')}>홈페이지 전반 ui/ux 개선 및 유지보수</li>
              <ul>
                <li>
                  디자이너와의 커뮤니케이션을 통해 유지보수 및 홈페이지의 페이지들을 개발했습니다.
                </li>
                <li>마케팅 팀, 디자이너와 협력하여 제휴 및 기획전 랜딩페이지를 제작했습니다.</li>
                <li>
                  제휴 및 기획전 랜딩페이지로 A/B 테스트를 진행하여 더 적합한 랜딩페이지로
                  변경하였습니다.
                </li>
              </ul>
              <li className={cx('bodyBD')}>반응형 웹 개선</li>
              <ul>
                <li>
                  기존에는 모바일과 데스크탑 사이즈밖에 없었지만 태블릿을 추가하여 3가지의 디바이스
                  사이즈를 고려하여 스타일과 레이아웃이 변경될 수 있도록 하였습니다.
                </li>
                <li>
                  sass의 mixin과 include를 사용하여 사이즈를 재사용하여 지정할 수 있도록 했습니다.
                </li>
              </ul>
              <li className={cx('bodyBD')}>홈페이지 분석</li>
              <ol>
                <li>마케팅 팀과 협업하여 아래의 CRM/분석 툴을 설치 했습니다.</li>
                <ol>
                  <li>Amplitude</li>
                  <li>Bigin</li>
                  <li>Facebook 픽셀</li>
                  <li>Google Tag Manager</li>
                  <li>Google Analytics</li>
                </ol>
                <li>운영 팀과 협업하여 아래의 메신저을 설치 했습니다.</li>
                <ol>
                  <li>Channel Talk(채널톡)</li>
                  <li>Happy Talk(해피톡)</li>
                </ol>
              </ol>
              <li className={cx('bodyBD')}>데이터 시각화</li>
              <ul>
                <li>
                  지표에 필요한 데이터를 database에서 추출한 결과를 통해 차트, 표 등으로 데이터
                  시각화를 했습니다.
                </li>
                <li>redash를 사용하여 데이터 시각화를 하였습니다.</li>
              </ul>
              <li className={cx('bodyBD')}>컴포넌트 개발</li>
              <ul>
                <li>
                  infinity scroll, pagination 등 컴포넌트를 개발하여 재사용할 수 있도록 하였습니다.
                </li>
              </ul>
              <li className={cx('bodyBD')}>애자일(Agile)</li>
              <ol>
                <li>2주 단위로 스프린트를 진행했습니다.</li>
                <li>스프린트 마지막 날에 다음 스프린트를 위한 플래닝 회의를 했습니다.</li>
              </ol>
            </ol>
          </div>
        </div>
        <div className={cx('job-desc-wrapper', 'dnd-wrapper')}>
          <div className={cx('company-icon')}>
            {isTablet ? <SvgDND /> : <SvgDNDSM />}
            <div>
              <h2 className={cx(isTablet ? 'headline2BD' : 'title1BD')}>
                <a href="https://www.dnd.ac/" target={'_blank'}>
                  DND
                </a>
              </h2>
              <h3 className={cx(isTablet ? 'headline3MD' : 'title1MD')}>
                2022년 6월 <br />- 현재
              </h3>
            </div>
          </div>
          <div className={cx('activicy-description', 'bodyMD')}>
            <ol>
              <li className={cx('bodyBD')}>DND 운영</li>
              <ul>
                <li>사이드프로젝트 7기 지원자 선발</li>
                <li>사이드프로젝트 8기 지원자 선발</li>
                <li>조 멘토링(2022.07 - )</li>
              </ul>
              <li className={cx('bodyBD')}>개발 세미나 계획</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;

export const path = '/about';
