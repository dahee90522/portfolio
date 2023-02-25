import * as Page from 'Pages';

import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ExperienceModalPage from 'Pages/About/ExperienceModalPage';
import LoadingState from './util/LoadingState';
import { Provider } from 'mobx-react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(style);

function MainRouter() {
  const location = useLocation();
  const routes = Object.keys(Page).map((pageName) => Page[pageName]);
  const [previousLocation, setPreviousLocation] = useState(location);
  useEffect(() => {
    if (!(location?.state && location?.state?.modal)) {
      setPreviousLocation(location);
    }
  }, [location]);
  const isModal = location?.state && location?.state?.modal && previousLocation !== location;
  return (
    <div className={cx('router')}>
      <Provider loading={LoadingState}>
        <Switch location={isModal ? previousLocation : location}>
          {routes.map((route) => {
            return <Route key={route?.path} exact path={route?.path} component={route.default} />;
          })}
          <Route exact path="/experience/:experienceId" component={ExperienceModalPage} />
          <Redirect path="*" to="/" />
        </Switch>
        {isModal ? (
          <Route exact path="/experience/:experienceId">
            <ExperienceModalPage isModal />
          </Route>
        ) : null}
      </Provider>
    </div>
  );
}

export default MainRouter;
