import { Link, withRouter } from 'react-router-dom';
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
  SvgNextjs,
  SvgOracle,
  SvgPhp,
  SvgPython,
  SvgReact,
  SvgSass,
  SvgSpring,
  SvgStyledComponents,
  Svghtml5,
  SvgjQuery,
  Svgjsp,
} from 'Assets/svgs';

import { Chip } from 'Components/molecules';
import Lottie from 'react-lottie-player';
import SvgDND from 'Assets/svgs/dnd-logo.svg';
import SvgDNDSM from 'Assets/svgs/dnd-logo-sm.svg';
import SvgDanble from 'Assets/svgs/danble-logo.svg';
import SvgDanbleSm from 'Assets/svgs/danble-logo-sm.svg';
import SvgNaamezip from 'Assets/svgs/naamezip-logo.svg';
import SvgNaamezipSM from 'Assets/svgs/naamezip-logo-sm.svg';
import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames/bind';
import experienceLists from './experience.json';
import moment from 'moment-timezone';
import scrollDownJson from 'Assets/lottie/scroll-down.json';
import styles from './styles.module.scss';
import { useResponsive } from 'Utils/responsive';

const baseImageUrl = 'https://hh-image-bucket.s3.ap-northeast-2.amazonaws.com/';
const cx = classNames.bind(styles);
function About({ history, location }) {
  let careerDate = moment('2023-03-31').diff(moment('2020-11-02'), 'months');
  const [isModalOpen, setIsModalOpen] = useState(!!location?.state?.isModalOpen);
  const { isMobile, isTablet, isDesktop } = useResponsive();
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
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgNextjs style={{ fill: '#000' }} />
                Next.js
              </>
            );
          },
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgCss style={{ fill: '#1572B6' }} />
                CSS3
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgSass style={{ fill: '#CC6699' }} />
                SASS
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgStyledComponents />
                styled components
              </>
            );
          },
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
          textColor: '#1b1b1e',
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
            return <>Amplitude</>;
          },
          type: 'analytics',
        },
        {
          text: () => {
            return <>Redash</>;
          },
          type: 'analytics',
        },
        {
          text: () => {
            return <>Google Analytics</>;
          },
          type: 'analytics',
        },
        {
          text: () => {
            return <>Google Tag Manager</>;
          },
          type: 'analytics',
        },
        {
          text: () => {
            return <>PostMan</>;
          },
          type: 'tool',
        },
        {
          text: () => {
            return <>Slack</>;
          },
          type: 'tool',
        },
        {
          text: () => {
            return <>Asana</>;
          },
          type: 'tool',
        },
        {
          text: () => {
            return <>Notion</>;
          },
          type: 'tool',
        },
        {
          text: () => {
            return <>Figma</>;
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
            return <>Vercel</>;
          },
          type: 'hosting',
        },
        {
          text: () => {
            return <>AWS - CloudFront</>;
          },
          type: 'hosting',
        },
        {
          text: () => {
            return <>AWS - S3</>;
          },
          type: 'hosting',
        },
        {
          text: () => {
            return <>AWS - Route53</>;
          },
          type: 'hosting',
        },
        {
          text: () => {
            return <>Firebase - hosting</>;
          },
          type: 'hosting',
        },
        {
          text: () => {
            return <>Sentry</>;
          },
          type: 'analytics',
        },
        {
          text: () => {
            return <>Bigin</>;
          },
          type: 'analytics',
        },
        {
          text: () => {
            return <>Eclipse</>;
          },
          type: 'tool',
        },
        {
          text: () => {
            return <>SQL Developer</>;
          },
          type: 'tool',
        },
        {
          text: () => {
            return <>MySQL Workbench</>;
          },
          type: 'tool',
        },
        {
          text: () => {
            return <>Swagger</>;
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
            return <>Hot Jar</>;
          },
          type: 'analytics',
        },
        {
          text: () => {
            return <>Android Studio</>;
          },
          type: 'tool',
        },
        {
          text: () => {
            return <>Edit Plus</>;
          },
          type: 'tool',
        },
        {
          text: () => {
            return <>PyCharm</>;
          },
          type: 'tool',
        },
      ],
    },
  ];
  const workingPage = [
    // { coverImage: 'response_web_image.png', title: '반응형 웹', url: '/about/naamezip/response' },
    {
      coverImage: 'daangn_x_naamezip.png',
      title: '당근마켓 미니앱',
      url: '/about/naamezip/miniapp',
    },
    // { coverImage: 'component-cover.png', title: '컴포넌트', url: '/about/naamezip/component' },
    {
      coverImage: 'leave_coverImage.png',
      title: '이탈 플로우 정리',
      url: '/about/naamezip/leave',
    },
  ];

  useEffect(() => {
    if (isModalOpen) {
      history.replace(undefined, { isModalOpen: false });
    } else {
      window.scrollTo(0, 0);
    }
  }, [isModalOpen]);
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
            <h1 className={cx('headline1BD')} style={{ paddingBottom: '8px' }}>
              황다희
            </h1>
            <h2 className={cx('headline3BD')} style={{ paddingBottom: '8px' }}>
              2002.05.22
            </h2>
            <div className={cx('chip-container')}>
              <Chip
                text={`Frontend-Devloper`}
                textColor="#1b1b1e"
                backgroundColor="#fffcec"
                size="LG"
                className={cx('label', isTablet ? 'captionBD' : 'overlineBD')}
              />
              <a href="https://ko.reactjs.org/">
                <Chip
                  text={`React.js`}
                  textColor="#1b1b1e"
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
              컴퓨터과학과에 입학하여 재학중입니다.
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
                        textColor="#1b1b1e"
                        backgroundColor={
                          skill?.type === 'analytics'
                            ? '#e2fae7'
                            : skill?.type === 'tool'
                            ? '#fff1d5'
                            : '#fad2c8'
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
          <div className={cx('activicy-description', isDesktop ? 'title2RG' : 'bodyRG')}>
            <ol>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                홈페이지 전반 ui/ux 개선 및 유지보수
              </li>
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
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                반응형 웹 개선
              </li>
              <ul>
                <li>
                  기존에는 모바일과 데스크탑 사이즈밖에 없었지만 태블릿을 추가하여 3가지의 디바이스
                  사이즈를 고려하여 스타일과 레이아웃이 변경될 수 있도록 하였습니다.
                </li>
                <li>
                  sass의 mixin과 include를 사용하여 사이즈를 재사용하여 지정할 수 있도록 했습니다.
                </li>
              </ul>
              <button
                className={cx(isTablet ? 'bodyMD' : 'captionMD')}
                onClick={() => {
                  history.push('/about/naamezip/response');
                }}
              >
                더 자세히 보기
              </button>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                홈페이지 분석
              </li>
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
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                데이터 시각화
              </li>
              <ul>
                <li>
                  지표에 필요한 데이터를 database에서 추출한 결과를 통해 차트, 표 등으로 데이터
                  시각화를 했습니다.
                </li>
                <li>redash를 사용하여 데이터 시각화를 하였습니다.</li>
              </ul>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                컴포넌트 개발
              </li>
              <ul>
                <li>
                  infinity scroll, pagination 등 컴포넌트를 개발하여 재사용할 수 있도록 하였습니다.
                </li>
              </ul>
              <button
                className={cx(isTablet ? 'bodyMD' : 'captionMD')}
                onClick={() => history.push('/about/naamezip/component')}
              >
                더 자세히 보기
              </button>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                애자일(Agile)
              </li>
              <ul>
                <li>
                  2주 단위로 스프린트를 진행하였으며 마지막 날에 다음 스프린트를 위한 플래닝 회의를
                  진행하셨습니다.
                </li>
              </ul>
            </ol>
            <div className={cx('naamezip-activity')}>
              <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>남의집 프로젝트 보기</h2>
              <div className={cx('items-container')}>
                {workingPage?.map((page, index) => {
                  return (
                    <div onClick={() => history.push(page?.url)}>
                      <div className={cx('image-container')}>
                        <img src={baseImageUrl + page?.coverImage} />
                      </div>
                      <h3 className={cx(isTablet ? 'title2MD' : 'bodyMD')}>{page?.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr className={cx('sub-divider')} />
          </div>
        </div>
        <div className={cx('job-desc-wrapper', 'danble-wrapper')}>
          <div className={cx('company-icon', 'danble')}>
            {isTablet ? <SvgDanble /> : <SvgDanbleSm />}
            <div>
              <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>
                <a href="https://danble.co.kr" target="_blank">
                  테일러타운 / 댄블
                </a>
              </h2>
              <h3 className={cx(isTablet ? 'headline3MD' : 'title1MD')}>
                2023년 05월
                <br />- 재직중
              </h3>
            </div>
          </div>
          <div className={cx('activicy-description', isDesktop ? 'title2RG' : 'bodyRG')}>
            <ol>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                코드 최적화
              </li>
              <ul>
                <li>
                  이미지 리사이징(CDN)을 통해 느리게 불러지던 이미지들의 용량을 조절하여 빠르게
                  로드되도록 변경했습니다.
                </li>
                <li>
                  이미지 리사이징(CDN)을 통해 느리게 불러지던 이미지들의 용량을 조절하여 빠르게
                  로드되도록 변경했습니다.
                </li>
              </ul>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                컴포넌트 개발
              </li>
              <ul>
                <li>toast popup, 헤더 등 컴포넌트를 개발하여 재사용할 수 있도록 하였습니다.</li>
              </ul>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                seo 최적화
              </li>
              <ul>
                <li>
                  테크니컬 seo 적용을 위해 구조화된 데이터를 적용하였습니다.
                  <ul>
                    <li>
                      조직(Organization), 상품(Product) 등에 적용하여 검색 시 더 가공된 데이터가
                      노출되도록 하였습니다.
                    </li>
                  </ul>
                </li>
                <li>html semantic 태그로 태그들을 변경하여 seo 성능을 더 향상되도록 하였습니다.</li>
              </ul>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                애자일(Agile)
              </li>
              <ol>
                <li>2주/1주 단위로 스프린트를 진행했습니다.</li>
                <li>
                  매주 플래닝 회의를 통해 백로그들을 보며 다음 스프린트에 어떤 태스크를 진행할지
                  계획했습니다.
                </li>
                <li>매주 진행했던 태스크의 지표를 보며 회고하고 디벨롭하였습니다.</li>
              </ol>
            </ol>
            <hr className={cx('sub-divider')} />
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
          <div className={cx('activicy-description', isDesktop ? 'title2RG' : 'bodyRG')}>
            <ol>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                DND 운영
              </li>
              <ul>
                <li>사이드프로젝트 7기 지원자 선발</li>
                <li>사이드프로젝트 8기 지원자 선발</li>
                <li>조 멘토링(2022.07 - )</li>
              </ul>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                개발 세미나 계획
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className={cx('education-container')} id="education">
        <h1 className={cx('headline1BD')}>EDUCATION</h1>
        <div className={cx('education-wrapper')}>
          <div className={cx('school', isTablet ? 'headline2SB' : 'title1BD')}>방송통신대학교</div>
          <div className={cx('school-info')}>
            <h4 className={cx(isTablet ? 'title2MD' : 'bodyMD')}>컴퓨터 과학과</h4>
            <h5 className={cx(isTablet ? 'title2RG' : 'bodyRG')}>2021년 입학 - 재학 중</h5>
          </div>
        </div>
        <div className={cx('education-wrapper')}>
          <div className={cx('school', isTablet ? 'headline2SB' : 'title1BD')}>
            미림여자정보과학고등학교
          </div>
          <div className={cx('school-info')}>
            <h4 className={cx(isTablet ? 'title2MD' : 'bodyMD')}>뉴미디어 소프트웨어과</h4>
            <h5 className={cx(isTablet ? 'title2RG' : 'bodyRG')}>2018년 입학 - 2021년 2월 졸업</h5>
          </div>
        </div>
      </section>
      <section className={cx('certificate-container')} id="certificate">
        <h1 className={cx('headline1BD')}>CERTIFICATE</h1>
        <div className={cx('certificate-wrapper')}>
          <div className={cx('certificate', isTablet ? 'headline2SB' : 'title1BD')}>
            정보처리 기능사
          </div>
          <div className={cx('certificate-info')}>
            <h4 className={cx(isTablet ? 'title2MD' : 'bodyMD')}>과학기술정보통신부</h4>
            <h5 className={cx(isTablet ? 'title2RG' : 'bodyRG')}>2020년 8월 취득</h5>
          </div>
        </div>
        <div className={cx('certificate-wrapper')}>
          <div className={cx('certificate', isTablet ? 'headline2SB' : 'title1BD')}>
            ITQ 아래한글 (A)
          </div>
          <div className={cx('certificate-info')}>
            <h4 className={cx(isTablet ? 'title2MD' : 'bodyMD')}>한국생산성본부</h4>
            <h5 className={cx(isTablet ? 'title2RG' : 'bodyRG')}>2019년 5월 취득</h5>
          </div>
        </div>
        <div className={cx('certificate-wrapper')}>
          <div className={cx('certificate', isTablet ? 'headline2SB' : 'title1BD')}>
            ITQ 한글파워포인트 (B)
          </div>
          <div className={cx('certificate-info')}>
            <h4 className={cx(isTablet ? 'title2MD' : 'bodyMD')}>한국생산성본부</h4>
            <h5 className={cx(isTablet ? 'title2RG' : 'bodyRG')}>2019년 5월 취득</h5>
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
                onClick={() => {
                  history.replace(undefined, { isModalOpen: true });
                }}
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
export default withRouter(About);

export const path = ['/', '/about'];
