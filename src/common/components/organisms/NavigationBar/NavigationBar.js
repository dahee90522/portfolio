import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Lottie from 'react-lottie-player';
import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames/bind';
import { observer } from 'mobx-react';
import scrollDownJson from 'Assets/lottie/scroll-down.json';
import style from './NavigationBar.module.scss';
import { useResponsive } from 'Utils/responsive';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(style);

function NavigationBar(props) {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const { title } = props;
  const location = useLocation();
  const pathname = location.pathname;
  const [isEnter, setIsEnter] = useState(false);

  const [previousLocation, setPreviousLocation] = useState(location);
  useEffect(() => {
    if (!(location?.state && location?.state?.modal)) {
      setPreviousLocation(location);
    }
  }, [location]);
  const isModal =
    location?.state && location?.state?.modal && previousLocation !== location && isTablet;

  const index = [
    {
      id: 1,
      text: `Home`,
      to: '/',
      title: `DAHEE
      PORTFOLIO`,
      activeReg: [/^$/, /\/about/],
    },
    {
      id: 2,
      text: 'Projects',
      to: '/projects',
      title: 'PROJECTS',
      activeReg: [/^\/project/g, /\/projects/],
    },
    {
      id: 3,
      text: 'Contact',
      to: '/contact',
      title: 'CONTACT',
      activeReg: [/^\/contact/],
    },
  ];
  const [currentTitle, setCurrentTitle] = useState('');
  useEffect(() => {
    setIsEnter(false);
    setCurrentTitle(index?.filter((item) => item?.to === pathname)[0]?.title);
    setTimeout(() => {
      setIsEnter(true);
    }, 300);
  }, [pathname]);
  return (
    <>
      <div className={cx('header-container')}>
        {(isModal || ['/', '/about', '/projects', '/contact'].includes(pathname)) && (
          <div className={cx('introduce-container')}>
            <div
              className={cx(
                'content-wrapper',
                'job-wrapper',
                isTablet ? 'headline1MD' : 'title1MD',
              )}
            >
              Front-end Developer
              <div className={cx('border', isEnter ? 'active' : '')} />
            </div>
            <div className={cx('content-wrapper')}>
              {isEnter && (
                <TypeAnimation
                  sequence={[currentTitle]}
                  wrapper="div"
                  cursor={false}
                  className={cx('typing-area', 'headline1BD')}
                />
              )}
            </div>

            <Lottie
              animationData={scrollDownJson}
              play
              loop={true}
              className={cx('lottie-wrapper')}
            />
          </div>
        )}
        <div className={cx('content-container')}>
          <div className={cx('index-container')}>
            {index?.map((item) => {
              return (
                <Link
                  to={item?.to}
                  className={cx(
                    item?.activeReg?.some((reg) => new RegExp(reg).test(pathname)) ||
                      pathname === item?.to
                      ? 'active'
                      : '',
                    item?.activeReg?.some((reg) => new RegExp(reg).test(pathname)) ||
                      pathname === item?.to
                      ? 'title1BD'
                      : 'title1RG',
                  )}
                >
                  {item?.text}
                </Link>
              );
            })}
          </div>
          <div className={cx('children-container')}>{props?.children}</div>
        </div>
      </div>
    </>
  );
}
export default withRouter(observer(NavigationBar));
