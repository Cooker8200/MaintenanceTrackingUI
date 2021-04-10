import * as React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';

const NavigationBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <Link href='/home'>home</Link>
      {window.location.pathname.split('/').slice(1).map(path => (
        <Link
          href={path}
        >
          {path}
        </Link>
      ))}
    </Breadcrumbs>
  )
};

export default NavigationBreadcrumbs;