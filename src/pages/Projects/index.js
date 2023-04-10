import { Link, withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import classNames from 'classnames/bind';
import projects from './projects.json';
import styles from './styles.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function Projects({ history, location }) {
  const { isMobile, isTablet, isdesktop } = useResponsive();
  const [isModalOpen, setIsModalOpen] = useState(!!location?.state?.isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      history.replace(undefined, { isModalOpen: false });
    } else {
      window.scrollTo(0, 0);
    }
  }, [isModalOpen]);
  return (
    <div className={cx('projects-container')}>
      <section id="experience">
        <h1 className={cx('headline1BD')}>PROJECTS</h1>
        <h2 className={cx(isTablet ? 'headline3MD' : 'title2MD')}>
          프로젝트에 투입되어 작업하거나, 개인 프로젝트로 제작한 프로젝트 모음집입니다.
          <br />
          아래 페이지에서 상세 정보를 확인하실 수 있습니다
        </h2>
        <div>
          {projects?.map((item, index) => {
            return (
              <Link
                key={`project-link-${index}`}
                to={{
                  pathname: `/project/${item?.id}`,
                  state: { modal: true },
                }}
                onClick={() => {
                  history.replace(undefined, { isModalOpen: true });
                }}
                className={cx('project-item-container')}
              >
                <div className={cx('coverimage-container')}>
                  <img src={item?.coverImage} />
                </div>
                <div className={cx('detail-container')}>
                  <h3 className={cx(isTablet ? 'title1MD' : 'title2MD')}>{item?.title}</h3>
                  <Chip
                    text={item?.type}
                    textColor={'#212121'}
                    backgroundColor={
                      item?.type === 'Java GUI'
                        ? '#e8deee'
                        : item?.type === '콘솔 / c'
                        ? '#fdecc8'
                        : item?.type === 'WEB'
                        ? '#efefef'
                        : item?.type === 'Java' && '#ffe2dd'
                    }
                    size="LG"
                    className={cx('label', isTablet ? 'bodyBD' : 'captionBD')}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default Projects;

export const path = '/projects';
