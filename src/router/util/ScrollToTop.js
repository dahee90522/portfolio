import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location: { pathname, search } }) => {
  useEffect(() => {
    if (pathname.indexOf('/experience/') >= 0 || pathname === '/') {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return children;
};

export default withRouter(ScrollToTop);
