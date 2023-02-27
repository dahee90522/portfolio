import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import classNames from 'classnames/bind';
import styles from './naamezipResponse.module.scss';
import { useResponsive } from 'Utils/responsive';

const baseImageUrl = 'https://hh-image-bucket.s3.ap-northeast-2.amazonaws.com/';
const cx = classNames.bind(styles);
function naamezipResponse({ match }) {
  const { isMobile, isTablet, isdesktop } = useResponsive();
  const lists = [
    {
      url: 'https://naamezip.com',
      description: [
        '첫번째 section 메인 이미지 롤링 배너의 해당 이미지 순서 - 모바일/태블릿 : 노출, 데스크탑 : 미노출',
        '카테고리 개수 - 모바일 : 7개, 태블릿/데스크탑 : 9개',
        '슬롯 - 모바일/태블릿 : 2개씩 2줄, 데스크탑 : 4개씩 1줄',
        '하프배너 - 모바일 : 좌 우 스크롤, 태블릿/데스크탑 : 절반씩 좌 우 버튼으로 슬라이드',
        '인스타그램 - 모바일/태블릿 : 3개, 데스크탑 : 5개',
      ],
      images: [
        { display: '모바일', url: 'main_mobile.png' },
        { display: '태블릿', url: 'main_tablet.png' },
        { display: '데스크탑', url: 'main_desktop.png' },
      ],
    },
    {
      url: 'https://naamezip.com/landing/host',
      description: [
        '남의집 호스트를 소개해요 - 모바일 : 2개씩 3줄, 데스크탑 : 3개씩 2줄',
        '남의집은 이렇게 만들어요 - 이미지 위치 변경',
        '남의집은 언제나 열려있어요 - 레이아웃 변경',
      ],
      images: [
        { display: '모바일', url: 'host_mobile.png' },
        { display: '데스크탑', url: 'host_desktop.png' },
      ],
    },
    {
      url: 'https://naamezip.com/about',
      description: [
        '호스트/게스트 설명 - 모바일 : 상 하 레이아웃, 데스크탑 : 좌 우 레이아웃',
        '성장하는 남의집 - 모바일 : 상 하 레이아웃, 데스크탑 : 좌 우 레이아웃',
        '언론에서 만난 남의집 - 모바일 : 상 하 레이아웃, 데스크탑 : 좌 우 레이아웃',
      ],
      images: [
        { display: '모바일', url: 'about_mobile.png' },
        { display: '데스크탑', url: 'about_desktop.png' },
      ],
    },
  ];
  return (
    <div className={cx('naamezip-response-container')}>
      <span className={cx(isTablet ? 'bodyRG' : 'captionRG')}>남의집 프로젝트</span>
      <h1 className={cx('headline1BD')}>반응형 웹</h1>
      <img
        className={cx('code-image')}
        src={'https://hh-image-bucket.s3.ap-northeast-2.amazonaws.com/response_code.png'}
      />
      <div className={cx('response-lists-container')}>
        {lists?.map((list, index) => {
          return (
            <div key={`response-container-${index}`} className={cx('response-container')}>
              <a href={list?.url} target="_blank">
                <h2 className={cx(isTablet ? 'headline3BD' : 'title1BD')}>{list?.url}</h2>
              </a>
              {list?.description?.length > 0 && (
                <ul className={cx(isTablet ? 'title2RG' : 'bodyRG')}>
                  {list?.description?.map((description, idx) => {
                    return <li>{description}</li>;
                  })}
                </ul>
              )}
              <div className={cx('response-images-container')}>
                {list?.images?.map((image, idx) => {
                  return (
                    <div key={`image-container-${idx}`} className={cx('image-container')}>
                      <img src={baseImageUrl + image?.url + '?w=500'} />
                      <div>{image?.display}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default naamezipResponse;

export const path = '/about/naamezip/response';
