import * as React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';

const NavigationBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      {window.location.pathname.split('/').slice(1).map(path => (
        <Link
          href={path === 'banducci-enterprises' ? 'banducci-enterprises/home' : path}
        >
          {path === 'banducci-enterprises' ? 'home' : path}
        </Link>
      ))}
    </Breadcrumbs>
  )
};

export default NavigationBreadcrumbs;