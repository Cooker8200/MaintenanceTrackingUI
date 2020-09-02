import * as React from 'react';
import { Grid, Typography, Menu, Button, MenuItem } from '@material-ui/core';
import { useState } from 'react';
import { Navigation } from '../../../constants/Navigation';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const MainAppBar: React.FC<RouteComponentProps> = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (): void => {
    setAnchorEl(null);
  };

  const closeNavigationMenu = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={11}>
          <Typography>Banducci Enterprises</Typography>
        </Grid>
        <Grid item xs={1}>
          <Button
            onClick={handleMenuButtonClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onBackdropClick={closeNavigationMenu}
          >
            {Object.keys(Navigation).map(item => (
              <MenuItem
                onClick={handleMenuItemClick}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
        {!window.location.pathname.includes('/home') &&
          <Grid item xs={12}>
            Insert Breadcrumbs here
          </Grid>
        }
      </Grid>
    </div>
  )
};

export default withRouter(MainAppBar);