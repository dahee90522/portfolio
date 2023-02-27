import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import classNames from 'classnames/bind';
import projects from './projects.json';
import styles from './styles.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function ProjectDetail({ match }) {
  const projectId = parseInt(match.params.projectId);
  const [projectDetail, setProjectDetail] = useState(
    projects?.filter((project) => {
      return project?.id === projectId;
    })[0],
  );
  const { isMobile, isTablet, isdesktop } = useResponsive();
  return (
    <div className={cx('project-detail-container')}>
      <span className={cx(isTablet ? 'bodyRG' : 'captionRG')}>project</span>
      <h1 className={cx('headline1BD')}>{projectDetail?.title}</h1>
      {projectDetail?.coverImage && (
        <div className={cx('cover-image-container', 'container')}>
          <img src={projectDetail?.coverImage} />
        </div>
      )}
      <div className={cx('information-container', 'container')}>
        <div>
          <div className={cx('info-title', isTablet ? 'title2BD' : 'bodyBD')}>SKILLS</div>
          <div className={cx('info-skill')}>
            {projectDetail?.skills?.map((skill, index) => {
              return (
                <Chip
                  key={`skill-${index}`}
                  text={skill?.text}
                  backgroundColor={skill?.color}
                  textColor={'#212121'}
                  size="LG"
                  className={cx('label', isTablet ? 'bodyBD' : 'captionBD')}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className={cx('info-title', isTablet ? 'title2BD' : 'bodyBD')}>TOOLS</div>
          <div className={cx('info-skill')}>
            {projectDetail?.tools?.map((tool, index) => {
              return (
                <Chip
                  key={`tool-${index}`}
                  text={tool?.text}
                  textColor={'#212121'}
                  backgroundColor={tool?.color}
                  size="LG"
                  className={cx('label', isTablet ? 'bodyBD' : 'captionBD')}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className={cx('info-title', isTablet ? 'title2BD' : 'bodyBD')}>진행기간</div>
          <div className={cx('info-duration', isTablet ? 'title2RG' : 'bodyRG')}>
            {projectDetail?.duration}
          </div>
        </div>
        <div>
          <div className={cx('info-title', isTablet ? 'title2BD' : 'bodyBD')}>개발인원</div>
          <div className={cx('info-member', isTablet ? 'title2RG' : 'bodyRG')}>
            {`${projectDetail?.peoples?.total}명 (` +
              (projectDetail?.peoples?.developer > 0
                ? '개발자 ' + projectDetail?.peoples?.developer + '명'
                : '') +
              (projectDetail?.peoples?.designer > 0
                ? ', 디자이너 ' + projectDetail?.peoples?.designer + '명'
                : '') +
              `)`}
          </div>
        </div>
        <div>
          <div className={cx('info-title', isTablet ? 'title2BD' : 'bodyBD')}>역할</div>
          <div className={cx('info-role')}>
            {projectDetail?.roles?.map((role, index) => {
              return (
                <Chip
                  key={`role-${index}`}
                  text={role}
                  textColor={'#212121'}
                  backgroundColor={
                    role === '기획'
                      ? '#ffe2dd'
                      : role === '백엔드'
                      ? '#fadec9'
                      : role === '프론트엔드'
                      ? '#efefef'
                      : role === '디자인'
                      ? '#d3e5ef'
                      : role === '개발' && '#dbeddb'
                  }
                  size="LG"
                  className={cx('label', isTablet ? 'bodyBD' : 'captionBD')}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className={cx('info-title', isTablet ? 'title2BD' : 'bodyBD')}>기여도</div>
          <div className={cx('info-contribution', isTablet ? 'title2RG' : 'bodyRG')}>
            {projectDetail?.contribution}
          </div>
        </div>
        <div>
          <div className={cx('info-title', isTablet ? 'title2BD' : 'bodyBD')}>카테고리</div>
          <div className={cx('info-category')}>
            <Chip
              text={projectDetail?.type}
              textColor={'#212121'}
              backgroundColor={
                projectDetail?.type === 'Java GUI'
                  ? '#e8deee'
                  : projectDetail?.type === '콘솔 / c'
                  ? '#fdecc8'
                  : projectDetail?.type === 'WEB'
                  ? '#efefef'
                  : projectDetail?.type === 'Java' && '#ffe2dd'
              }
              size="LG"
              className={cx('label', isTablet ? 'bodyBD' : 'captionBD')}
            />
          </div>
        </div>
        {projectDetail?.site && (
          <div>
            <div className={cx('info-title', isTablet ? 'title2BD' : 'bodyBD')}>사이트</div>
            <div className={cx('info-site', isTablet ? 'title2RG' : 'bodyRG')}>
              <a href={projectDetail?.site} target={'_blank'}>
                {projectDetail?.site}
              </a>
            </div>
          </div>
        )}
      </div>
      {projectDetail?.images?.length > 0 && (
        <div
          className={cx(
            'container',
            'introduce-images-container',
            projectDetail?.introduceImage ? 'introduce-image' : 'no-introduce-image',
          )}
        >
          {projectDetail?.introduceImage && <img src={projectDetail?.introduceImage} />}
          <div>
            {projectDetail?.images?.map((image, index) => {
              return <img src={image} />;
            })}
          </div>
        </div>
      )}
      {projectDetail?.details && (
        <div className={cx('detail-container', 'container')}>
          {projectDetail?.details?.map((detail, index) => {
            return (
              <div className={cx('detail-wrapper')} key={'detail' + index}>
                {detail?.title && (
                  <h2 className={cx(isTablet ? 'headline3BD' : 'title2BD')}>{detail?.title}</h2>
                )}
                {detail?.description && (
                  <h3 className={cx(isTablet ? 'title2RG' : 'bodyRG')}>{detail?.description}</h3>
                )}
                {detail?.image && <img src={detail?.image} />}
                {detail?.lists &&
                  detail?.lists?.map((list, idx) => {
                    return (
                      <div
                        className={cx(
                          'list-container',
                          detail?.type === 'flexable' ? 'flexable-list' : '',
                        )}
                        key={'list' + idx}
                      >
                        {list?.title && (
                          <h4
                            className={cx(isTablet ? 'title2BD' : 'bodyBD')}
                            dangerouslySetInnerHTML={{ __html: list?.title }}
                          ></h4>
                        )}
                        <div className={cx('list-description-container')}>
                          {list?.description?.map((description, descIndex) => {
                            return (
                              <div key={'list-description-' + descIndex}>
                                {typeof description === 'string' ? (
                                  <>
                                    <p>∙</p>
                                    <p className={cx(isTablet ? 'bodyRG' : 'captionRG')}>
                                      {description}
                                    </p>
                                  </>
                                ) : (
                                  typeof description === 'object' && (
                                    <img src={description?.image} />
                                  )
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      )}
      {projectDetail?.databases && (
        <div className={cx('databases-container', 'container')}>
          <h2 className={cx(isTablet ? 'headline3BD' : 'title2BD')}>데이터베이스 구조</h2>
          {projectDetail?.databases?.map((database, index) => {
            return (
              <div className={cx('database-wrapper')} key={'database' + index}>
                <div className={cx('image-container')}>
                  {database?.images?.map((image, index) => {
                    return (
                      <div>
                        <img src={image} />
                      </div>
                    );
                  })}
                </div>
                <div className={cx('caption-container', isTablet ? 'bodyRG' : 'captionMD')}>
                  {database?.caption}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {projectDetail?.prize && (
        <div className={cx('prize-container')}>
          <a className={cx(isTablet ? 'headline3BD' : 'title2BD')} href={projectDetail?.prize?.url}>
            {projectDetail?.prize?.title}
          </a>
          <div className={cx('prize-number', isTablet ? 'title2BD' : 'bodyBD')}>
            {projectDetail?.prize?.number}
          </div>
          <div className={cx('prize-date', isTablet ? 'title2RG' : 'bodyRG')}>
            {projectDetail?.prize?.date}
          </div>
          <div className={cx('prize-org', isTablet ? 'title2RG' : 'bodyRG')}>
            {projectDetail?.prize?.organization}
          </div>
          <div className={cx('prize-description', isTablet ? 'title2MD' : 'bodyMD')}>
            {projectDetail?.prize?.description}
          </div>
          <img src={projectDetail?.prize?.image} />
        </div>
      )}
    </div>
  );
}
export default ProjectDetail;

export const path = '/project/:projectId';
