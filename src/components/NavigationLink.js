import { forwardRef, useMemo } from 'react';
import { NavLink } from 'theme-ui';
import { useRouter } from 'next/router';

export const NavigationLink = forwardRef(function NavigationLink(props, ref) {
  const router = useRouter();

  const currentPage = useMemo(() => {
    return router.asPath.startsWith(props.href) ? 'page' : undefined;
  }, []);

  return <NavLink ref={ref} {...props} aria-current={currentPage} />;
});
