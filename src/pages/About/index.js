import React, { useEffect, useState } from 'react';
import {
  SvgBootStrap,
  SvgC,
  SvgCplusplus,
  SvgCss,
  SvgDjango,
  SvgGit,
  SvgJava,
  SvgJavaScript,
  SvgKotlin,
  SvgMarkdown,
  SvgMysql,
  SvgOracle,
  SvgPhp,
  SvgPython,
  SvgReact,
  SvgSass,
  SvgSpring,
  Svghtml5,
  SvgjQuery,
  Svgjsp,
} from 'Assets/svgs';

import { Chip } from 'Components/molecules';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import SvgDND from 'Assets/svgs/dnd-logo.svg';
import SvgDNDSM from 'Assets/svgs/dnd-logo-sm.svg';
import SvgNaamezip from 'Assets/svgs/naamezip-logo.svg';
import SvgNaamezipSM from 'Assets/svgs/naamezip-logo-sm.svg';
import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames/bind';
import experienceLists from './experience.json';
import moment from 'moment-timezone';
import scrollDownJson from 'Assets/lottie/scroll-down.json';
import styles from './styles.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function About() {
  const { isMobile, isTablet, isdesktop } = useResponsive();
  let careerDate = moment().diff(moment('2020-11-02'), 'months');
  const languages = [
    {
      title: '편해요',
      skills: [
        {
          text: () => {
            return (
              <>
                <SvgReact style={{ fill: '#61DAFB' }} />
                React.js
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgJavaScript style={{ fill: '#F7DF1E' }} />
                JavaScript(ES6+)
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <Svghtml5 style={{ fill: '#E34F26' }} />
                HTML5
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgSass style={{ fill: '#CC6699' }} />
                SASS / <SvgCss style={{ fill: '#1572B6' }} />
                CSS3
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgGit style={{ fill: '#F05032' }} />
                Git
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgOracle style={{ fill: '#F80000' }} />
                Oracle / <SvgMysql style={{ fill: '#4479A1' }} />
                mysql
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgjQuery style={{ fill: '#0769AD' }} />
                jQuery
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgBootStrap style={{ fill: '#7952B3' }} />
                BootStrap
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
      ],
    },
    {
      title: '어느정도 사용할 수 있어요',
      skills: [
        {
          text: () => {
            return (
              <>
                <SvgC style={{ fill: '#A8B9CC' }} />C /
                <SvgCplusplus style={{ fill: '#00599C' }} />
                C++
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgJava className={cx('java')} />
                JAVA
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgDjango style={{ fill: '#092E20' }} />
                Django
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgPython style={{ fill: '#3776AB' }} />
                Python
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <Svgjsp className={cx('java')} />
                JSP
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgMarkdown style={{ fill: '#000' }} />
                Markdown
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
      ],
    },
    {
      title: '사용해봤어요',
      skills: [
        {
          text: () => {
            return (
              <>
                <SvgReact style={{ fill: '#61DAFB' }} />
                React Native
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgKotlin style={{ fill: '#7F52FF' }} />
                Android(Kotlin)
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgSpring style={{ fill: '#6DB33F' }} />
                Spring
              </>
            );
          },
          textColor: '#2b2b2b',
          backgroundColor: '#fffcec',
        },
      ],
    },
  ];
  const tools = [
    {
      title: '편해요',
      skills: [
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Amplitude
              </>
            );
          },
          type: 'analytics',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Redash
              </>
            );
          },
          type: 'analytics',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Google Analytics
              </>
            );
          },
          type: 'analytics',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Google Tag Manager
              </>
            );
          },
          type: 'analytics',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                PostMan
              </>
            );
          },
          type: 'tool',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Slack
              </>
            );
          },
          type: 'tool',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Asana
              </>
            );
          },
          type: 'tool',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Notion
              </>
            );
          },
          type: 'tool',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Figma
              </>
            );
          },
          type: 'tool',
        },
      ],
    },
    {
      title: '어느정도 사용할 수 있어요',
      skills: [
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                AWS - CloudFront
              </>
            );
          },
          type: 'hosting',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                AWS - S3
              </>
            );
          },
          type: 'hosting',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                AWS - Route53
              </>
            );
          },
          type: 'hosting',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Firebase - hosting
              </>
            );
          },
          type: 'hosting',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Sentry
              </>
            );
          },
          type: 'analytics',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Bigin
              </>
            );
          },
          type: 'analytics',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Eclipse
              </>
            );
          },
          type: 'tool',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                SQL Developer
              </>
            );
          },
          type: 'tool',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                MySQL Workbench
              </>
            );
          },
          type: 'tool',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Swagger
              </>
            );
          },
          type: 'tool',
        },
      ],
    },
    {
      title: '사용해봤어요',
      skills: [
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Hot Jar
              </>
            );
          },
          type: 'analytics',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Android Studio
              </>
            );
          },
          type: 'tool',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                Edit Plus
              </>
            );
          },
          type: 'tool',
        },
        {
          text: () => {
            return (
              <>
                {/* <SvgSpring style={{ fill: '#6DB33F' }} /> */}
                PyCharm
              </>
            );
          },
          type: 'tool',
        },
      ],
    },
  ];
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
                textColor="#2b2b2b"
                backgroundColor="#fffcec"
                size="LG"
                className={cx('label', isTablet ? 'captionBD' : 'overlineBD')}
              />
              <a href="https://ko.reactjs.org/">
                <Chip
                  text={`React.js`}
                  textColor="#2b2b2b"
                  backgroundColor="#fffcec"
                  size="LG"
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
      <section className={cx('skill-container')} id="skill">
        <h1 className={cx('headline1BD')}>SKILLS ABILITY</h1>
        <div className={cx('ability-container', 'ability-container-skill')}>
          <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>Language/Framework/Library</h2>
          {languages?.map((language, index) => {
            return (
              <>
                <h3 className={cx(isTablet ? 'headline3MD' : 'title1MD')}>{language?.title}</h3>
                <div className={cx('skill-detail-container')}>
                  {language?.skills?.map((skill, idx) => {
                    return (
                      <Chip
                        text={skill?.text}
                        textColor={skill?.textColor}
                        backgroundColor={skill?.backgroundColor}
                        size="LG"
                        className={cx('label', isTablet ? 'bodyBD' : 'captionBD')}
                      />
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
        <div className={cx('ability-container', 'ability-container-tool')}>
          <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>Tools/Analytics</h2>
          <div className={cx('color-info', 'bodyMD')}>
            <div className={cx('color', 'analytics')} />
            Analytics
            <div className={cx('color', 'tool')} />
            Tool
            <div className={cx('color', 'infra')} />
            Infra/Hosting
          </div>
          {tools?.map((tool, index) => {
            return (
              <>
                <h3 className={cx(isTablet ? 'headline3MD' : 'title1MD')}>{tool?.title}</h3>
                <div className={cx('skill-detail-container')}>
                  {tool?.skills?.map((skill, idx) => {
                    return (
                      <Chip
                        text={skill?.text}
                        textColor="#2b2b2b"
                        backgroundColor={
                          skill?.type === 'analytics'
                            ? '#dbeddb'
                            : skill?.type === 'tool'
                            ? '#e3e2e0'
                            : '#fadec9'
                        }
                        size="LG"
                        className={cx('label', isTablet ? 'bodyBD' : 'captionBD')}
                      />
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </section>
      <section className={cx('career-container')} id="career">
        <h1 className={cx('headline1BD')}>
          CAREER(총 {Math.floor(careerDate / 12)}년 {Math.floor(careerDate % 12)}개월)
        </h1>
        <div className={cx('job-desc-wrapper', 'naamezip-wrapper')}>
          <div className={cx('company-icon', 'naamezip')}>
            {isTablet ? <SvgNaamezip /> : <SvgNaamezipSM />}
            <div>
              <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>
                <a href="https://naamezip.com" target="_blank">
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
              <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>
                <a href="https://www.dnd.ac/" target="_blank">
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
      <section className={cx('education-container')} id="education">
        <h1 className={cx('headline1BD')}>EDUCATION</h1>
        <div className={cx('education-wrapper')}>
          <div className={cx('school', isTablet ? 'headline2SB' : 'title1BD')}>방송통신대학교</div>
          <div className={cx('school-info')}>
            <h4 className={cx(isTablet ? 'title2BD' : 'bodyBD')}>컴퓨터 과학과</h4>
            <h5 className={cx(isTablet ? 'title2RG' : 'bodyRG')}>2021년 입학 - 재학 중</h5>
          </div>
        </div>
        <div className={cx('education-wrapper')}>
          <div className={cx('school', isTablet ? 'headline2SB' : 'title1BD')}>
            미림여자정보과학고등학교
          </div>
          <div className={cx('school-info')}>
            <h4 className={cx(isTablet ? 'title2BD' : 'bodyBD')}>뉴미디어 소프트웨어과</h4>
            <h5 className={cx(isTablet ? 'title2RG' : 'bodyRG')}>2018년 입학 - 2021년 2월 졸업</h5>
          </div>
        </div>
      </section>
      <section className={cx('experience-container')} id="experience">
        <h1 className={cx('headline1BD')}>EXPERIENCE</h1>
        <div>
          {experienceLists?.map((item, index) => {
            return (
              <Link
                key={`experience-link-${index}`}
                to={{
                  pathname: `/experience/${item?.id}`,
                  state: { modal: true },
                }}
                className={cx('experience-item-container')}
              >
                <h3 className={cx(isTablet ? 'title2BD' : 'bodyBD')}>{item?.title}</h3>
                <h4 className={cx(isTablet ? 'bodyRG' : 'captionRG')}> {item?.description}</h4>
                <div className={cx('gotoButton', isTablet ? 'captionMD' : 'overlineMD')}>
                  자세히 보기 &gt;
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default About;

export const path = '/about';
