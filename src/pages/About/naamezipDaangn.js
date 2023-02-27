import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import classNames from 'classnames/bind';
import styles from './naamezipDaangn.module.scss';
import { useResponsive } from 'Utils/responsive';

const baseImageUrl = 'https://hh-image-bucket.s3.ap-northeast-2.amazonaws.com/';
const cx = classNames.bind(styles);
function naamezipDaangn({ match }) {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const explainLists = [
    {
      title: '첫 진입 시',
      url: ['daangn_entry.png'],
      usedComponent: {
        title: 'pop_modal',
        url: 'https://dahee-components.firebaseapp.com/pop_modal',
      },
      description: [
        '당근 미니앱에서 첫 진입시 나오는 모달입니다.',
        '배경을 눌러서 모달을 닫으면 다음 진입시에도 모달이 나오고 모달 내의 [X]버튼을 눌러 모달을 닫으면 그 후 진입시에는 뜨지 않습니다.',
        '[X] 버튼을 눌러 닫을 시 localStorage에 값을 저장하여 그 후 진입시 해당 값을 비교하여 나오도록 하였습니다.',
      ],
    },
    {
      title: '추천 남의집 페이지',
      url: ['daangn_recommend.png'],
      description: [
        '당근 미니앱에서 진입 시 랜딩되는 페이지입니다.',
        '슬롯은 총 [후기, 콜랙션, 새로운 남의집, 로컬큐레이터] 4가지이며 각 슬롯의 타입으로 레이아웃을 구성합니다.',
        '후기 슬롯 - 후기를 랜덤하게 노출하여 최대한 다양한 남의집을 노출합니다.',
        '콜랙션 슬롯 - 퍼널을 줄이고 리스트를 직접적으로 노출하여 더 빠른 접근이 가능하도록 합니다. 다른 카테고리들 사이사이에 배치시켜 다양한 탐색이 가능하도록 합니다.',
        '새로운 남의집 슬롯 - 다양한 남의집을 탐색할 수 있도록 추천 상품 외의 객관적인 카테고리인 새로 들어온 남의집을 노출합니다.',
        '로컬 큐레이터 슬롯 - 로컬큐레이터가 직접 큐레이팅한 남의집들을 로컬큐레이터별로 모아두어 쉽게 탐색이 가능하도록 합니다.',
      ],
    },
    {
      title: '내 근처 페이지',
      url: ['daangn_list.png'],
      description: [
        '남의집의 리스트를 확인할 수 있는 페이지입니다.',
        '기본적으로 당근에 등록되어있는 지역을 기반으로 지정된 거리 내의 남의집이 보여집니다.',
        '검색을 통해 특정 남의집을 쉽게 탐색할 수 있습니다.',
        '인피니티 스크롤을 통해 지정 개수만큼만 데이터를 불러와서 페이지 로드시간을 단축시켰습니다.',
        '리스트에서 상세페이지로 진입시에 페이지 스크롤 위치를 localStorage에 저장하여 뒤로가기를 통해 내 근처 페이지로 돌아올 경우 스크롤이 유지되도록 하여 더 나은 사용자 경험이 되도록 했습니다.',
      ],
    },
    {
      title: '내 근처 페이지 - 필터',
      url: ['daangn_list_filter.png', 'daangn_list_filter2_calendar.png'],
      usedComponent: {
        title: 'pop_modal',
        url: 'https://dahee-components.firebaseapp.com/pop_modal',
      },
      description: [
        '내 근처페이지에서 검색바 하단에 있는 필터를 통해 사용자가 특정 남의집을 더 쉽게 확인할 수 있게 합니다.',
        '날짜 필터의 경우 특정 날짜를 선택할 수 있도록 하여 더욱 더 원하는 남의집에 접근할 수 있도록 합니다.',
        '필터값들은 json으로 된 데이터를 백엔드로부터 받아와 쉽게 필터 내용을 수정할 수 있도록 합니다.',
      ],
    },
    {
      title: '마이페이지',
      url: ['daangn_mypage.png', 'daangn_being_host.png'],
      description: [
        '신청한 남의집의 신청 상태를 확인 가능합니다.',
        '신청했던 남의집과 취소했던 남의집들은 [신청탭]에서 확인 가능합니다.',
        `참여 완료 후 후기작성 전의 남의집들과 작성했던 후기들은 [후기탭]에서 확인 가능합니다.`,
        '남의집 신규 호스트 가입 시 웹에서 로그인하기 위한 이메일과 비밀번호를 추가로 생성하게 됩니다.',
      ],
    },
    {
      title: '상세페이지',
      url: ['daangn_detail_short1.png', 'daangn_detail_short2.png', 'daangn_detail_short3.png'],
      usedComponent: {
        title: 'image_gallery',
        url: 'https://dahee-components.firebaseapp.com/image_gallery',
      },
      description: [
        '남의집 상세내역을 확인할 수 있는 페이지입니다.',
        '현재 신청 가능한 방문 일정을 쉽게 확인 할 수 있습니다.',
        `호스트가 에디터를 통해 작성한 소개 내용을 확인할 수 있습니다. 현재 에디터는 'froala-editor'를 사용중입니다.`,
        'image gallery를 사용하여 공간 소개 이미지를 쉽게 확인할 수 있습니다. 호스트는 최소 4개, 최대 10개의 공간이미지를 등록합니다.',
        '후기는 3개 단위로 확인 가능하며 [더보기] 버튼을 누르면 3개가 추가되어 보여집니다.',
        '추천 남의집은 사용자가 본 남의집을 기반하여 남의집을 추천하여 취향에 맞는 다양한 남의집을 확인할 수 있도록 합니다.',
      ],
    },
  ];
  return (
    <div className={cx('naamezip-component-container')}>
      <span className={cx(isTablet ? 'bodyRG' : 'captionRG')}>남의집 프로젝트</span>
      <h1 className={cx('headline1BD')}>당근마켓 미니앱 개발</h1>
      <h2 className={cx(isDesktop ? 'headline1MD' : 'title1MD')}>
        당근마켓 &gt; 내 근처 &gt; 당근미니 탭에 들어가 있는 남의집 미니앱을 개발했습니다.
      </h2>
      <ul className={cx(isTablet ? 'title1MD' : 'bodyMD')}>
        <li>
          PO, 백엔드 개발자, 디자이너와 한팀을 이뤄 협업했으며 당근마켓 미니앱 팀과 함께 협업하여
          미니앱의 기능을 발전시켰습니다.
        </li>
        <li>
          앰플리튜드를 통해 사용자의 행동을 파악하고 당근마켓을 통해 유입된 신규 유저의 리텐션을
          높이기 위해 A/B 테스트를 진행했습니다.
        </li>
      </ul>
      <div className={cx('page-explain-container')}>
        {explainLists?.map((explainList, index) => {
          return (
            <div className={cx('explain-container')} key={`explain-container-${index}`}>
              <div className={cx('info-container')}>
                {isTablet && <h3 className={cx('headline2SB')}>{explainList?.title}</h3>}
                <div className={cx('description', isTablet ? 'title1RG' : 'bodyRG')}>
                  {explainList?.description?.map((description, idx) => {
                    return (
                      <div>
                        <p>∙</p>
                        <p>{description}</p>
                      </div>
                    );
                  })}
                </div>
                {explainList?.usedComponent && (
                  <div className={cx('used-component', isTablet ? 'title1MD' : 'bodyMD')}>
                    사용한 컴포넌트 :
                    <a href={explainList?.usedComponent?.url}>
                      <Chip
                        text={explainList?.usedComponent?.title}
                        textColor="#1b1b1e"
                        backgroundColor="#fffcec"
                        size="LG"
                        className={cx('label', isTablet ? 'title2BD' : 'bodyBD')}
                      />
                    </a>
                  </div>
                )}
              </div>
              <div
                className={cx(
                  'image-container',
                  explainList?.url?.length === 1
                    ? 'image-container-1'
                    : explainList?.url?.length === 2
                    ? 'image-container-2'
                    : explainList?.url?.length === 3
                    ? 'image-container-3'
                    : '',
                )}
              >
                {explainList?.url?.map((url, idx) => {
                  return <img src={baseImageUrl + url + '?w=500'} />;
                })}
              </div>
              {isMobile && <h3 className={cx('headline3BD')}>{explainList?.title}</h3>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default naamezipDaangn;

export const path = '/about/naamezip/miniapp';
