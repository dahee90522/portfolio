import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import { Link } from 'react-router-dom';
import Popup from 'Components/organisms/Modal/Popup';
import SvgCopy from 'Assets/svgs/copy.svg';
import SvgGitHub from 'Assets/svgs/github.svg';
import SvgGmail from 'Assets/svgs/gmail.svg';
import classNames from 'classnames/bind';
import copy from 'clipboard-copy';
import styles from './styles.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const { isMobile, isTablet, isdesktop } = useResponsive();
  return (
    <div className={cx('contact-container')}>
      <section id="contact">
        <h1 className={cx('headline1BD')}>CONTACT</h1>
        <div className={cx('contact-item-container')}>
          <div>
            <a href="https://github.com/dahee90522" target="_blank">
              <SvgGitHub />
            </a>
            <span className={cx(isTablet ? 'title2MD' : 'bodyMD')}>USER NAME</span>
            <button
              onClick={() => {
                copy('dahee90522');
                setIsCopied(true);
              }}
              className={cx(isTablet ? 'headline2SB' : 'title1BD')}
            >
              <SvgCopy />
              dahee90522
            </button>
          </div>
          <div>
            <a href="mailto:dahee86686@gmail.com">
              <SvgGmail />
            </a>
            <span className={cx(isTablet ? 'title2MD' : 'bodyMD')}>GMAIL</span>
            <button
              onClick={() => {
                copy('dahee86686@gmail.com');
                setIsCopied(true);
              }}
              className={cx(isTablet ? 'headline2SB' : 'title1BD')}
            >
              <SvgCopy />
              dahee86686@gmail.com
            </button>
          </div>
        </div>
        <div className={cx('resume')}>
          <h2 className={cx(isTablet ? 'headline1BD' : 'headline3BD')}> My resume is Here!!</h2>
          <Link
            className={cx(isTablet ? 'headline2SB' : 'title1BD')}
            to="/dahee_resume.pdf"
            download="dahee_resume"
            target="_blank"
          >
            Download
          </Link>
        </div>
      </section>
      <Popup
        openModal={isCopied}
        title={'복사되었습니다'}
        onCancel={() => setIsCopied(false)}
        onConfirm={() => setIsCopied(false)}
      />
    </div>
  );
}
export default Contact;

export const path = '/contact';
