import * as Page from 'Pages';

import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import ExperienceModalPage from 'Pages/About/ExperienceModalPage';
import LoadingState from './util/LoadingState';
import ProjectDetailModal from 'Pages/Projects/ProjectDetailModal';
import { Provider } from 'mobx-react';
import ScrollToTop from './util/ScrollToTop';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { useLocation } from 'react-router-dom';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(style);

function MainRouter({ location }) {
  // const location = useLocation();
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const routes = Object.keys(Page).map((pageName) => Page[pageName]);
  const [previousLocation, setPreviousLocation] = useState(location);
  useEffect(() => {
    if (!(location?.state && location?.state?.modal)) {
      setPreviousLocation(location);
    }
  }, [location]);
  const isModal =
    location?.state && location?.state?.modal && previousLocation !== location && isTablet;
  return (
    <div className={cx('router')}>
      <Provider loading={LoadingState}>
        <Switch location={isModal ? previousLocation : location}>
          {routes.map((route) => {
            return <Route key={route?.path} exact path={route?.path} component={route.default} />;
          })}
          <Route exact path="/experience/:experienceId" component={ExperienceModalPage} />
          <Route exact path="/project/:projectId" component={ProjectDetailModal} />
          <Redirect path="*" to="/" />
        </Switch>
        {isModal ? (
          <>
            <Route exact path="/experience/:experienceId">
              <ExperienceModalPage isModal />
            </Route>
            <Route exact path="/project/:projectId">
              <ProjectDetailModal isModal />
            </Route>
          </>
        ) : null}
      </Provider>
    </div>
  );
}

export default withRouter(MainRouter);
