import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location: { pathname, search } }) => {
  useEffect(() => {
    if (pathname.indexOf('/experience/') >= 0 || pathname === '/') {
      return;
    }
    if (pathname.indexOf('/project') >= 0) {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return children;
};

export default withRouter(ScrollToTop);
