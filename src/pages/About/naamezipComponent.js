import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import classNames from 'classnames/bind';
import styles from './naamezipComponent.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function naamezipComponent({ match }) {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const componentLists = [
    {
      title: 'add delete input',
      url: 'https://dahee-components.web.app/input_add_remove',
      description: [
        '질문을  지정하거나 주제와 설명을 작성할 수 있는 input',
        '사이에 있는 input을 - / + 버튼을 통해 추가 또는 삭제 가능',
      ],
    },
    {
      title: 'calendars',
      url: 'https://dahee-components.web.app/calendar',
      description: [
        'Multi date picker',
        {
          subDescription: ['여러 날짜를 한번에 선택할 수 있는 달력 컴포넌트'],
        },
        'Specific block date picker',
        {
          subDescription: [, '여러 날짜 중 한 날짜를 선택할 수 있는 달력 컴포넌트'],
        },
        'date range picker',
        {
          subDescription: ['날짜의 시작일과 종료일을 지정하는 달력 컴포넌트'],
        },
      ],
      usedLibrary: 'react-dates',
    },
    {
      title: 'counter',
      url: 'https://dahee-components.web.app/counter',
      description: ['숫자를 더하고 뺄 수 있는 컴포넌트'],
    },
    {
      title: 'font style',
      url: 'https://dahee-components.web.app/font_style',
      description: ['각 폰트별 스타일을 설정하고 해당 이름을 클래스에 추가하여 스타일을 추가'],
    },
    {
      title: 'image gallery',
      url: 'https://dahee-components.firebaseapp.com/image_gallery',
      description: ['이미지를 슬라이드 형식으로 보여주어 쉽게 이미지를 볼 수 있게 함'],
      usedLibrary: 'react-image-gallery',
    },
    {
      title: 'pagination button',
      url: 'https://dahee-components.firebaseapp.com/pagination',
      description: ['콘텐츠를 여러 개 페이지에 나눠서 보여주는 사용자 인터페이스입니다.'],
    },
    {
      title: 'pop modal',
      url: 'https://dahee-components.firebaseapp.com/pop_modal',
      description: ['아래에서 위로 올라오는 모달 컴포넌트'],
    },
    {
      title: 'time picker',
      url: 'https://dahee-components.web.app/time_picker',
      description: ['시간을 선택할 수 있는 컴포넌트'],
    },
    {
      title: 'time picker range',
      url: 'https://dahee-components.web.app/time_picker_range',
      description: ['시간 범위를 선택할 수 있는 컴포넌트'],
    },
    {
      title: 'toast popup',
      url: 'https://dahee-components.web.app/toast_popup',
      description: ['버튼을 누르면 하단에서 팝업이 튀어오르는 토스트팝업 컴포넌트'],
    },
  ];
  return (
    <div className={cx('naamezip-component-container')}>
      <span className={cx(isTablet ? 'bodyRG' : 'captionRG')}>남의집 프로젝트</span>
      <h1 className={cx('headline1BD')}>컴포넌트</h1>
      {componentLists?.map((component, index) => {
        return (
          <div className={cx('component-container')}>
            <h2 className={cx(isTablet ? 'headline1BD' : 'headline3BD')}>{component?.title}</h2>
            <a
              href={component?.url}
              target="_blank"
              className={cx(isTablet ? 'title1MD' : 'bodyMD')}
            >
              {component?.url}
            </a>
            {component?.usedLibrary && (
              <div className={cx(isTablet ? 'title1MD' : 'bodyMD')}>
                사용한 라이브러리:{' '}
                <a href={'https://www.npmjs.com/package/' + component?.usedLibrary} target="_blank">
                  <Chip
                    text={component?.usedLibrary}
                    backgroundColor={'#fffcec'}
                    textColor={'#212121'}
                    size="LG"
                    className={cx('label', isTablet ? 'title1MD' : 'bodyMD')}
                  />
                </a>
              </div>
            )}
            <ul>
              {component?.description?.map((description, idx) => {
                return typeof description === 'string' ? (
                  <li className={cx(isTablet ? 'title1MD' : 'bodyMD')}>{description}</li>
                ) : (
                  typeof description === 'object' && (
                    <ul>
                      {description?.subDescription?.map((subDescription, subIdx) => {
                        return (
                          <li className={cx(isTablet ? 'title2RG' : 'bodyRG')}>{subDescription}</li>
                        );
                      })}
                    </ul>
                  )
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
export default naamezipComponent;

export const path = '/about/naamezip/component';
